import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelwithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [state, setState] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    state === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : state, color: "white" }}
        onClick={() => setState(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelwithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
