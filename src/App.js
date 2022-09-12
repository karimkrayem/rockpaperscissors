import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import FinalGame from "./Components/FinalGame";
import Game from "./Components/Game";
import Score from "./Components/Score";
import Modal from "./Components/Modal";
function App() {

  const [choix, setMonChoix] = useState("")
  const [myScore, setMyScore] = useState(0)
  const [close, setClose] = useState(false)

  const closeBtn = () => {
    setClose(true)
  }

  const test = () => {
    if (close === true) {
      setClose(false)
    }
  }

  return (

    <div >
      {close ? <Modal modal={test} /> : null}
      <Score setMyScore={myScore} />
      <Switch>
        <Route path={'/Jeux'}>
          <FinalGame ChoixFinal={choix} Score={myScore} ScoreFinal={setMyScore} />
        </Route>
        <Route path='/'>
          <Game setMonChoix={setMonChoix} closeMode={closeBtn} />
        </Route>
      </Switch>



    </div>


  );
}

export default App;
