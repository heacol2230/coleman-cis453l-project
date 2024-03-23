import React, { useState } from "react";
import Navbar from "../layout/Navbar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here perform actions with the username and password, such as sending them to a backend server for authentication
    console.log("Submitting form with username:", username, "and password:", password);
    // Reset the form fields after submission
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center py-8">
        <div className="text-[#FFF200] font-bold text-[48px] font-[Verdana] text-center">
          <p>Please</p>
          <p>Sign In</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="text-[#E76405] mt-12">
            <div className="underline relative">
              <input 
                id="username" 
                name="username"
                className="bg-black border-b-[#E76405] border-b-[1.5px]" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="underline relative mt-32">
              <input 
                id="password" 
                name="password"
                className="bg-black border-b-[#E76405] border-b-[1.5px]" 
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
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
        </form>
      </div>
    </div>
  );
}
