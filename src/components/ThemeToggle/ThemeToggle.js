import "./ThemeToggle.scss";

export class ThemeToggle {
    constructor(root) {
        this.root = root;
        this.toggleButton = document.createElement("label");
    }

    render() {
        // Создаем переключатель темы
        const toggleInput = document.createElement("input");
        toggleInput.type = "checkbox";
        toggleInput.className = "theme-toggle__input";

        const toggleSlider = document.createElement("span");
        toggleSlider.className = "theme-toggle__slider";
        
        this.toggleButton.className = "theme-toggle";

        // Переключение темы
        toggleInput.addEventListener("change", () => {
            if (toggleInput.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            }
        });

        this.toggleButton.appendChild(toggleInput);
        this.toggleButton.appendChild(toggleSlider);

        this.root.appendChild(this.toggleButton);
    }
}