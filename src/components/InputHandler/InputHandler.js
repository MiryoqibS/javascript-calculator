export class InputHandler {
    constructor(display, calculateFn, history) {
        this.display = display;
        this.calculateFn = calculateFn;
        this.history = history;
        this.bracketsOpen = 0;
    }

    handleButtonClick(label) {
        const expression = this.display.value;
        const lastIndex = expression.length - 1;
        const operators = ["/", "*", "-", "+"];
        const lastChar = expression[lastIndex];

        switch (label) {
            // Константы
            case "e":
                const E = Math.E.toFixed(2).toString();

                // Число PI не может ставить после числа или точки
                if (lastChar && /\d|\./.test(lastChar)) break;

                this.display.updateValue(this.display.value + E);
                break;
            case "π":
                const PI = Math.PI.toFixed(2).toString();

                // Число PI не может ставить после числа или точки
                if (lastChar && /\d|\./.test(lastChar)) break;

                this.display.updateValue(this.display.value + PI);
                break;
            case "sin":
                const sinValue = Math.sin(parseFloat(this.display.value)).toFixed(2);
                this.display.updateValue(sinValue.toString());
                break;
            case "cos":
                const cosValue = Math.cos(parseFloat(this.display.value)).toFixed(2);
                this.display.updateValue(cosValue.toString());
                break;

            // Очистка
            case "Ac":
                this.display.updateValue("");
                break;
            case "delete":
                this.display.updateValue(this.display.value.slice(0, -1));
                break;

            // Арифметические операторы
            case "+":
            case "-":
            case "/":
            case "*":
                // Оператор может ставиться только перед число
                if (isNaN(Number(lastChar)) && label !== "-") {
                    break;
                };

                // Для минусовых чисел
                if (label === "-" && operators.includes(lastChar) && lastChar !== "-") {
                    this.display.updateValue(this.display.value + label);
                    break;
                } else if (operators.includes(lastChar)) {
                    break;
                };

                this.display.updateValue(this.display.value + label);

                break;

            case "(":
                this.bracketsOpen++;
                this.display.updateValue(this.display.value + label);
                break;

            case ")":
                if (this.bracketsOpen <= 0) break;

                this.bracketsOpen--;
                this.display.updateValue(this.display.value + label);
                break;

            case "x²":
                if (!lastChar || /[+\-*/(]/.test(lastChar)) {
                    this.display.updateValue(this.display.value + "²");
                };

                break;

            case "√":
                if (!lastChar || /[+\-*/(]/.test(lastChar)) {
                    this.display.updateValue(this.display.value + "√");
                };

                break;

            // Вычисление
            case "=":
                if (this.bracketsOpen !== 0) break;
                if (operators.includes(lastChar)) break;

                const validExpression = expression.replace(/√(\d+|\(.+?\))/g, 'sqrt($1)').replace(/(\d+|\))²/g, '($1)^2');

                const sum = this.calculateFn(validExpression);
                if (expression) {
                    this.display.updateHistory(String(expression));
                    this.display.updateValue(String(sum));
                }
                break;

            // Цифры
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.display.updateValue(this.display.value + label);
                break;
            case ".":
                // Для каждого числа только одна точка
                const parts = expression.split(/[\+\-\*\/]/);
                const lastPart = parts[parts.length - 1];
                if (lastPart.includes(".")) break;

                // Точка не может идти после оператора
                if (operators.includes(lastChar)) break;

                this.display.updateValue(this.display.value + ".");
                break;
            default:
                console.warn(`Unknown button label: ${label}`);
                this.display.updateValue("Error");
                break;
        }
    };
};