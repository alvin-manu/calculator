const changeThemeBtn = document.getElementById("changeThemeBtn");
const themeText = document.getElementById("themeText");
const themeIcon = document.getElementById("themeIcon");

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