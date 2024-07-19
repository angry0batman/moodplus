import React from 'react';
import funnyChatbotImage from '../assets/funny_chatbot.png';


function FunnyChatbot() {
  const handleChatbot = () => {
    const url = 'http://your-flask-app-url/chatbot/talk';
    window.location.href = url;
  };

  return (
    <div id="funny-chatbot" className="FunnyChatbot">
      <img src={funnyChatbotImage} alt="Funny Chatbot" />
      <h2>Talk to Funny Chatbot</h2>
      <button onClick={handleChatbot}>Start Chat</button>
    </div>
  );
}

export default FunnyChatbot;
