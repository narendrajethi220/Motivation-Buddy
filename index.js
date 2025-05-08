// link to the bot --> https://t.me/StayMotivatedBuddyBot
const { Telegraf, session } = require("telegraf");
const schedule = require("node-schedule");
const getRandomQuote = require("./getRandomQuote");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session());
const userSchedules = {};
// start command

bot.hears("hi", (ctx) => ctx.reply("Hey there 🙋‍♂️"));

bot.start((ctx) => {
  ctx.reply(
    "Welcome to Motivation Buddy! 🌟\n" +
      "Use /quote to get a motivational quote or /help for more info."
  );
});

// help command
bot.help((ctx) => {
  ctx.reply(
    "Commands:\n" +
      "/start -  Start the bot \n" +
      "/quote - Get a motivation quote \n" +
      '/daily -  Schedule a daily quote (e.g., "8" for 8 AM)\n' +
      "/help - Show this help message \n\n" +
      "'Inspirational quotes provided by ZenQuotes API (https://zenquotes.io).'"
  );
});

//quote command
bot.command("quote", async (ctx) => {
  console.log("Fetching quote...");
  const quote = await getRandomQuote();
  ctx.reply(quote);
});
bot.catch((err, ctx) => {
  console.error(`Bot error :${err}`);
  ctx.reply("Something went wrong. Please try again!");
});

// daily quote
bot.command("daily", (ctx) => {
  ctx.session = { awaitingHour: true };
  ctx.reply('Enter the hour (0-23) for daily quotes (e.g., "8" for 8 AM):');
});

bot.on("text", async (ctx) => {
  console.log(ctx.session);
  if (ctx.session && ctx.session.awaitingHour) {
    const hour = parseInt(ctx.message.text);
    if (isNaN(hour) || hour < 0 || hour > 23) {
      ctx.reply("Please enter a valid hour (0-23)");
      return;
    }

    const userId = ctx.from.id;

    if (userSchedules[userId]) {
      userSchedules[userId].cancel();
      console.log(`Cancelled previous schedule for user: ${userId}`);
    }

    userSchedules[userId] = schedule.scheduleJob(
      { hour, minute: 0 },
      async () => {
        console.log(`Sending daily quote to user :${userId} at ${hour}:00`);
        const quote = await getRandomQuote();
        ctx.telegram.sendMessage(userId, `Your daily motivation: ${quote}`);
      }
    );

    ctx.reply(`Daily quotes scheduled for ${hour}:00!`);
    ctx.session.awaitingHour = false;
    console.log(`Schedule daily quote for user:${userId} at ${hour}:00`);
  }
});
const url = "https://t.me/StayMotivatedBuddyBot";

bot.launch().then(() => {
  console.log(`Bot is running...${url}`);
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
