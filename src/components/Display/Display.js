import "./Display.scss";

export class Display {
    constructor() {
        this.value = "";
        this.history = "";
    }

    updateValue(value) {
        this.value = value;

        const textElement = document.querySelector(".display__text");
        textElement.innerText = this.value || 0;
    }

    updateHistory(history) {
        this.history = history;

        const historyElement = document.querySelector(".display__history");
        historyElement.innerText = this.history
    }

    render() {
        const displayElement = document.createElement("div");
        displayElement.className = "display";

        const textElement = document.createElement("h3");
        textElement.className = "display__text";
        textElement.innerText = this.value || "0";

        const historyElement = document.createElement("p");
        historyElement.className = "display__history";

        historyElement.innerText = this.history;
        historyElement.addEventListener("click", () => {
            this.updateValue(this.history.slice(0, -2).trim());
        })

        displayElement.appendChild(historyElement);
        displayElement.appendChild(textElement);

        return displayElement;
    }
};