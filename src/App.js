import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MoodDetection from './components/MoodDetection';
import AIContent from './components/AIContent';
import FunnyChatbot from './components/FunnyChatbot';
import SecretChat from './components/SecretChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <MoodDetection />
        <AIContent />
        <FunnyChatbot />
        <SecretChat />
      </div>
      <Footer />
    </div>
  );
}

export default App;
