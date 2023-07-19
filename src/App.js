import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import TranslationButton from "./components/translationButton/translationButton";

function App() {
  const { t } = useTranslation("main.main");
  const { t: TAnother } = useTranslation("another.antoher");
  return (
    <div className="App">
      <header className="App-header">
        <TranslationButton />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("Edita")} <code>src/App.js</code> {TAnother("guarda")} {t("y")}{" "}
          {TAnother("refresca")}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

export default App;
