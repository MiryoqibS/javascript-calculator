import deleteIcon from "/icons/delete.svg?raw";

export class Button {
    constructor(root, label, onClick, className, modification, id) {
        this.root = root;
        this.label = label;
        this.onClick = onClick;
        this.id = id;
        this.className = `${className} ${className}--${modification}`;
    }

    init() {
        const buttonElement = document.createElement("button");
        buttonElement.type = "button";
        buttonElement.innerText = this.label;
        buttonElement.className = this.className;
        buttonElement.id = this.id;

        if (this.label === "delete") {
            buttonElement.innerHTML = deleteIcon; // Используем иконку для кнопки "delete"
        };

        // Обработка по клике
        buttonElement.addEventListener("click", () => {
            this.onClick(this.label);
        });

        // Обработка нажатий на клавиши
        document.addEventListener("keydown", (event) => {
            if (event.key === this.label) {
                this.onClick(this.label);
            };
        });

        // Обработка клавиши для очистки при нажатии Escape
        if (this.label === "Ac") {
            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    this.onClick(this.label);
                };
            });
        };

        // Обработка клавиши для очистки 1 символа при нажатии Backspace
        if (this.label === "delete") {
            document.addEventListener("keydown", (event) => {
                if (event.key === "Backspace") {
                    this.onClick(this.label);
                };
            });
        }

        this.root.appendChild(buttonElement);
    }
}