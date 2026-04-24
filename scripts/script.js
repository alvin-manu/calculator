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
    const currentInput = inputContainer.textContent;
    const lastChar = currentInput[currentInput.length - 1];
    const operators = ['+', '-', '*', '/'];

    if (val === '.') {
        const parts = currentInput.split(/[\+\-\*\/]/);
        const currentNumber = parts[parts.length - 1];
        if (currentNumber.includes('.')) return;
    }

    if (operators.includes(val)) {

        if (currentInput === "" && val !== '-') return;

        if (operators.includes(lastChar)) {
            inputContainer.textContent = currentInput.slice(0, -1) + val;
            return; 
        }
    }

    inputContainer.textContent += val;
};

const clearAll = () => {
    inputContainer.textContent = "";
    calculations.textContent = "";
};

const deleteLast = () => {
    inputContainer.textContent = inputContainer.textContent.slice(0, -1);
};

const calculate = () => {
    try {
        calculations.textContent = inputContainer.textContent;
        inputContainer.textContent = eval(inputContainer.textContent);
    } catch (err) {
        inputContainer.textContent = "NaN";
    }
};

