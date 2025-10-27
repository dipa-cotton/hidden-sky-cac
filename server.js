import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an expert on light pollution. You explain things simply and clearly for students. Always stay on the topic of light pollution and related environmental issues."
          },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("OpenAI API Error:", data.error);
      return res.status(500).json({ reply: "⚠️ OpenAI API error: " + data.error.message });
    }

    if (data.choices && data.choices[0] && data.choices[0].message) {
      res.json({ reply: data.choices[0].message.content });
    } else {
      console.error("Unexpected API response:", data);
      res.json({ reply: "⚠️ Unexpected response from AI." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
app.get("/", (req, res) => {
  res.send("✅ Hidden Sky backend is running!");
});
app.listen(3000, () => console.log("✅ Light Pollution AI running on http://127.0.0.1:3000"));
