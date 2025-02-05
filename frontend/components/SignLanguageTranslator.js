import React, { useState } from "react";

const SignLanguageTranslator = ({ mode }) => {
  const [cameraActive, setCameraActive] = useState(false);

  const toggleCamera = () => {
    setCameraActive((prev) => !prev);
  };

  return (
    <div>
      <p>Sign Language Input Mode</p>
      {cameraActive ? (
        <div>
          <p>Camera is now active for sign input!</p>
          {/* Ideally, here you'd implement a camera interface using a library like React Webcam */}
        </div>
      ) : (
        <button className="camera-button" onClick={toggleCamera}>
          Use Camera for Sign Input
        </button>
      )}
    </div>
  );
};

export default SignLanguageTranslator;
