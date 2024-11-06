import React, {useRef, useState} from 'react'




export default function AudioRecorder() {
    const [permission, setPermission] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState(null);
    const [stream, setStream] = useState(null);
    const mediaRecorder = useRef(null);
    const mimeType = "audio/mp3";
    
    
    const getPermission = async () => { //get mic permissions
        if ("MediaRecorder" in window){
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                setPermission(true);
                setStream(mediaStream);
            }
            catch (err) {
                alert(err.message);
                alert("MediaRecorder is not supported in this browser.")
            }
           
        }
    };

    const startRecording = async () => {
      setIsRecording(true);
      const media = new MediaRecorder(stream, {type: mimeType});
      mediaRecorder.current = media;
      mediaRecorder.current.start();
      let localAudioChunks = [];
      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        localAudioChunks.push(event.data);

      };
      setAudioChunks(localAudioChunks);
    };

    const stopRecording = () => {
      setIsRecording(false);
      mediaRecorder.current.stop();
      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, {type: mimeType});
        const audioUrl = URL.createObjectURL (audioBlob);
        setAudio(audioUrl);
        setAudioChunks([]);
      };
    };
  
  return (
    <div className='audio-controls'>
      {!permission ? (
                <button onClick={getPermission}
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
                  Allow Microphone
                </button>
      ) : null}
      <div className="flex gap-4 items-center flex-col sm:flex-row">
      {permission && isRecording === false ? (
                  <button onClick={startRecording}
                  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" >
                  Start Recording
                </button>
      ) : null}
      {isRecording === true ? (
          <button onClick={stopRecording}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            Stop Recording
          </button>
      ) : null}
        </div>
        <div>
        {audio && (
          <div>
            <audio src={audio} controls></audio>
            <a download href={audio}>Download recording</a>
          </div>
        )}
       </div>
</div>
  )
}
