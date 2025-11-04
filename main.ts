import Agent from "diaflow-gemini";
import { createInterface } from "readline/promises";
import { config } from "dotenv";

config();

const rl = createInterface({ input: process.stdin, output: process.stdout });

const agent = new Agent({
  apiKey: process.env.GEMINI_API_KEY!,
  model: "gemini-2.0-flash",
});

const main = async () => {
  while (true) {
    const prompt = await rl.question("USER : ");
    if (prompt === "exit") process.exit(0);

    const llmResponse = await agent.run(prompt);

    console.log(`AI : ${llmResponse}`);
  }
};

main();
