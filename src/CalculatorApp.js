import { CalculatorRender } from "./components/Calculator/CalculatorRender.js";
import { CalculatorEngine } from "./core/CalculatorEngine.js";
import { Display } from "./components/Display/Display.js";
import { InputHandler } from "./components/InputHandler/InputHandler.js";

export class CalculatorApp {
    constructor(root) {
        this.root = root;
        this.calculatorEngine = new CalculatorEngine();
        this.display = new Display(this.calculatorEngine.history);
        this.inputHandler = new InputHandler(this.display, this.calculatorEngine.calculate);
        this.calculatorRender = new CalculatorRender(this.calculatorEngine, this.display, this.inputHandler);
    }

    // Инициализация 
    init() {
        const calculator = this.render();

        this.root.appendChild(calculator);
    }

    // Рендеринг калькулятора
    render() {
        const calculator = this.calculatorRender.render(this.calculatorEngine, this.display, this.inputHandler);

        return calculator;
    }
}