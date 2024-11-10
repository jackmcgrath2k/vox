import React, { useState, useEffect } from "react";
import { useLeopard } from "@picovoice/leopard-react";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import Link from 'next/link';


export default function AudioRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState(null);
    const [sentimentResult, setSentimentResult] = useState(null);
    const [sentimentValue, setSentimentValue] = useState(null);
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
        })
        .catch((error) => {
      console.error("Error fetching sentiment analysis:", error);
    });
}
}, [result]); 
    
  

    const startRecordingHandler = async () => { //start recording
      setIsRecording(true);
      startRecording();
    };

    const stopRecordingHandler = async () => { //stop recording
      setIsRecording(false);
      stopRecording();

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
      <div className="">
      {isRecording === false ? (
                  <button onClick={startRecordingHandler}
                  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" >
                  Start Recording
                </button>
      ) : null}
      {isRecording === true ? (
          <button onClick={stopRecordingHandler}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            Stop Recording
          </button>
      ) : null}
      
        </div>
        <p className="text-gray-300 font-light text-xs text-center opacity-60">*A limit of 2 minutes for recording is enforced for memory saving purposes.</p>
        <div className="p-5 font-semibold text-white">
          {transcription && <p>{transcription}</p>}
        </div>
        <Button
          variant="outline"
          onClick={showToast}>
          Save Entry
        </Button>
        <div>
          {sentimentResult && (
            <div>
              <p>Sentiment Score: {sentimentResult.score}</p>
              <p>Sentiment Magnitude: {sentimentResult.magnitude}</p>
              <p>Sentiment Value: {sentimentValue}</p> 
            </div>
          )}
        </div>
     
</div>
  )
}


//        <p className="text-gray-300 font-light text-xs text-center">*A limit of 2 minutes for recording is enforced for memory saving purposes.</p>