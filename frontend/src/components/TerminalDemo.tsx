
import React, { useState, useEffect, useRef } from "react";

// Terminal step content as normal black text, no icons
const terminalSteps = [
  'nova "deploy my app to staging"',
  "I'll help you deploy to staging. Let me check your setup...",
  "Found docker-compose.yml",
  "Staging environment configured",
  "Suggested: docker-compose -f docker-compose.staging.yml up -d",
  "Execute this command? (y/N)"
];

// Helper function for typing effect
function useTypedLine(line: string, shouldType: boolean, typingDelay = 25, onDone?: () => void) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!shouldType) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + line[i]);
      i++;
      if (i >= line.length) {
        clearInterval(interval);
        onDone && onDone();
      }
    }, typingDelay);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [shouldType, line]);
  return displayed;
}

const TerminalDemo: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [lines, setLines] = useState<string[]>([""]);
  const typingDoneRef = useRef(false);

  // Manage the typing per line, only type the current visible line
  const currentLineTyping = useTypedLine(
    terminalSteps[stepIndex],
    stepIndex < terminalSteps.length,
    22,
    () => {
      typingDoneRef.current = true;
      if (stepIndex < terminalSteps.length - 1) {
        setTimeout(() => {
          setStepIndex((s) => s + 1);
        }, 400);
      }
    }
  );

  // Accumulate lines as each typing finishes
  useEffect(() => {
    // Accumulate lines
    setLines((prev) => [
      ...terminalSteps.slice(0, stepIndex),
      currentLineTyping
    ]);
    // eslint-disable-next-line
  }, [currentLineTyping, stepIndex]);

  // Reset accumulated lines if stepIndex resets (should not happen, but for sanity)
  useEffect(() => {
    if (stepIndex === 0) setLines([""]);
    // eslint-disable-next-line
  }, [stepIndex]);

  return (
    <div
      className="bg-white rounded-3xl border border-gray-300 shadow-2xl w-full max-w-4xl flex flex-col mx-auto mt-4 min-h-[380px] md:min-h-[480px] animate-fade-in"
      style={{
        // Extra visual boost for landing pages
        transition: "box-shadow 0.4s",
      }}
    >
      {/* Terminal Header */}
      <div className="flex items-center px-12 py-6 bg-[#ececec] rounded-t-3xl border-b border-gray-200">
        <span className="ml-2 font-mono text-[1.3rem] md:text-2xl text-gray-700 min-w-[200px] md:min-w-[340px]">
          nova@terminal
        </span>
      </div>
      {/* Terminal Body */}
      <div
        className="bg-white rounded-b-3xl px-12 py-10 md:px-20 md:py-16 font-mono text-[1.15rem] md:text-xl leading-relaxed min-h-[280px] md:min-h-[360px] text-black transition-colors duration-500"
        style={{ whiteSpace: "pre-line" }}
      >
        {lines.map((l, idx) => (
          <div key={idx} style={{ minHeight: 34 }}>
            {l}
            {/* Blinking cursor for the last typing line */}
            {idx === stepIndex && l.length < terminalSteps[idx].length ? (
              <span className="animate-pulse" style={{ opacity: 0.6 }}>|</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalDemo;

