let head = document.head;
let sectionIds = ["homepage", "places", "food", "gallery", "visitor"];
let headerSection = document.getElementById("header");

let themeButton = document.getElementById("toggle-theme");
themeButton.addEventListener("click", toggleTheme);


// Register showContent event for each button in menu bar
menu = document.querySelectorAll("nav>ul>li>a");
for (let option of menu) {
    let buttonId = option.id;
    let button = document.getElementById(buttonId);
    button.addEventListener("click", showContent);
}

// Show/hide content of subpages
function showContent() {
    let targetedSectionId = this.id.replace("-button", "");
    let targetedSection = document.getElementById(targetedSectionId);
    if (targetedSectionId === "homepage") {
        targetedSection.style.display = "flex";
        headerSection.style.display = "block";
    }
    else {
        targetedSection.style.display = "block";
        headerSection.style.display = "none";
    }
    for (let id of sectionIds) {
        if (id !== targetedSectionId) {
            document.getElementById(id).style.display = "none";
        }
    }
}

// Set dark theme
function darkTheme(fileSrc) {
    let head = document.head;
    let newLink = document.createElement("link");

    newLink.href = fileSrc;
    newLink.rel = "stylesheet";

    head.appendChild(newLink);
}

// Toggle between Light and Dark themes
function toggleTheme() {
    let invertedTheme = themeButton.textContent;

    if (invertedTheme === "Dark Theme") {
        darkTheme("css/new_theme.css");
        themeButton.textContent = "Light Theme";
    }
    else if (invertedTheme === "Light Theme") {
        let secondLink = head.querySelectorAll("link")[1];
        themeButton.textContent = "Dark Theme";
        head.removeChild(secondLink);
    }
}
