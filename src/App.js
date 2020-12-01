import "./App.css";
import Main from "components/main";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme, partyTheme } from "./themes";
import { useState, useEffect } from "react";

function App(props) {
  const themesvalue = useSelector((state) => state.themes);
  const [currenttheme, setcurrenttheme] = useState("");
  useEffect(() => {
    if (themesvalue.currentTheme === "darkTheme") {
      setcurrenttheme(darkTheme);
    } else if (themesvalue.currentTheme === "lightTheme") {
      setcurrenttheme(lightTheme);
    } else if (themesvalue.currentTheme === "partyTheme") {
      setcurrenttheme(partyTheme);
    }
  }, [themesvalue.currentTheme]);

  return (
    <div className="App">
      <header>
        <Main theme={currenttheme} />
      </header>
    </div>
  );
}

export default App;
