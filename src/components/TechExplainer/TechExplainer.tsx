import React, { useState, useRef, useEffect } from 'react';
import './TechExplainer.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface TechExplainerProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'tech' | 'general';

const TechExplainer: React.FC<TechExplainerProps> = ({ isOpen, onClose }) => {
  const [techMessages, setTechMessages] = useState<Message[]>([]);
  const [generalMessages, setGeneralMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [comparison, setComparison] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('tech');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Get current tab's messages
  const currentMessages = activeTab === 'tech' ? techMessages : generalMessages;
  const setCurrentMessages = activeTab === 'tech' ? setTechMessages : setGeneralMessages;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [techMessages, generalMessages]);

  // Handle speech synthesis events
  useEffect(() => {
    const handleSpeechEnd = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.addEventListener('end', handleSpeechEnd);

    return () => {
      window.speechSynthesis.removeEventListener('end', handleSpeechEnd);
      window.speechSynthesis.cancel(); // Cancel any ongoing speech when component unmounts
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    let userMessage = input;
    if (activeTab === 'tech' && comparison.trim()) {
      userMessage = `${input} vs ${comparison}`;
    }

    setCurrentMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setComparison('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/explain-tech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: input.trim(),
          comparison: comparison.trim() || undefined,
        }),
      });

      const data = await response.json();
      setCurrentMessages(prev => [...prev, { role: 'assistant', content: data.explanation }]);
    } catch (error) {
      console.error('Error:', error);
      setCurrentMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const speakLastResponse = () => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Find the last assistant message from current tab
    const lastAssistantMessage = [...currentMessages].reverse().find(m => m.role === 'assistant');
    
    if (lastAssistantMessage) {
      setIsSpeaking(true);
      const speech = new SpeechSynthesisUtterance(lastAssistantMessage.content);
      
      speech.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(speech);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  if (!isOpen) return null;

  return (
    <div className="tech-explainer-sidebar">
      <div className="tech-explainer-header">
        <h2 className="text-xl font-bold text-blue-300">Tech Explainer</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-blue-300"
        >
          ×
        </button>
      </div>

      <div className="tab-container">
        <button
          className={`tab ${activeTab === 'tech' ? 'active' : ''}`}
          onClick={() => setActiveTab('tech')}
        >
          Tech Explorer
        </button>
        <button
          className={`tab ${activeTab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveTab('general')}
        >
          Universal Chat
        </button>
      </div>
      
      <div className="chat-container">
        {currentMessages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        {activeTab === 'tech' ? (
          <>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about any technology..."
              className="text-input"
            />
            <input
              type="text"
              value={comparison}
              onChange={(e) => setComparison(e.target.value)}
              placeholder="Compare with (optional)"
              className="comparison-input"
            />
          </>
        ) : (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="text-input"
          />
        )}
        <div className="button-container">
          <button 
            type="button" 
            onClick={isSpeaking ? stopSpeaking : speakLastResponse}
            className={`voice-button ${isSpeaking ? 'speaking' : ''}`}
            title={isSpeaking ? "Stop speaking" : "Read last response"}
          >
            {isSpeaking ? '🔊' : '🔈'}
          </button>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Thinking...' : 'Ask'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TechExplainer; 