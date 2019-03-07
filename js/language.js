function spanish() {
    var width = document.documentElement.clientWidth;
    var heading = document.getElementById('heading');
    var subheading = document.getElementById('subheading');
    var aboutTab = document.getElementById('about-tab');
    var projectsTab = document.getElementById('projects-tab');
    var writingTab = document.getElementById('writing-tab');
    var contactTab = document.getElementById('contact-tab');
    var aboutPanel = document.getElementById('about-panel');
    var projectsPanel = document.getElementById('projects-panel');
    var writingPanel = document.getElementById('writing-panel');
    var contactPanel = document.getElementById('contact-panel');
    var spanishButton = document.getElementById('spanish-button');
    var englishButton = document.getElementById('english-button');
    var dayButton = document.getElementById('day-button');
    var nightButton = document.getElementById('night-button');

    heading.style.fontSize = "4rem";
    heading.innerText = "Mi nombre es Michael Carranza.";

    subheading.style.fontSize = "2.2rem";
    if (width >=1200) {
        subheading.innerText = "Soy un escritor/desarrollador web.";
    } else subheading.innerText = "Escritor/Desarrollador";

    aboutTab.innerText = "Acerca";
    projectsTab.innerText = "Mis Proyectos";
    writingTab.innerText = "Escritos";
    contactTab.innerText = "Contáctame";

    aboutPanel.classList.add("green");
    aboutPanel.classList.remove("red");
    projectsPanel.classList.add("green");
    writingPanel.classList.remove("red");
    writingPanel.classList.add("green");
    writingPanel.classList.remove("red");
    contactPanel.classList.add("green");
    contactPanel.classList.remove("red");

    spanishButton.classList.add("red");
    spanishButton.classList.remove("blue");
    spanishButton.style.height = "55px";
    spanishButton.style.paddingTop = ".25rem";
    englishButton.classList.add("red");
    englishButton.classList.remove("blue");
    englishButton.height = "55px";
    englishButton.style.removeProperty('margin-top');
    subheading.classList.add("red");
    subheading.classList.remove("blue");
    subheading.style.height = "55px";
    subheading.style.lineHeight = "2.5rem";
    dayButton.classList.add("red");
    dayButton.classList.remove("blue");
    dayButton.style.height = "55px";
    dayButton.style.paddingTop = ".25rem";
    nightButton.classList.add("red");
    nightButton.classList.remove("blue");
    nightButton.style.height = "55px";
    nightButton.style.paddingTop = ".25rem";

    spanishButton.style.display = "none";
    englishButton.style.display = "inline";
}

function english() {
    var width = document.documentElement.clientWidth;
    var heading = document.getElementById('heading');
    var subheading = document.getElementById('subheading');
    var aboutTab = document.getElementById('about-tab');
    var projectsTab = document.getElementById('projects-tab');
    var writingTab = document.getElementById('writing-tab');
    var contactTab = document.getElementById('contact-tab');
    var aboutPanel = document.getElementById('about-panel');
    var projectsPanel = document.getElementById('projects-panel');
    var writingPanel = document.getElementById('writing-panel');
    var contactPanel = document.getElementById('contact-panel');
    var spanishButton = document.getElementById('spanish-button');
    var englishButton = document.getElementById('english-button');
    var dayButton = document.getElementById('day-button');
    var nightButton = document.getElementById('night-button');

    heading.innerText = "My name is Michael Carranza.";
    heading.style.fontSize = "4.2rem";

    subheading.style.fontSize = "2.5rem";
    if (width >=1200) {
        subheading.innerText = "I am a writer/web developer.";
    } else subheading.innerText = "Writer/Web Developer";

    aboutTab.innerText = "About Me";
    projectsTab.innerText = "My Projects";
    writingTab.innerText = "Writing";
    contactTab.innerText = "Contact Me";

    aboutPanel.classList.add("red");
    aboutPanel.classList.remove("green");
    projectsPanel.classList.add("red");
    projectsPanel.classList.remove("green");
    writingPanel.classList.add("red");
    writingPanel.classList.remove("green");
    contactPanel.classList.add("red");
    contactPanel.classList.remove("green");

    spanishButton.classList.add("blue");
    spanishButton.classList.remove("red");
    spanishButton.style.height = "55px";
    spanishButton.style.paddingTop = ".25rem";
    englishButton.classList.add("blue");
    englishButton.classList.remove("red");
    englishButton.style.height = "55px";
    englishButton.style.marginTop = "0";
    subheading.classList.add("blue");
    subheading.classList.remove("red");
    subheading.height = "55px";
    subheading.style.lineHeight = "55px";
    dayButton.classList.add("blue");
    dayButton.classList.remove("red");
    dayButton.style.height = "55px";
    dayButton.style.paddingTop = ".25rem";
    dayButton.style.lineHeight = "55px";
    nightButton.classList.add("blue");
    nightButton.classList.remove("red");
    nightButton.style.height = "55px";
    nightButton.style.lineHeight = "55px";
    nightButton.style.paddingTop = ".25rem";

    englishButton.style.display = "none";
    spanishButton.style.display = "inline";
}

function night(){
    var body = document.body;
    var heading = document.getElementById('heading');
    var nightButton = document.getElementById("night-button");
    var dayButton = document.getElementById("day-button");
    var bodies = document.getElementsByClassName("card-body");
        body.style.backgroundColor = "black";
        heading.style.color = "white";
        dayButton.style.display = "inline";
        nightButton.style.display = "none";
        bodies[0].style.backgroundColor="lightgray";
        bodies[1].style.backgroundColor="lightgray";
        bodies[2].style.backgroundColor="lightgray";
        bodies[3].style.backgroundColor="lightgray";
}

function day(){
    var body = document.body;
    var heading = document.getElementById('heading');
    var nightButton = document.getElementById("night-button");
    var dayButton = document.getElementById("day-button");
    var bodies = document.getElementsByClassName("card-body");
        body.style.backgroundColor = "white";
        heading.style.color = "black";
        nightButton.style.display = "inline";
        dayButton.style.display = "none";
        bodies[0].style.backgroundColor="#DDDDDD";
        bodies[1].style.backgroundColor="#DDDDDD";
        bodies[2].style.backgroundColor="#DDDDDD";
        bodies[3].style.backgroundColor="#DDDDDD";
}

function aboutMe(){
    var aboutTab = document.getElementById("about");
    var projectsTab = document.getElementById("projects");
    var writingTab = document.getElementById("writing");
    var contactTab = document.getElementById("contact");
    aboutTab.style.display = 'inline';
    projectsTab.style.display = 'none';
    writingTab.style.display ='none';
    contactTab.style.display ='none';
}
function projects(){
    var aboutTab = document.getElementById("about");
    var projectsTab = document.getElementById("projects");
    var writingTab = document.getElementById("writing");
    var contactTab = document.getElementById("contact");
    aboutTab.style.display = 'none';
    projectsTab.style.display = 'inline';
    writingTab.style.display ='none';
    contactTab.style.display ='none';
}
function writing(){
    var aboutTab = document.getElementById("about");
    var projectsTab = document.getElementById("projects");
    var writingTab = document.getElementById("writing");
    var contactTab = document.getElementById("contact");
    aboutTab.style.display = 'none';
    projectsTab.style.display = 'none';
    writingTab.style.display ='inline';
    contactTab.style.display ='none';
}
function contact(){
    var aboutTab = document.getElementById("about");
    var projectsTab = document.getElementById("projects");
    var writingTab = document.getElementById("writing");
    var contactTab = document.getElementById("contact");
    aboutTab.style.display = 'none';
    projectsTab.style.display = 'none';
    writingTab.style.display ='none';
    contactTab.style.display ='inline';
}