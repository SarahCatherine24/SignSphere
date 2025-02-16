const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access the user's camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing camera: ", error);
      });

    // Cleanup the stream when component unmounts
    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        width="100%"
        height="auto"
        style={{ borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
      ></video>
    </div>
  );
};

export default Camera;
