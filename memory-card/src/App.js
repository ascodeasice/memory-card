import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

function App() {
  const [over, setOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  return (
    <div id="app">
      <Header score={score} highestScore={highestScore} />
      <CardContainer />
    </div>
  );
}

export default App;
