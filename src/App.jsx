import React from "react";
import img from "../public/icons8-search-150.png";

function App() {
  return (
    <div className="bg-[#202124] text-white min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl mb-12 text-center">WiseBox.com</h1>

      <div className="relative w-full max-w-3xl h-[70px] sm:h-[80px] lg:h-[94px]">
        <input 
          type="text" 
          placeholder="Search for advice on anything..."
          className="w-full h-full rounded-full bg-[#4D5156] text-white px-6
                     placeholder:text-lg sm:placeholder:text-xl lg:placeholder:text-2xl
                     placeholder:text-white"
        />
        <img 
          src={img} 
          alt="search icon" 
          className="w-5 h-5 sm:w-6 sm:h-6 absolute top-1/2 right-6 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default App;