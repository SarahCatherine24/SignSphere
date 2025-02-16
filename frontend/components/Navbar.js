import React from "react";

const Navbar = ({ mode, toggleMode }) => {
  return (
    <header>
      {/* Left side: Text/Speech Input */}
      <div
        className={`navbar-option ${mode === "text" ? "active" : ""}`}
        onClick={() => toggleMode("text")}
      >
        Text/Speech Input
      </div>

      {/* Right side: Sign Input */}
      <div
        className={`navbar-option ${mode === "sign" ? "active" : ""}`}
        onClick={() => toggleMode("sign")}
      >
        Sign Input
      </div>
    </header>
  );
};

export default Navbar;