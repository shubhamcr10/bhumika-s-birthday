import { useState, useEffect } from "react";
import Intro from "../components/Intro/Intro";
import CakeScene from "../components/CakeScene/CakeScene";
import TransitionOverlay from "../components/TransitionOverlay";

export default function Home() {
  const [stage, setStage] = useState("intro");

  return (
    <>
      {stage === "intro" && (
        <Intro onFinish={() => setStage("transition")} />
      )}

      <TransitionOverlay show={stage === "transition"} />

      {stage === "transition" && (
        <DelayedCake onDone={() => setStage("cake")} />
      )}

      {stage === "cake" && <CakeScene />}
    </>
  );
}

function DelayedCake({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 900);
    return () => clearTimeout(t);
  }, []);

  return null;
}
