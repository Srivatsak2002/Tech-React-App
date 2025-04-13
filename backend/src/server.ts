import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Ollama API endpoint
const OLLAMA_API_URL = process.env.OLLAMA_API_URL || 'http://localhost:11434/api/generate';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'llama3';

app.use(cors());
app.use(express.json());

// AI Tech Explainer endpoint
app.post('/api/explain-tech', async (req, res) => {
  try {
    const { query, comparison } = req.body;
    
    let prompt = '';
    if (comparison) {
      prompt = `Compare ${query} vs ${comparison} in simple terms. Focus on their key differences, use cases, and pros/cons.`;
    } else {
      prompt = `Explain ${query} in simple terms that a non-technical person would understand. Include key features, use cases, and benefits.`;
    }

    // Call Ollama API
    const response = await fetch(OLLAMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt: `You are a helpful tech expert who explains technology concepts in simple, clear terms. Use analogies and examples when helpful.\n\nUser: ${prompt}\n\nAssistant:`,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json({ 
      explanation: data.response 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate explanation' 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
