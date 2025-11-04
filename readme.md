# 🧠 DiaGem CLI Bot

A **minimal TypeScript CLI chatbot** built using the [`diaflow-gemini`](https://www.npmjs.com/package/diaflow-gemini) SDK.  
This example demonstrates how to connect to **Google Gemini 2.0 Flash** via DiaFlow and interact through your terminal.

---

## 🚀 Features

- ⚡ Minimal setup — less than 50 lines of code  
- 💬 Interactive terminal chat (type & get instant responses)  
- 🔐 Secure API key loading via `.env`  
- 🧩 Built with modern TypeScript and Node 22+

---

## 🛠️ Setup

### 1️⃣ Clone this repo
```bash
git clone https://github.com/tanmayvaij/diagem-cli-bot.git
cd diagem-cli-bot
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure your Gemini API key

Copy the example file and edit it:

```bash
cp .env.example .env
```

Then open `.env` and paste your Gemini API key:

```
GEMINI_API_KEY=your_api_key_here
```

You can get a key from the [Google AI Studio Console](https://aistudio.google.com/).

---

## 💻 Run the bot

Run with `tsx`:

```bash
npx tsx main.ts
```

Example session:

```
USER : hi
AI : Hello! How can I help you today?

USER : write a haiku about TypeScript
AI : Static types sing loud,
JavaScript’s calm evolution,
Errors fade away.
```

Type `exit` to quit the session.

---

## 🧩 Project Structure

```
diagem-cli-bot/
├── .env.example     # Template for API key
├── main.ts          # Core CLI logic
├── package.json     # Dependencies & metadata
└── README.md        # You're reading it!
```

---

## 🧠 How It Works

1. Loads your API key from `.env`
2. Initializes a `diaflow-gemini` Agent with Gemini 2.0 Flash
3. Opens a readline interface to accept user prompts
4. Sends each prompt to the LLM and prints the response

---

## 🧰 Tech Stack

* Node.js (v22+)
* TypeScript
* diaflow-gemini
* dotenv
* readline/promises

---

## 🧪 Example Use Cases

* Quick LLM experimentation
* Local chatbot or CLI assistant
* Base for plugin-style terminal tools
* Teaching resource for `diaflow-gemini` SDK

---

## 📜 License

MIT © [Tanmay Vaij](https://github.com/tanmayvaij)

---

### ⭐ If you find this helpful, consider starring the repo!