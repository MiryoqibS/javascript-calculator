import "./Calculator.scss";
import { Button } from "./Button.js";
import { Display } from "../Display/Display.js";
import { InputHandler } from "../InputHandler/InputHandler.js";

export class Calculator {
    constructor(root) {
        this.root = root;
        this.history = "";
    }

    init() {
        // Создание корневого элемента калькулятора
        const calculatorElement = document.createElement("div");
        calculatorElement.className = "calculator";

        // Экран калькулятора
        const displayElement = document.createElement("div");
        displayElement.className = "display";
        this.display = new Display(displayElement);

        // Обработчик нажатий на кнопки
        this.inputHandler = new InputHandler(this.display, this.calculate);

        this.display.init();

        // Инициализация кнопок
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "calculator__buttons";
        this.initButtons(buttonsContainer);

        // Добавление элементов в корневой элемент калькулятора
        calculatorElement.appendChild(displayElement);
        calculatorElement.appendChild(buttonsContainer);

        this.root.appendChild(calculatorElement);
    }

    calculate(expression) {
        // Удаляем пробелы и проверяем на допустимые символы
        const sanitized = expression.replace(/\s+/g, '');

        // Разрешаем только цифры, операторы и скобки
        const validPattern = /^[0-9+\-*/().]+$/;

        if (!validPattern.test(sanitized)) {
            return "Недопустимые символы!";
        };

        // Проверяем, что выражение не заканчивается на оператор
        if (!["+", "-", "*", "/"].includes(sanitized.slice(-1))) {
            try {
                // Используем eval для вычисления выражения
                const result = eval(sanitized);

                if (isNaN(result) || !isFinite(result)) {
                    return "Ошибка вычисления!";
                };

                if (!Number.isInteger(result)) {
                    return result.toFixed(2);
                };

                // Обновляем историю вычислений
                this.history = (sanitized + " = ");
                this.display.updateHistory(this.history);

                return result.toString();
            } catch (error) {
                return `Ошибка вычисления! ${error}`;
            }
        };
    };

    initButtons(container) {
        const buttons = [
            {
                id: "btn_e",
                label: "e",
                className: "calculator__button",
                modification: "small",
            },
            {
                id: "btn_pi",
                label: "π",
                className: "calculator__button",
                modification: "small",
            },
            {
                id: "btn_sin",
                label: "sin",
                className: "calculator__button",
                modification: "small",
            },
            {
                id: "btn_cos",
                label: "cos",
                className: "calculator__button",
                modification: "small",
            },
            {
                id: "btn_ac",
                label: "Ac",
                className: "calculator__button",
                modification: "gray",
            },
            {
                id: "btn_delete",
                label: "delete",
                className: "calculator__button",
                modification: "gray",
            },
            {
                id: "btn_divide",
                label: "/",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_multiply",
                label: "*",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_7",
                label: "7",
                className: "calculator__button",
            },
            {
                id: "btn_8",
                label: "8",
                className: "calculator__button",
            },
            {
                id: "btn_9",
                label: "9",
                className: "calculator__button",
            },
            {
                id: "btn_minus",
                label: "-",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_4",
                label: "4",
                className: "calculator__button",
            },
            {
                id: "btn_5",
                label: "5",
                className: "calculator__button",
            },
            {
                id: "btn_6",
                label: "6",
                className: "calculator__button",
            },
            {
                id: "btn_plus",
                label: "+",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_1",
                label: "1",
                className: "calculator__button",
            },
            {
                id: "btn_2",
                label: "2",
                className: "calculator__button",
            },
            {
                id: "btn_3",
                label: "3",
                className: "calculator__button",
            },
            {
                id: "btn_0",
                label: "0",
                className: "calculator__button",
            },
            {
                id: "btn_dot",
                label: ".",
                className: "calculator__button",
            },
            {
                id: "btn_equals",
                label: "=",
                className: "calculator__button",
                modification: "light",
            },
        ];

        buttons.forEach((button) => {
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