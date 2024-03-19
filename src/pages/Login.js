import Navbar from "../layout/Navbar";

export default function Login() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center py-8">
        <div className="text-[#FFF200] font-bold text-[48px] font-[Verdana] text-center">
          <p>Please</p>
          <p>Sign In</p>
        </div>
        <div className="text-[#E76405] mt-12">
          <div className="underline relative">
            <p className="absolute font-semibold">Username</p>
            <input className="bg-black border-b-[#E76405] border-b-[1.5px]" />
          </div>

          <div className="underline relative mt-32">
            <p className="absolute font-semibold">Password</p>
            <input className="bg-black border-b-[#E76405] border-b-[1.5px]" />
          </div>
        </div>

        <div className="mt-32">
          <button
            type="submit"
            className="bg-[#FFF200] text-[#E74D0F] py-1.5 px-6 rounded-md font-semibold text-[12px] w-40"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
