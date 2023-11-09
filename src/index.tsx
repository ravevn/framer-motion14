import * as React from "react";
import { render } from "react-dom";
import { Animation } from "./Animation";
import "./styles.css";

const App = () => <Animation />;

render(<App />, document.getElementById("root"));
