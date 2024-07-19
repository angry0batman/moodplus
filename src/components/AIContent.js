import React from 'react';
import aiContentImage from '../assets/ai_content.png';


function AIContent() {
  const handleAIContent = (type) => {
    const url = `http://your-flask-app-url/ai-content/${type}`;
    window.location.href = url;
  };

  return (
    <div id="ai-content" className="AIContent">
      <img src={aiContentImage} alt="AI Content" />
      <h2>AI Content</h2>
      <button onClick={() => handleAIContent('meme')}>Generate AI-based Meme</button>
      <button onClick={() => handleAIContent('funny-story')}>Generate AI-based Funny Stories</button>
      <button onClick={() => handleAIContent('joke')}>Generate AI-based Jokes</button>
      <button onClick={() => handleAIContent('funny-joke')}>Generate AI-based Funny Jokes</button>
      <button onClick={() => handleAIContent('funny-videos')}>Suggest Funny Videos</button>
    </div>
  );
}

export default AIContent;
