import "./Display.scss";

export class Display {
    constructor(root) {
        this.root = root;
        this.value = "";
        this.text = document.createElement("h3");
    }

    init() {
        this.render();
        this.root.append(this.text);
    }

    update(value) {
        this.value = value;
        this.render();
    }

    render() {
        this.text.innerText = this.value || "0";
        this.text.className = this.value ? "display__text" : "display__text empty";
    }
};