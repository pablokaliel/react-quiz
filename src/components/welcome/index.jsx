import { useContext } from "react";
import quiz from "../../assets/quiz.svg";
import { QuizContext } from "../../context/quiz";
import "./styles.css";
import { FiPlay } from "react-icons/fi";
import Footer from "../footer";

function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="container">
      <div className="welcome">
        <div className="animation">
          <h2 className="line typing-animation">Seja bem-Vindo</h2>
        </div>
        <p className="description">
          Este é um quiz com 20 perguntas aleatórias sobre:{" "}
          <span>Html,Css,JavaScript</span>
        </p>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
          Iniciar <FiPlay style={{ position: "relative", top: 3, left: 3 }} />
        </button>
        <img src={quiz} alt="logo" />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
