const TrackOption = ({ text }) => {
  return (
    <div className="flex items-center justify-center my-2">
      <div className="mr-4 flex gap-2">
        <input
          className="
                    peer relative appearance-none shrink-0 w-4 h-4 border-2 border-[#ff4000] rounded-sm mt-1 bg-black
                    focus:outline-none focus:ring-offset-0 focus:ring-1
                    checked:border-[#ff4000] 
                    disabled:border-steel-400 disabled:bg-steel-400"
          type="checkbox"
        />
        <svg
          className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-[#ff4000] mt-1 outline-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div className="max-w-[220px] rounded-xl py-1.5 px-2.5 bg-[#484848]">
        <p className="text-[#FFF200]">{ text }</p>
      </div>
    </div>
  );
};

export default TrackOption;
