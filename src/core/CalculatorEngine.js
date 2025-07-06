import { evaluate } from "mathjs";

export class CalculatorEngine {
    constructor() {
        this.history = "";
        this.buttons = [
            // Константы
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

            // Операторы очистки
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

            // Арифметические операторы
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
                id: "btn_minus",
                label: "-",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_plus",
                label: "+",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_bracket-open",
                label: "(",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_bracket-close",
                label: ")",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_pow",
                label: "x²",
                className: "calculator__button",
                modification: "primary",
            },
            {
                id: "btn_sqrt",
                label: "√",
                className: "calculator__button",
                modification: "primary",
            },

            // Цифры
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
    }

    calculate(expression) {
        // Удаляем пробелы и проверяем на допустимые символы
        const sanitized = expression.replace(/\s+/g, '');

        try {
            // Используем evaluate из библиотеки для вычисления выражения
            const result = evaluate(sanitized);

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
}