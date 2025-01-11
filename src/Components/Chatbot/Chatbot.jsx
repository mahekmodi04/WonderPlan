import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');

  const suggestions = [
    "Plan a budget-friendly trip to a city",
    "Suggest top destinations based on my budget",
    "Create a personalized itinerary for a week-long trip",
    "Find the best transport options for a family vacation",
    "Recommend affordable hotels in popular tourist spots",
    "Suggest travel activities within a given budget",
    "Plan a weekend getaway with local attractions",
    "Help me find the best travel deals for my dates"
  ];

  return (
    <div className="chat-container">
      <h1 className="chat-heading">Welcome to WonderPlan, your personal travel agent</h1>
      
      <div className="chat-box">
        <div className="action-buttons">
          <button className="primary-button">Plan Trip</button>
        </div>
        <div className="inner-chat-box">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Ask me anything..."
            className="ask-input"
          />
          <button className="ask-button">Ask Anything</button>
        </div>
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <button key={index} className="suggestion-chip">
              {suggestion}
            </button>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Chatbot;
