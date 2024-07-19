import React from 'react';
import secretChatImage from '../assets/secret_chat.png';


function SecretChat() {
  const handleSecretChat = () => {
    const url = 'http://your-flask-app-url/secret-chat';
    window.location.href = url;
  };

  return (
    <div id="secret-chat" className="SecretChat">
      <img src={secretChatImage} alt="Secret Chat" />
      <h2>Secret Chat</h2>
      <button onClick={handleSecretChat}>Initiate Secret Chat</button>
    </div>
  );
}

export default SecretChat;
