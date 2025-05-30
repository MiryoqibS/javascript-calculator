import "./main.scss";

import { Calculator } from "./components/Calculator/Calculator";

const root = document.querySelector("#app");

const calculator = new Calculator(root);

calculator.init();