# Tech Explorer Application

A modern web application that showcases different technologies and includes an AI-powered Tech Explainer chatbot. The application features both technology exploration and an intelligent chat system that can explain technical concepts in simple terms.

## Features

- Interactive technology showcase with detailed information
- AI-powered Tech Explainer chatbot with two modes:
  - Tech Explorer: Explains and compares technologies
  - Universal Chat: General conversation mode
- Text-to-speech capability for bot responses
- Modern, responsive UI with dark theme
- Real-time AI responses using Ollama

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)
- [Ollama](https://ollama.com/) - Local AI model runner

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Tech-React-App
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

4. **Install Ollama:**

   For macOS:
   ```bash
   brew install ollama
   ```
   
   For other operating systems, visit: https://ollama.com/download

5. **Pull the required AI model:**
   ```bash
   ollama pull llama3
   ```

## Configuration

1. **Start the Ollama service:**
   ```bash
   ollama serve
   ```

2. **Configure the backend:**
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3001
   OLLAMA_API_URL=http://localhost:11434/api/generate
   OLLAMA_MODEL=llama3
   ```

## Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   The backend server will start on http://localhost:3001

2. **Start the frontend development server:**
   In a new terminal:
   ```bash
   # From the root directory
   npm run dev
   ```
   The frontend will be available at http://localhost:5173

3. **Access the application:**
   - Open your browser and navigate to http://localhost:5173
   - Sign in to access the main application
   - Click the chat icon in the top-right corner to open the Tech Explainer

## Using the Tech Explainer

1. **Tech Explorer Mode:**
   - Ask about any technology: "Explain React"
   - Compare technologies: Enter "React" in the first field and "Vue" in the comparison field
   - Click the speaker icon to hear the explanation

2. **Universal Chat Mode:**
   - Switch to the Universal Chat tab
   - Ask any general questions
   - Use the speaker icon for text-to-speech

## Troubleshooting

1. **If Ollama is not responding:**
   - Ensure the Ollama service is running (`ollama serve`)
   - Verify the model is installed (`ollama list`)
   - Check if the API URL in `.env` is correct

2. **If the backend fails to start:**
   - Check if port 3001 is available
   - Verify all dependencies are installed
   - Ensure the `.env` file is properly configured

3. **If text-to-speech is not working:**
   - Check if your browser supports the Web Speech API
   - Ensure your system's audio is working
   - Try using a different browser if issues persist

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
