import React from "react";
import FrameTrackerIcon from "../assets/FrameTracker.svg";
import Navbar from "../layout/Navbar";
import '../elevation.css'; // Import the elevation styles

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="image-container elevation elevation-yellow elevation-yellow-3"> {/* Apply elevation styles to the container */}
          <img src={FrameTrackerIcon} alt="" />
        </div>
        <div className="text-[#E6042F] font-bold italic text-[24px] text-center my-4">
          <p>Unlock your</p>
          <p>music's potential</p>
          <p>with</p>
          <p>Frame Tracker</p>
        </div>
        <div className="text-[#E6042F] font-bold italic text-[24px] text-center mt-4">
          <p style={{ textShadow: '2px 2px 2px rgba(255, 255, 255, 0.5)' }}>Elevate</p>
          <p>your Presence</p>
          <p>and</p>
          <p style={{ textShadow: '2px 2px 2px rgba(255, 255, 255, 0.5)' }}>Expand</p>
          <p>your Reach!</p>
        </div>
      </div>
    </div>
  );
}
