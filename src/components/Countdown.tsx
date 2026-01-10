import { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2030-01-01T00:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        setTimeLeft("Start!");
        return;
      }

      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);

      setTimeLeft(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
    }

    updateCountdown();
    const timer: ReturnType<typeof setInterval> = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);
  
  return <div>{timeLeft}</div>;
}

export default Countdown
