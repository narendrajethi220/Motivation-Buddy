# Motivation Buddy 🤖

**Motivation Buddy** is a Telegram bot that sends you daily motivational quotes, powered by the ZenQuotes API.

* **Bot Handle:** [@StayMotivatedBuddyBot](https://t.me/StayMotivatedBuddyBot)
* **Repo:** [GitHub - Motivation Buddy](https://github.com/narendrajethi220/Motivation-Buddy)

![Screenshot (61)](https://github.com/user-attachments/assets/e5382f16-9472-4a72-9044-d0726a08ffe5)
![Screenshot (62)](https://github.com/user-attachments/assets/6e88e56b-2106-4374-92ce-2fcfc02bd73b)

## ✨ Features

* `/quote` – Get a motivational quote instantly
* `/daily` – Schedule daily quotes at a specific hour
* `/start`, `/help` – Easy-to-use guidance commands
* `hi` – Friendly greeting
* Reliable and clean shutdown handling

## 🚀 Setup

### Prerequisites

* Node.js v18+ (v20 recommended)
* Telegram Bot Token from [BotFather](https://t.me/BotFather)
* Git

### Installation

```bash
git clone https://github.com/narendrajethi220/Motivation-Buddy.git
cd Motivation-Buddy
npm install
```

### Configure

Create a `.env` file in the root:

```env
BOT_TOKEN=your_bot_token
```

### Run the Bot

```bash
# Development
npm run dev

# Production
npm start
```

## 💬 Commands

| Command | Description                        |
| ------- | ---------------------------------- |
| /start  | Welcome message                    |
| /quote  | Get a motivational quote           |
| /daily  | Schedule daily quote at given hour |
| /help   | List commands                      |
| hi      | Friendly greeting                  |

## 📦 Deployment Notes

* Store scheduled users in a database (e.g., MongoDB) for persistence
* Use webhooks for scalable deployments (Heroku, Render, etc.)
* Daily quotes follow server time

## 📬 Contact

* GitHub: [narendrajethi220](https://github.com/narendrajethi220)
* Telegram: [@StayMotivatedBuddyBot](https://t.me/StayMotivatedBuddyBot)

# Developed with 💓 by Narendra Singh Jethi

