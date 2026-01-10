import '../ComingSoon.css'
import { useState, useEffect } from "react";

function Typing() {
  const messages = [
    "My website is under construction...",
    "Exciting content is coming soon...",
    "Stay tuned!"
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = messages[messageIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (charIndex <= current.length) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, messageIndex]);

  return <div style={{ minHeight: "1.5em" }}>{text}</div>;
}

export default Typing
