const changeThemeBtn = document.getElementById("changeThemeBtn");
const themeText = document.getElementById("themeText");
const themeIcon = document.getElementById("themeIcon");
const inputContainer = document.getElementById("inputContainer")
const calculations = document.getElementById("calculations")

changeThemeBtn.addEventListener("click", () => changeTheme())

const changeTheme = ()=>{
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
}

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

const power = () => {
    console.log("first")
    const currentInput = inputContainer.textContent;
    const lastChar = currentInput[currentInput.length - 1];
    const operators = ['+', '-', '*', '/'];

    if(currentInput === "" || operators.includes(lastChar) || lastChar === "."){
        return
    }else{

        inputContainer.textContent += "**";
    }

};

window.addEventListener('keydown', (e) => {
    const key = e.key;

    switch (key) {
        case 'Enter':
            e.preventDefault();
            calculate(); 
            break;

        case 'Backspace':
            deleteLast(); 
            break;

        case 'Escape':
            clearAll(); 
            break;

        case 'Shift':
            changeTheme(); 
            break;

        case 's':
            power(); 
            break;

        default:
            if (/[0-9+\-*/.]/.test(key)) {
                addInput(key); 
            }
            break;
    }
});