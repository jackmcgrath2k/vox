import React, {useState} from 'react'

export default function AudioRecorder() {
    const [permission, setPermission] = useState(false);
    const [isRecording, setIsRecording] = useState();
    const [mediaRecorder, setMediaRecorder] = useState();
    const [audioChunks, setAudioChunks] = useState();
    
    
    const getPermission = async () => { //get mic permissions
        if (mediaRecorder in window){
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                setPermission(true);
                SettingsSystemDaydreamRounded(streamData);
            }
            catch (err) {
                alert(err.message);
            }
            alert("MediaRecorder is not supported in this browser.")
        }
    };
    
  return (
    <div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" >
            Start Recording
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            Stop Recording
          </button>
        </div>
    </div>
  )
}
