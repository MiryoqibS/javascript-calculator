import "./InputHandler.scss";

export class InputHandler {
    constructor(display, calculateFn, history) {
        this.display = display;
        this.calculateFn = calculateFn;
        this.history = history;
    }

    handleButtonClick(label) {
        switch (label) {
            case "e":
                this.display.update(Math.E.toFixed(2).toString());
                break;
            case "π":
                this.display.update(Math.PI.toFixed(2).toString());
                break;
            case "sin":
                const sinValue = Math.sin(parseFloat(this.display.value)).toFixed(2);
                this.display.update(sinValue.toString());
                break;
            case "cos":
                const cosValue = Math.cos(parseFloat(this.display.value)).toFixed(2);
                this.display.update(cosValue.toString());
                break;
            case "Ac":
                this.display.update("");
                break;
            case "delete":
                this.display.update(this.display.value.slice(0, -1));
                break;
            case "+":
                this.display.update(this.display.value + "+");
                break;
            case "-":
                this.display.update(this.display.value + "-");
                break;
            case "*":
                this.display.update(this.display.value + "*");
                break;
            case "/":
                this.display.update(this.display.value + "/");
                break;
            case "0":
                this.display.update(this.display.value + "0");
                break;
            case "1":
                this.display.update(this.display.value + "1");
                break;
            case "2":
                this.display.update(this.display.value + "2");
                break;
            case "3":
                this.display.update(this.display.value + "3");
                break;
            case "4":
                this.display.update(this.display.value + "4");
                break;
            case "5":
                this.display.update(this.display.value + "5");
                break;
            case "6":
                this.display.update(this.display.value + "6");
                break;
            case "7":
                this.display.update(this.display.value + "7");
                break;
            case "8":
                this.display.update(this.display.value + "8");
                break;
            case "9":
                this.display.update(this.display.value + "9");
                break;
            case "=":
                const expression = this.calculateFn(this.display.value);
                if (expression) {
                    this.display.update(expression.toString());
                }
                break;
            case ".":
                this.display.update(this.display.value + ".");
                break;
            default:
                console.warn(`Unknown button label: ${label}`);
                this.display.update("Error");
                break;
        }
    };
};