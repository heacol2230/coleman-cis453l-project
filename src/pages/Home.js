import FrameTrackerIcon from "../assets/FrameTracker.svg";
import Navbar from "../layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <img src={FrameTrackerIcon} alt="" />
        <div className="text-[#E6042F] font-bold italic text-[24px] text-center my-4">
          <p>Unlock your</p>
          <p>music's potential</p>
          <p>with</p>
          <p>Frame Tracker</p>
        </div>
        <div className="text-[#E6042F] font-bold italic text-[24px] text-center mt-4">
          <p>Elevate your</p>
          <p>Presence!</p>
          <p>Expand your</p>
          <p>Reach!</p>
        </div>
      </div>
    </div>
  );
}
