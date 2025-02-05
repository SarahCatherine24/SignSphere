import { useState } from "react";
import Navbar from "@/components/Navbar";
import SignLanguageTranslator from "@/components/SignLanguageTranslator";

export default function Home() {
  const [mode, setMode] = useState("text"); // Default to text mode

  const toggleMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="main-container">
      {/* Navbar for switching modes */}
      <Navbar mode={mode} toggleMode={toggleMode} />

      <h1>{mode === "text" ? "Text/Speech to ISL Translator" : "ISL to Text/Speech Translator"}</h1>

      {/* Show sign language translator or text input depending on the mode */}
      {mode === "text" ? (
        <textarea placeholder="Enter text here..." />
      ) : (
        <SignLanguageTranslator mode={mode} />
      )}
    </div>
  );
}