import { useEffect, useRef } from 'react';

export default function CameraFeed() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Request access to the user's camera
    navigator.mediaDevices
      .getUserMedia({ video: true }) // Set to true for default camera
      .then((stream) => {
        // Set the video stream to the video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });

    return () => {
      
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className=" w-full bg-gray-100 h-96 rounded-md flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="h-full object-cover rounded-md w-[40rem] "
      />
    </div>
  );
}
