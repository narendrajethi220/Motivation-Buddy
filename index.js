// link to the bot --> https://t.me/StayMotivatedBuddyBot
const { Telegraf } = require("telegraf");
const getRandomQuote = require("./getRandomQuote");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// start command
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

const url = "https://t.me/StayMotivatedBuddyBot";

bot.launch().then(() => {
  console.log(`Bot is running...${url}`);
});

process.once("SIGINT", () => bot.stop("SIGNINT"));
