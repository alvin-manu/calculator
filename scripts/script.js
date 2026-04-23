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

inputContainer.addEventListener("input", (e) => {

    let val = inputContainer.value.replace(/[^0-9+\-*/.]/g, "");

    val = val.replace(/[\+\-\*\/]{2,}/g, (match) => match[match.length - 1]);

    if (/^[\+\*\/]/.test(val)) {
        val = "";
    }

    if (e.data === '.') {

        const parts = val.split(/[\+\-\*\/]/);
        const currentNumber = parts[parts.length - 1];

        if (currentNumber.split('.').length > 2) {
            val = val.slice(0, -1);
        }
    }

    inputContainer.value = val;
});