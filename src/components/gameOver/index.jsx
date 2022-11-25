import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { VscDebugRestart } from "react-icons/vsc";
import wellDone from "../../assets/welldone.svg";
import "./styles.css";

function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim de jogo</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={wellDone} alt="Fim" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>
        <VscDebugRestart style={{ position: "relative", top: 3, right: 4 }} />
        Reiniciar{" "}
      </button>
    </div>
  );
}

export default GameOver;
