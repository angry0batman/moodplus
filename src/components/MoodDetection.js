import React from 'react';
import moodDetectionImage from '../assets/mood_detection.png';


function MoodDetection() {
  const handleMoodDetection = (type) => {
    const url = `http://your-flask-app-url/mood-detection/${type}`;
    window.location.href = url;
  };

  return (
    <div id="mood-detection" className="MoodDetection">
      <img src={moodDetectionImage} alt="Mood Detection" />
      <h2>Mood Detection</h2>
      <button onClick={() => handleMoodDetection('image')}>Check by Uploading Image</button>
      <button onClick={() => handleMoodDetection('audio')}>Check by Sending 30 sec Audio</button>
      <button onClick={() => handleMoodDetection('video')}>Check by Sending Video</button>
    </div>
  );
}

export default MoodDetection;
