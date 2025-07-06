import "./ThemeToggle.scss";

export class ThemeToggle {
    render() {
        const toggle = document.createElement("label")
        toggle.className = "theme-toggle";

        // Создаем переключатель темы
        const toggleInput = document.createElement("input");
        toggleInput.type = "checkbox";
        toggleInput.className = "theme-toggle__input";

        const toggleSlider = document.createElement("span");
        toggleSlider.className = "theme-toggle__slider";
        

        // Переключение темы
        toggleInput.addEventListener("change", () => {
            if (toggleInput.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
            }
        });

        toggle.appendChild(toggleInput);
        toggle.appendChild(toggleSlider);

        return toggle;
    }
}