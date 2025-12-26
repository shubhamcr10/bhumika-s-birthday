import { useState, useEffect } from "react";
import Intro from "../components/Intro/Intro";
import CakeScene from "../components/CakeScene/CakeScene";
import TransitionOverlay from "../components/TransitionOverlay";

export default function Home() {
  const [stage, setStage] = useState("intro");
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (stage === "transition") {
      setShowOverlay(true);

      const t = setTimeout(() => {
        setShowOverlay(false);
        setStage("cake");
      }, 900);

      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <>
      {stage === "intro" && (
        <Intro onFinish={() => setStage("transition")} />
      )}

      <TransitionOverlay show={showOverlay} />

      {stage === "cake" && <CakeScene />}
    </>
  );
}
