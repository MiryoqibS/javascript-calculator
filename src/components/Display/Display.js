import "./Display.scss";

export class Display {
    constructor(root) {
        this.root = root;
        this.value = "";
        this.history = "";
        this.textElement = document.createElement("h3");
        this.historyElement = document.createElement("p");
    }

    init() {
        this.render();
        
        this.root.append(this.historyElement, this.textElement);
    }

    update(value) {
        this.value = value;
        this.render();
    }

    updateHistory(history) {
        this.history = history;
        this.render();
    }

    render() {
        this.textElement.innerText = this.value || "0";
        this.textElement.className = "display__text";
        
        this.historyElement.innerText = this.history; 
        this.historyElement.className = "display__history";
        this.historyElement.addEventListener("click", () => {
            this.update(this.history.slice(0, -2).trim());
        })
    }
};