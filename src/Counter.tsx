import { useEffect, useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStartPause = () => {
    if (isRunning) {
      // Pause the counter
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsRunning(false);
    } else {
      // Start the counter
      intervalRef.current = setInterval(() => {
        setCount((prevCounter) => prevCounter + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCount(0); // Reset counter to 0
    setIsRunning(false); // Stop the counter
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{count}</h1>
      <button onClick={handleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

// The component will display a number initialized to `0` known as `counter`.
// The component will display a `Start` button below the `counter` number.
// On clicking the `Start` button the counter will start running. This means the `counter` number will start incrementing by 1 for every one second.
// When the counter is running(incrementing), the `Start` button will become the `Pause` button.
// On clicking the `Pause` button, the `counter` will preserve its value (number) but stops running(incrementing).
// The component will also display a `Reset` button.
// On clicking the `Reset` button, the `counter` will go to its initial value(which is `0` in our case) and stop running(incrementing).
