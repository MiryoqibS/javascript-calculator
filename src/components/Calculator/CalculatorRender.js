import "./Calculator.scss";
import { Button } from "./Button.js";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.js";

export class CalculatorRender {
    constructor(calculatorEngine, calculatorDisplay, inputHandler) {
        this.calculatorEngine = calculatorEngine;
        this.calculatorDisplay = calculatorDisplay;
        // Обработчик нажатий на кнопки
        this.inputHandler = inputHandler;
    }

    render() {
        // Создание корневого элемента калькулятора
        const calculator = document.createElement("div");
        calculator.className = "calculator";

        // Инициализация переключателя темы
        const themeToggle = new ThemeToggle().render();
        calculator.appendChild(themeToggle);
        
        // Экран калькулятора
        const display = this.calculatorDisplay.render();

        // Инициализация кнопок
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "calculator__buttons";
        this.renderButtons(buttonsContainer);

        // Добавление элементов в корневой элемент калькулятора
        calculator.appendChild(display);
        calculator.appendChild(buttonsContainer);

        return calculator;
    }

    // Рендеринг кнопок калькулятора
    renderButtons(container) {
        this.calculatorEngine.buttons.forEach((button) => {
            const buttonElement = new Button(
                container,
                button.label,
                this.inputHandler.handleButtonClick.bind(this.inputHandler, button.label),
                button.className,
                button.modification || "",
                button.id,
            );
            buttonElement.init();
        });
    }
}