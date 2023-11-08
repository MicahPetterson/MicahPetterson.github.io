const sections = document.querySelectorAll("section");

function showSection(section) {
    for(let i = 0; i < sections.length; i++) {
        sections[i].classList.add("hidden");
    }
    document.getElementById(section).classList.remove("hidden");
}

function test() {
    document.querySelector("main").style.backgroundColor = "red";
}