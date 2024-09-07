import React, { useState, useRef } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

import participantone from '../assets/Ai.png';

const Dashboard = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [Camera, setCamera] = useState(false);
  const [mikeon, setMikeon] = useState(false);
  const webcamRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  if (!recognitionRef.current && 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;
  }

  const handleInputChange = (e) => {
    setUserPrompt(e.target.value);
  };

  const handlechangeCamera = () => {
    setCamera(!Camera);
  };

  const toggleMike = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setMikeon(true);

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setUserPrompt(transcript); // Set recognized speech as input

        // Add user's message to chat immediately after recognizing speech
        setMessages((prevMessages) => [...prevMessages, { sender: 'You', text: transcript }]);

        // Automatically send after speech is captured
        setTimeout(() => {
          generateAiResponse(transcript);
          setMikeon(false); // Stop listening after sending
        }, 500); // Delay to ensure prompt is set before sending
      };

      recognitionRef.current.onend = () => {
        setMikeon(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setMikeon(false);
      };
    } else {
      console.error('Speech Recognition API is not supported in this browser.');
    }
  };

  const generateAiResponse = async (userPrompt) => {
    try {
      const response = await axios.post('/api/generate-response', { userPrompt });
      const newMessage = { sender: 'AI', text: response.data.aiResponse };

      // Add AI's response to chat
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      speak(response.data.aiResponse); // Text-to-speech
      setUserPrompt(''); // Clear input after sending
    } catch (error) {
      console.error('Error generating AI response:', error);
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[1]; // Select a voice
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance); // Speak the text
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Video Section */}
      <div className="flex-1 bg-gray-800 flex justify-center items-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
          <div className="bg-black rounded-lg flex justify-center items-center">
            <img src={participantone} alt="Participant" className="max-h-60 sm:max-h-72 w-auto" />
          </div>
          <div className="bg-black flex justify-center items-center">
            {Camera ? (
              <div className="mt-4">
                <Webcam audio={mikeon} ref={webcamRef} className="max-h-60 sm:max-h-72" />
              </div>
            ) : (
              <img
                src="https://res.cloudinary.com/dwi01krrt/image/upload/v1724471505/account-avatar-profile-user_shnaav.svg"
                className="h-[24rem] w-[24rem]"
                alt="Avatar"
              />
            )}
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="w-full lg:w-1/3 bg-gray-100 flex flex-col justify-between border-l border-gray-300">
        <div className="p-4">
          {/* Toggle Camera and Mic */}
          <div className="flex justify-between mb-4">
            <button
              onClick={handlechangeCamera}
              className={`px-4 py-2 rounded-lg text-white ${Camera ? 'bg-red-500' : 'bg-blue-500'}`}
            >
              {Camera ? 'Turn Off Camera' : 'Turn On Camera'}
            </button>
            <button
              onClick={toggleMike}
              className={`px-4 py-2 rounded-lg text-white ${mikeon ? 'bg-red-500' : 'bg-green-500'}`}
              disabled={mikeon} // Disable button while listening
            >
              {mikeon ? 'Listening...' : 'Speak'}
            </button>
          </div>
        </div>

        {/* Chat Section */}
        <div className="p-4 h-full overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}>
              <p className="font-bold">{message.sender}:</p>
              <p className="bg-gray-200 p-2 rounded-lg inline-block">{message.text}</p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-300">
          <textarea
            value={userPrompt}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg resize-none"
            placeholder="Type your message or speak..."
            rows={2}
          />
          <button
            onClick={() => generateAiResponse(userPrompt)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 w-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
