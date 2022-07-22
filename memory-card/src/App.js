import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [headerText, setHeaderText] = useState('How to play : click cards you haven\'t clicked')

  return (
    <div id="app">
      <Header score={score} highestScore={highestScore}
        text={headerText} />
      <CardContainer score={score} setScore={setScore}
        highestScore={highestScore} setHighestScore={setHighestScore}
        setHeaderText={setHeaderText} />
    </div>
  );
}

export default App;
