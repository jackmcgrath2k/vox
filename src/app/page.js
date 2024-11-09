"use client"; 

import React from "react";
import Header from "../components/Header";
import AudioRecorder from "../components/AudioRecorder";
import { Toaster } from "@/components/ui/toaster";
import Account from "@/components/Account";
import Dashboard from "@/components/Dashboard";
import DoughnutChart from "@/components/datacharts/DoughnutChart";



export default function Home() {


  return (
    <div>
      <Header />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AudioRecorder />
        <Toaster />
        <Dashboard />
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
