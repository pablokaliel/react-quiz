import { useContext,useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/welcome';
import Question from './components/question';
import GameOver from './components/gameOver';

import './App.css';


function App() {
  
  const [quizState,dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type:"REORDER_QUESTIONS"})
  }, []);
  return (
    <div className="App">
     <h>Quiz de Programação</h>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>  
  );
}

export default App;
