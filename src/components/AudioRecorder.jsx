import React, { useState, useEffect, useRef } from "react";
import { useLeopard } from "@picovoice/leopard-react";

export default function AudioRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);
    const [transcription, setTranscription] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    const mediaRecorder = useRef(null);
    const mimeType = "audio/webm";
    const [sentimentResult, setSentimentResult] = useState(null);
    const {
      result,
      isLoaded,
      error,
      init,
      processFile,
      startRecording,
      stopRecording,
      isRecording: leopardIsRecording,
      recordingElapsedSec,
      release,
  } = useLeopard();
  const leopardModel = {
      base64: process.env.NEXT_PUBLIC_LEOPARD_MODEL_BASE64
  };

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
        }
      })
    .catch((error) => {
      console.error("Error fetching sentiment analysis:", error);
    });
}
}, [result]); 
    
  

    const startRecordingHandler = async () => { //start recording
      setIsRecording(true);
      setAudioChunks([]);
      startRecording();

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream, {type: mimeType});
      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };
      mediaRecorder.current.start();
    };

    const stopRecordingHandler = async () => { //stop recording
      setIsRecording(false);
      mediaRecorder.current.stop();
      stopRecording();

     
        const audioBlob = new Blob(audioChunks, {type: mimeType});
        const audioUrl = URL.createObjectURL (audioBlob);
        setAudioUrl(audioUrl);
        await processFile(audioBlob);
      
    };
  
  return (
    <div className='audio-controls'>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
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
        <div className="p-5 font-semibold text-white">
          {transcription && <p>{transcription}</p>}
        </div>
        <div>
          {sentimentResult && (
            <div>
              <p>Sentiment Score: {sentimentResult.score}</p>
              <p>Sentiment Magnitude: {sentimentResult.magnitude}</p>
            </div>
          )}
        </div>
     
</div>
  )
}
