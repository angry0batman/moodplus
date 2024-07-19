import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="Navigation">
      <h1>MoodPlus</h1>
      <ul>
        <li><a href="#mood-detection">Mood Detection</a></li>
        <li><a href="#ai-content">AI Content</a></li>
        <li><a href="#funny-chatbot">Funny Chatbot</a></li>
        <li><a href="#secret-chat">Secret Chat</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
