import deleteIcon from "/icons/delete.svg?raw";

export class Button {
    constructor(root, label, onClick, className, modification, id) {
        this.root = root;
        this.label = label;
        this.onClick = onClick;
        this.buttonElement = document.createElement("button");
        this.buttonElement.type = "button";
        this.buttonElement.innerText = label;
        // Добавляем класс для типа кнопки
        this.buttonElement.className = `${className} ${className}--${modification}`;
        // Добавляем id кнопке
        this.buttonElement.id = id;
    }

    init() {
        if (this.label === "delete") {
            this.buttonElement.innerHTML = deleteIcon; // Используем иконку для кнопки "delete"
        };

        this.buttonElement.addEventListener("click", () => {
            this.onClick(this.label);
        });

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

        this.root.appendChild(this.buttonElement);
    }
}