import React from "react";

export default function ProductNotFound() {
  const notFoundStyle = {
    // Consistent dark theme card background and border
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    margin: '50px auto',
    maxWidth: '600px',

    // Original structure styles, updated for dark theme
    textAlign: "center",
    padding: "50px 20px",
    color: "#f3f4f6", // Light text for dark theme
    fontFamily: "Inter, sans-serif", // Consistent application font
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#f8fafc", // Very light color for heading
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#9ca3af", // Subtle light gray for description
  };

  return (
    <div style={notFoundStyle}>
      <div
        className="icon"
        style={{fontSize: "4.5em"}}>
        <i class="fi fi-tr-dolly-flatbed-alt"></i>
      </div>
      <h2 style={headingStyle}>
        Product Not Found
      </h2>

      <p style={paragraphStyle}>
        Try searching another name…
      </p>
    </div>
  );
}