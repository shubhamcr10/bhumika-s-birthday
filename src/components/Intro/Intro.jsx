import { useEffect, useState } from "react";
import { introLines } from "./introData";

export default function Intro({ onFinish }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [printedLines, setPrintedLines] = useState([]);

  const currentLine = introLines[lineIndex];

  useEffect(() => {
    if (!currentLine) return;

    // type characters one by one
    if (charIndex < currentLine.text.length) {
      const t = setTimeout(() => {
        setCharIndex(c => c + 1);
      }, 70); // ⬅ typing speed (increase = slower)
      return () => clearTimeout(t);
    }

    // line finished → pause → next line
    if (charIndex === currentLine.text.length) {
      const pause = setTimeout(() => {
        setPrintedLines(lines => [...lines, currentLine.text]);
        setCharIndex(0);
        setLineIndex(i => i + 1);
      }, currentLine.delayAfter);
      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex]);

  // finished all lines
  useEffect(() => {
    if (lineIndex === introLines.length) {
      const end = setTimeout(onFinish, 1200);
      return () => clearTimeout(end);
    }
  }, [lineIndex]);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="text-2xl leading-relaxed text-left">
        {printedLines.map((line, i) => (
          <div key={i} className="mb-3">
            {line}
          </div>
        ))}

        {currentLine && (
          <div className="mb-3">
            {currentLine.text.slice(0, charIndex)}
            <span className="ml-1 animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
