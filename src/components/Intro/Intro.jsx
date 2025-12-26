import { useEffect, useState } from "react";
import { introLines } from "./introData";

export default function Intro({ onFinish }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);

  const currentLine = introLines[lineIndex];

  useEffect(() => {
    if (!currentLine) return;

    // typing characters
    if (charIndex < currentLine.text.length) {
      const t = setTimeout(() => {
        setCharIndex(c => c + 1);
      }, 60); // 👈 typing speed (slower = higher number)
      return () => clearTimeout(t);
    }

    // line finished → pause → move to next line
    if (charIndex === currentLine.text.length) {
      const pause = setTimeout(() => {
        setDisplayedLines(lines => [...lines, currentLine.text]);
        setCharIndex(0);
        setLineIndex(i => i + 1);
      }, currentLine.delayAfter);
      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex]);

  // all lines finished
  useEffect(() => {
    if (lineIndex === introLines.length) {
      const end = setTimeout(onFinish, 1200);
      return () => clearTimeout(end);
    }
  }, [lineIndex]);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="text-3xl leading-relaxed text-left">
        {displayedLines.map((line, i) => (
          <div key={i} className="mb-4">
            {line}
          </div>
        ))}

        {currentLine && (
          <div className="mb-4">
            {currentLine.text.slice(0, charIndex)}
            <span className="animate-pulse">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}
