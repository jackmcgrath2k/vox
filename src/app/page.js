"use client"; 

import React, {useState} from "react";
import AudioRecorder from "../components/AudioRecorder";



export default function Home() {


  return (
    <div>
            <header className="flex">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-white font-black tracking-tighter text-xl">VOX</h1>

        <nav className="hidden md:flex space-x-6">
         <a href="" className="text-white hover:text-gray-600">Home</a>
         <a href="" className="text-white hover:text-gray-600">Account</a>
         <a href="" className="text-white hover:text-gray-600">Journal</a>
        </nav>

      </div>
      </header>
  
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AudioRecorder />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>
          <h1>
            jack mcg app
          </h1>
        </div>
      </footer>
    </div>
    </div>
  );
};
