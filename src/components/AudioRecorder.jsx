import React, { useState, useEffect } from "react";
import { useLeopard } from "@picovoice/leopard-react";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import Link from 'next/link';
import LoadingAnimation from "./LoadingAnimation";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function AudioRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState(null);
    const [sentimentResult, setSentimentResult] = useState(null);
    const [sentimentValue, setSentimentValue] = useState(null);
    const [moderationResult, setModerationResult] = useState([]);
    const {
      result,
      isLoaded,
      error,
      init,
      processFile,
      startRecording,
      stopRecording,
      isRecording: leopardIsRecording,
      recordingElapsedSec, //set this to 1m 58s, max for leopard is 2m i beleive, also only have 5hrs allowance, on top of CNLP limits
      release,
  } = useLeopard();
  const leopardModel = {
      base64: process.env.NEXT_PUBLIC_LEOPARD_MODEL_BASE64
  };
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  function getSentimentValue(score) {
    if (score >= 0.8 && score <= 1) {
        return "very positive";
    } else if (score >= 0.5 && score < 0.8) {
        return "positive";
    } else if (score >= 0 && score < 0.5) {
        return "neutral";
    } else if (score >= -0.5 && score < 0) {
        return "negative";
    } else if (score < -0.5 && score >= -1) {
        return "very negative";
    } else {
        return "score out of expected range"
    }
}

  //initialisation
  useEffect(() => {
    init(
      process.env.NEXT_PUBLIC_ACCESS_KEY, leopardModel
    );
  }, []);

  useEffect(() => {
    if (result !== null) {
      console.log('Transcription Result:', result); 
      setTranscription(result.transcript); //need to take and save this - maybe to a db like supabase? pass val to vertexAI for analysis
      
      fetch("api/sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({transcriptionText: result.transcript}),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.sentimentScore !== undefined) {
          setSentimentResult({
            score: data.sentimentScore,
            magnitude: data.sentimentMagnitude,
          });
            // Convert sentiment score to value
            const value = getSentimentValue(data.sentimentScore);
            setSentimentValue(value); // Save the sentiment value
          }
          if (data.moderationCategories && data.moderationCategories.length > 0) {
            const selectedCategories = ['Death, Harm & Tragedy', 'Public Safety', 'Violent', 'Firearms & Weapons', 'Derogatory',];
            
            // Filter for categories that match the selected names AND have confidence > 0.5
            const filteredModeration = data.moderationCategories.filter(category => 
              selectedCategories.includes(category.name) && category.confidence > 0.5
            );
    
            console.log("Filtered Moderation Categories:", filteredModeration);
            setModerationResult(filteredModeration);  // Set filtered moderation categories
          } else {
            console.log("No moderation categories found.");
          }
        })
          .catch((error) => {
              console.error("Error fetching sentiment or moderation analysis:", error);
              })
        .finally(() => {
          setIsLoading(false);
          console.log("Loading finished");
        });
    }
  }, [result]);
    
  useEffect(() => {
    if (isRecording && recordingElapsedSec >= 120) { // stop before 2 minutes (120 seconds)
      stopRecordingHandler();
    }
  }, [recordingElapsedSec, isRecording]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

    const startRecordingHandler = async () => { //start recording
      setIsRecording(true);
      startRecording();

    };

    const stopRecordingHandler = async () => { //stop recording
      setIsRecording(false);
      stopRecording();
      setIsLoading(true);


    };

    const handleRefresh = () => {
      window.location.reload();
    };

    function showToast() {
      toast({
        title: "Great! Your entry has been logged!",
          description: "maybe a streak number or u can view all entries here",
          action: <Link href="/Journal"><ToastAction altText="View">View</ToastAction></Link>,
      });
    }
  
  return (
    <div className='flex gap-4 items-center flex-col sm:flex-col'>
    {isLoading ? (
      <div>
      <LoadingAnimation />
      </div>
    ) : (
        <>
        
      <div className="">
      {(!transcription && !sentimentResult) && (
        <>
          {/* Show the Start Recording button when not recording */}
          {isRecording === false ? (
            <button
              onClick={startRecordingHandler}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Start Recording
            </button>
          ) : null}

          {/* Show the Stop Recording button when recording */}
          {isRecording === true ? (
            <div>
            <div>
            <button
              onClick={stopRecordingHandler}
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
              Stop Recording
            </button>
            </div>
            <div className="text-center text-gray-300 opacity-70 mt-6">
            <span>{formatTime(recordingElapsedSec)}</span>
            </div>
            </div>
          ) : null}
        </>
      )}
      <div className="text-center">
              {sentimentValue === "very positive" && (
            <h1 className="text-white font-bold text-7xl">Sounds like you had a great day today! Glad to hear!</h1>
          )}
          {sentimentValue === "positive" && (
            <p className="text-white font-bold text-7xl">You're feeling good today! Keep it up!</p>
          )}
          {sentimentValue === "neutral" && (
            <p className="text-white font-bold text-7xl">It seems like you're having a balanced day.</p>
          )}
          {sentimentValue === "negative" && (
            <p className="text-white font-bold text-7xl">It sounds like today hasn't been the best. Hopefully, things get better!</p>
          )}
          {sentimentValue === "very negative" && (
            <p className="text-white font-bold text-7xl">Oh no! It sounds like it's been a rough day. Hang in there!</p>
          )}
      </div>
        </div>
        {(!transcription && !sentimentResult) && (
        <p className="text-gray-300 font-light text-xs text-center opacity-60">*A limit of 2 minutes for recording is enforced for memory saving purposes.</p>
        )}
        <div className="p-5 font-semibold text-white">
          {transcription && <p>{transcription}</p>}
        </div>
        {(transcription && sentimentResult) && (
          <div className="text-center">
          <div>
        <Button
          variant="outline"
          onClick={showToast}>
          Save Entry
        </Button>
        </div>
        <div className="mt-6">
        <Button onClick={handleRefresh} className="bg-transparent hover:bg-transparent">
        <DotLottieReact
            src="https://lottie.host/24d7548e-60ec-4c84-a20f-e4f892a121a5/okfw45z7dh.lottie"
            loop
            autoplay
          />
        </Button>
        </div>
        </div>
        )}
        <div className="text-center">
          {sentimentResult && (
            <div>
              <p>Sentiment Score: {sentimentResult.score.toFixed(2)}</p>
              <p>Sentiment Magnitude: {sentimentResult.magnitude.toFixed(2)}</p>
              <p>Sentiment Value: {sentimentValue}</p> 
            </div>
          )}
            {moderationResult && moderationResult.length > 0 ? (
              <div className="flex-col">
              {/* Display the general warning message once */}
              <p className="text-red-500 font-bold opacity-70 text-xs">
                We've flagged harmful content.  
                <span className="font-semibold block">
                  If you're feeling distressed or struggling, please seek professional help. 
                </span>
              </p>

              {/* List the harmful content categories */}
              <h3 className="mt-2">Harmful Content Detected:</h3>
              <ul>
                {moderationResult.map((category, index) => (
                  <li key={index}>
                    <strong>{category.name}</strong> - Confidence: {category.confidence.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            ) : null}
        </div>
        </>
     )}
</div>
  )
}


//        <p className="text-gray-300 font-light text-xs text-center">*A limit of 2 minutes for recording is enforced for memory saving purposes.</p>