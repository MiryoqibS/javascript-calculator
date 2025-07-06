import "./main.scss";

import { CalculatorApp } from "./CalculatorApp";

const root = document.querySelector("#app");

const calculatorApp = new CalculatorApp( root);
calculatorApp.init();