import { useState } from "react";
import Intro from "../components/Intro/Intro";
import CakeScene from "../components/CakeScene/CakeScene";

export default function Home() {
  const [stage, setStage] = useState("intro");

  return (
    <>
      {stage === "intro" && <Intro onFinish={() => setStage("cake")} />}
      {stage === "cake" && <CakeScene />}
    </>
  );
}
