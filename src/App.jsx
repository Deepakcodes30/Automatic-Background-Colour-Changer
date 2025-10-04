import React, { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("purple");
  const [intervalId, setIntervalId] = useState(null);

  const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleStart = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      setColor(randomColor());
    }, 1000);
    setIntervalId(id);
  };

  function handleEnd() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h2>Change color by Start and Stop</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>Stop</button>
    </div>
  );
}

export default App;
