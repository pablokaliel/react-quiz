import { useContext } from "react";
import quiz from "../../assets/quiz.svg";
import { QuizContext } from "../../context/quiz";
import "./styles.css";

function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-Vindo</h2>
      <p>Clique no botão abaixo para começar <br/><br/>
      [ Contém perguntas aleatórias sobre : HTML,CSS,Javascript ]
      </p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={quiz} alt="logo" />
    </div>
  );
}

export default Welcome;
