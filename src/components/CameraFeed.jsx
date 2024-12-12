import { useCallback, useRef, useState } from 'react';
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
  questions,
  setCurrentQuestion,
  setShowVideoUI,
  setTimeLeft,
  router,
  paperId
}) {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isRecordingComplete, setIsRecordingComplete] = useState(false);

  const handleStartRecording = useCallback(() => {
    setRecordedChunks([]);
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
      console.warn(`${options.mimeType} not supported, falling back to 'video/webm'`);
      options.mimeType = 'video/webm';
    }

    try {
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      mediaRecorder.onstop = () => {
        setIsRecordingComplete(true);
      };

      mediaRecorder.start();
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
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmhpc2hla2toYXJlNTgzQGdtYWlsLmNvbSIsImV4cCI6MTczNDA4MzI1MH0.l11dEHjH1T1_u3j-b0TRwz4CBgFiu3bYASQ6eETDCac`,
          },
        }
      );

      console.log(response.data);
      console.log('Upload successful');
      setCompletedSteps((prev) => [...prev, currentQuestion + 1]);
      setIsListening(false);
      setAnswerTimer(180);
      setText("");

      if (currentQuestion < questions.length - 1) {
        // Move to next question
        setCurrentQuestion(currentQuestion + 1);
        setShowVideoUI(false);
        setTimeLeft(30);
        setIsRecordingComplete(false);
        setRecordedChunks([]);
      } else {
        // Last question answered
        router.push(`/score?paper_id=${paperId}`);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  }, [
    recordedChunks,
    text,
    currentQuestion,
    questions,
    setCompletedSteps,
    setIsListening,
    setAnswerTimer,
    setText,
    setCurrentQuestion,
    setShowVideoUI,
    setTimeLeft,
    router,
  ]);

  return (
    <div>
      <div className="bg-gray-100 rounded-md relative">
        <Webcam
          audio={true}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: 'user' }}
          style={{ borderRadius: '8px', height: '24rem', width: '50rem' }}
        />
        {!isRecording ? (
          <Button className="absolute top-1 right-0" onClick={handleStartRecording}>
            Start Recording
          </Button>
        ) : (
          <Button className="absolute top-1 right-0" onClick={handleStopRecording}>
            Stop Recording
          </Button>
        )}
        {isRecordingComplete && (
          <Button className="absolute -right-[51%] bottom-4 w-[48%]" onClick={handleUpload}>
            Submit Answer
          </Button>
        )}
      </div>
    </div>
  );
}
