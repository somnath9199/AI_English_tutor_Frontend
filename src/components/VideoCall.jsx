import React from "react";
import {MicOff , PhoneOff , Camera} from 'lucide-react'
const VideoCall = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      {/* Main Video Section */}
      <div className="relative w-full h-4/6 max-w-4xl bg-gray-900 ">
        {/* Main User Video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center rounded text-white">
          <p>Main User Video</p>
        </div>

        {/* Other User Video (Picture in Picture) */}
        <div className="absolute bottom-4 right-4 w-40 h-28 bg-black flex items-center justify-center text-white">
          <p>Other User</p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex justify-center space-x-4 mt-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
        <PhoneOff />
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
        <MicOff />
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
        <Camera />
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
