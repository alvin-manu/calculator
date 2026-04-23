const changeThemeBtn = document.getElementById("changeThemeBtn");
const themeText = document.getElementById("themeText");
const themeIcon = document.getElementById("themeIcon");
const inputContainer = document.getElementById("inputContainer")
const calculations = document.getElementById("calculations")

changeThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkMode")
    if (document.body.classList.contains("darkMode")) {
        themeText.textContent = "Light mode"

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeText.textContent = "Dark mode"

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
})

const addInput = (val) => {
    if (val === '.') {
        const parts = inputContainer.value.split(/[\+\-\*\/]/);

        const currentNumber = parts[parts.length - 1];

        if (currentNumber.includes('.')) return;
    }

    inputContainer.value += val
}

const clearAll = () => {
    inputContainer.value = "";
    calculations.textContent = "";
};

const deleteLast = () => {
    inputContainer.value = inputContainer.value.slice(0, -1);
};

const calculate = () => {
    try {
        calculations.textContent = inputContainer.value;
        inputContainer.value = eval(inputContainer.value);
    } catch (err) {
        inputContainer.value = "NaN";
    }
};

