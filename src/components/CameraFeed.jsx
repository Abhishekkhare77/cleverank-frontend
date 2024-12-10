import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

export default function CameraFeed({ text }) {

  console.log(text);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isRecordingComplete, setIsRecordingComplete] = useState(false);

  const handleStartRecording = useCallback(() => {
    setRecordedChunks([]); // Clear any previous recordings
    if (!webcamRef.current) {
      console.error('Webcam not available.');
      return;
    }

    const stream = webcamRef.current.video.srcObject;
    const options = { mimeType: 'video/webm;codecs=vp8' };

    // Check if mimeType is supported
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.warn(`${options.mimeType} is not supported, using 'video/webm'`);
      options.mimeType = 'video/webm';
    }

    // Initialize MediaRecorder
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
  }, []);

  const handleStopRecording = useCallback(() => {
    if (mediaRecorderRef.current) {
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
    formData.append("user_id", "6749840a652be6c64056eadd");

    try {
      await axios.post('http://127.0.0.1:8000/answers/answer-assessment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        console.log(response.data);
      });
      console.log('Upload successful');
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  }, [recordedChunks]);

  return (
    <div >
      <div className='bg-gray-100 rounded-md'>
        <Webcam
          audio={true}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: 'user' }}
          style={{ borderRadius: '8px', height: '24rem', width: '50rem' }}
        />
      </div>
      <div>
        {!isRecording ? (
          <button onClick={handleStartRecording}>Start Recording</button>
        ) : (
          <button onClick={handleStopRecording}>Stop Recording</button>
        )}
        {isRecordingComplete && (
          <button onClick={handleUpload}>Upload Video</button>
        )}
      </div>
    </div>
  );
}
