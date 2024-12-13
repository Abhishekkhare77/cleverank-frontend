import { useCallback, useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { Button } from './ui/button';

export default function CameraFeed({
  text,
  setCompletedSteps,
  setIsListening,
  setAnswerTimer,
  setText,
  currentQuestion,
  goToNextQuestion,
  answerTimer
}) {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isRecordingComplete, setIsRecordingComplete] = useState(false);
  const [hasFirstChunk, setHasFirstChunk] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleStartRecording = useCallback(() => {
    if (!webcamRef.current || !webcamRef.current.video) {
      console.error('Webcam not available.');
      return;
    }

    const stream = webcamRef.current.video.srcObject;
    if (!stream) {
      console.error('No stream found on webcamRef.');
      return;
    }

    const options = { mimeType: 'video/webm;codecs=vp8' };

    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.warn(`${options.mimeType} not supported, using 'video/webm' instead.`);
      options.mimeType = 'video/webm';
    }

    try {
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
          // Once we have the first chunk, we can enable submission
          setHasFirstChunk(true);
        }
      };

      mediaRecorder.onstop = () => {
        setIsRecordingComplete(true);
      };

      // Start recording with a timeslice of 1 second, ensuring periodic data
      mediaRecorder.start(1000);
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting MediaRecorder:', error);
    }
  }, []);

  const handleStopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }, []);

  const handleUpload = useCallback(async () => {
    if (recordedChunks.length === 0) {
      console.error('No video recorded.');
      return;
    }
    setIsUploading(true);

    const videoBlob = new Blob(recordedChunks, { type: 'video/webm' });
    const formData = new FormData();
    formData.append('assessment_video', videoBlob, 'video.webm');
    formData.append('answer_text', text);

    try {
      const response = await axios.post(
        'https://cleverank.adnan-qasim.me/answers/answer-assessment',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log(response.data);
      console.log('Upload successful');
      setCompletedSteps((prev) => [...prev, currentQuestion + 1]);
      setIsListening(false);
      setAnswerTimer(180);
      setText("");

      // Move to next question or score page
      goToNextQuestion();
      // Reset recording states
      setIsRecordingComplete(false);
      setRecordedChunks([]);
    } catch (error) {
      console.error('Error uploading video:', error);
    } finally {
      setIsUploading(false);
    }
  }, [
    recordedChunks,
    text,
    currentQuestion,
    goToNextQuestion,
    setCompletedSteps,
    setIsListening,
    setAnswerTimer,
    setText,
  ]);

  // If answerTimer hits 0, auto-submit if not already done
  useEffect(() => {
    if (answerTimer === 0 && isRecording) {
      handleStopRecording();
      setTimeout(() => {
        handleUpload();
      }, 300);
    }
  }, [answerTimer, isRecording, handleStopRecording, handleUpload]);

  return (
    <div>
      <div className="bg-gray-100 rounded-md relative">
        <Webcam
          audio={true}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: 'user' }}
          style={{ borderRadius: '8px', height: '24rem', width: '50rem' }}
          onUserMedia={() => {
            // Start recording once webcam is ready
            handleStartRecording();
          }}
          onUserMediaError={(err) => {
            console.error('Webcam access error:', err);
          }}
        />
        {(!isRecordingComplete && isRecording) && (
          <div className="absolute top-1 left-1 text-sm bg-white p-1 rounded shadow">
            Recording in progress...
          </div>
        )}
        {(isRecordingComplete || isRecording) && (
          <Button
            className="absolute -right-[51%] bottom-4 w-[48%]"
            onClick={() => {
              // Stop recording and upload only if we have at least one chunk
              if (!hasFirstChunk) {
                console.error("Please wait, recording needs at least one second of data.");
                return;
              }
              handleStopRecording();
              handleUpload();
            }}
            disabled={!hasFirstChunk || isUploading}
          >
            {isUploading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Uploading...
              </div>
            ) : (
              "Submit Answer"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
