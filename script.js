class MyContainer extends HTMLElement {
    connectedCallback() {
      fetch('/side-buttons.html')
        .then(response => response.text())
        .then(html => this.innerHTML = html);
    }
  }
customElements.define('side-buttons', MyContainer);

////////////////////////////////////////////////////////////////

project_list = { // tech type (hw, sw, HW + SW)
    "NASA Software Engineering": {
        "img": "imgs/nasa/nasa-headshot.JPG",
        "link": "projects/nasa-internship.html",
        "date": "2023",
        "Technology": "HW + SW",
        "Completion": "Completed",
        "Group type": "Team"},
    "Lunar Lander Propulsion + VTVL Rocket Testing": { 
        "img": "imgs/masten/xodiac.gif", 
        "link": "projects/xl-1.html",
        "date": "2021",
        "Technology": "Hardware",
        "Completion": "Completed",
        "Group type": "Team"},
    "Self-Stabilizing Stick": { 
        "img": "imgs/rocketteam/stick.gif", 
        "link": "projects/closed-loop-control-self-stabilizing-stick.html",
        "date": "2022",
        "Technology": "HW + SW",
        "Completion": "Completed",
        "Group type": "Personal"},
    "Rocket Team: Propulsion Lead": { 
        "img": "imgs/2023/02/image-75.png", 
        "link": "projects/propulsion-lead.html",
        "date": "2020 - 2023",
        "Technology": "HW + SW",
        "Completion": "Completed",
        "Group type": "Team (leader)"},
    "Rocket Team: Captain": { 
        "img": "imgs/rocketteam/2022launch.gif", 
        "link": "projects/spaceport-2022-season.html",
        "date": "2022",
        "Technology": "HW + SW",
        "Completion": "Completed",
        "Group type": "Team (leader)"},
    "Battery materials research": { 
        "img": "imgs/2023/02/image-49.png", 
        "link": "projects/battery-material-research.html",
        "date": "2021",
        "Technology": "Hardware",
        "Completion": "Completed",
        "Group type": "Team"},
    "VTVL Rocket Design": { 
        "img": "imgs/2023/02/image-54.png", 
        "link": "projects/hopper.html",
        "date": "2022",
        "Technology": "HW + SW",
        "Completion": "Completed",
        "Group type": "Team"},
    "L2 Rocket": { 
        "img": "imgs/2023/02/image-39.png", 
        "link": "projects/l2-rocket.html",
        "date": "2021",
        "Technology": "Hardware",
        "Completion": "Completed",
        "Group type": "Personal"},
    "L1 Rocket": { 
        "img": "imgs/2023/02/image-46.png", 
        "link": "projects/l1-rocket.html",
        "date": "2021",
        "Technology": "Hardware",
        "Completion": "Completed",
        "Group type": "Personal"},
    "Quadcopter": { 
        "img": "imgs/2023/02/image-14.png", 
        "link": "projects/quadcopter.html",
        "date": "2022",
        "Technology": "Hardware",
        "Completion": "Completed",
        "Group type": "Personal"},
    "Minesweeper Bot": { 
        "img": "imgs/minesweeper/minesweeper.gif", 
        "link": "projects/minesweeper.html",
        "date": "2022",
        "Technology": "Software",
        "Completion": "Completed",
        "Group type": "Personal"},
    "This Website": {
        "img": "imgs/website/looking.png",
        "link": "projects/website.html",
        "date": "2024",
        "Technology": "Software",
        "Completion": "Completed",
        "Group type": "Personal"},

    // WIP
    "Pterobot": {
        "img": "imgs/pterobot/stumble.gif",
        "link": "projects/pterobot.html",
        "date": "2024-",
        "Technology": "HW + SW",
        "Completion": "In Progress",
        "Group type": "Personal"},
    "Pixevo": {
        "img": "imgs/pixevo/pixevo.gif",
        "link": "projects/pixevo.html",
        "date": "2024-",
        "Technology": "Software",
        "Completion": "In Progress",
        "Group type": "Personal"},
    "Wolverine Claws": {
        "img": "imgs/claws/claws.gif",
        "link": "projects/claws.html",
        "date": "2024-",
        "Technology": "Hardware",
        "Completion": "In Progress",
        "Group type": "Personal"},
    "CmdTodo": {
        "img": "imgs/todo/todo.gif",
        "link": "projects/todo.html",
        "date": "2024-",
        "Technology": "Software",
        "Completion": "In Progress",
        "Group type": "Personal"},
    "Composite + Thermoplastic 3D Printer": {
        "img": "imgs/printer/cad.png",
        "link": "projects/printer.html",
        "date": "2024",
        "Technology": "HW + SW",
        "Completion": "In Progress",
        "Group type": "Team (leader)"},

    // concepts (only shown on bottom of 'completion' page) //
    "Control Vector Interface": {
        "img": "imgs/concept.png",
        "link": "projects/control-vector-interface.html",
        "date": "2024",
        "Completion": "Concept"},
    }

// add pixevo as ongoing project 
// add wolverine claws as ongoing project 
// add pterosaur as ongoing project 
// add todo list as ongoing project 
// add capstone printer as ongoing project 
// add ML as ongoing project 
// add select concept projects

function genYears(projects) {
    let years = new Set();
    Object.values(projects).forEach(project => {
        const date = project.date;
        lastFour = date.slice(-4)
        if (parseInt(lastFour, 10).toString() === lastFour) { // if the last 4 digits are all numbers (a year)
            years.add(Number(lastFour));
        } else {years.add(new Date().getFullYear()); // project hasn't completed, still current
        }
    });
    let sorted = Array.from(years).sort((a, b) => b - a).map(String);
    return sorted;
}

categories = {
    "Showcase": ["Sort by different category to view all projects"],
    "Completion": ["Completed", "In Progress", "Concept"],
    "Technology": ["HW + SW", "Software", "Hardware"],
    "Group type": ["Team (leader)", "Personal", "Team"],
    "Date": genYears(project_list),
}
// Allow for multiple categories
// Allow for no categories
// What should generate?

////////////////////////////////////////////////////////////////

function toggleCategory(contentId) {
    var content = document.getElementById(contentId);
    var arrow = content.previousElementSibling.querySelector('.arrow');
    
    content.classList.toggle('hidden');

    if (content.classList.contains('hidden')) {
        arrow.innerHTML = '&#9660;'; // Downward arrow when hidden
    } else {
        arrow.innerHTML = '&#9650;'; // Upward arrow when shown
    }
}

function generateProjectCategory(projects, category_type, category) {
    // const gridContainer = document.querySelector('#completedContent');
    // Replace with your grid container selector
    genHTML2 = '<!-- start of category -->'; // Clear existing content
    let names = Object.keys(projects);
    let showcase = false;
    if (category_type == "Showcase") {
        names = ["NASA Software Engineering", "Pixevo", "Lunar Lander Propulsion + VTVL Rocket Testing", "Pterobot", "Rocket Team: Propulsion Lead", "Self-Stabilizing Stick", "Wolverine Claws", "Composite + Thermoplastic 3D Printer"];
        showcase = true;
    }

    for (const name in names) {
        const project = projects[names[name]];

        if (category_type != 'Completion' && project.Completion == 'Concept') {
            continue;
        }

        const projectElement = `
        <a href="${project.link}" class="grid-item block transform transition duration-200 ease-in-out hover:scale-105 rounded-lg shadow-md overflow-hidden flex flex-col justify-between p-3 w-full h-64 border-2">
            <div class="flex items-center justify-center w-full flex-grow">
                <img src="${project.img}" class="object-cover max-h-32 mx-auto rounded-md">
            </div>
            <div class="mt-4">
                <span class="text-center text-base font-semibold">${names[name]}</span>
                <p class="text-sm text-gray-600">${project.date}</p>
            </div>
        </a>`;
        if (category_type == 'Date') {
            const date = project.date;
            lastFour = date.slice(-4)
            if (parseInt(lastFour, 10).toString() === lastFour) { // if the last 4 digits are all numbers (a year)
                if (lastFour === category) {
                    genHTML2 += projectElement;
                }
            }
            else if (category == new Date().getFullYear()) {
                genHTML2 += projectElement;
            }
        }
        else if (project[category_type] === category || showcase) {
            genHTML2 += projectElement;
        }
    };
    if (genHTML2 == '<!-- start of category -->') {
        genHTML2 += '<div class="text-center text-gray-600">Nothin here yet!</div>'; // fills empty categories
    }
    return genHTML2;
}

function generateProjects(category_type) {
    const showcase = category_type === 'Showcase';
    genHTML = '<!-- start of all categories-->';
    categories[category_type].forEach((category_name) => {
        if (category_name === 'Date') {
            return;
        }
        grid = generateProjectCategory(project_list, category_type, category_name)
        const category_html = ` 
            <div class="category-bar w-full cursor-pointer p-3 border-2 hover:bg-gray-300 rounded-lg flex justify-between items-center font-semibold" onclick="toggleCategory('${category_name}', this)">
                <span>${category_name}</span>
                <span class="arrow transform transition duration-500">&#9660;</span> <!-- Downward arrow -->
            </div>`
        full_grid = `<div id="${category_name}" class="grid grid-cols-4 py-3 gap-6 hidden"> 
                ${grid}
            </div>`;
        genHTML += category_html;
        genHTML += full_grid;
    });

    const box = document.getElementById('project_categories');
    box.innerHTML = genHTML;

    toggleCategory(categories[category_type][0]);
    
    const buttons = document.getElementById('buttons');

    
    buttons.innerHTML = `<span class="py-2 text-2xl text-blue-500 font-semibold mr-3">Sort Category: </span>`
    Object.keys(categories).forEach((category) => {
        const color = category === category_type ? 'green' : 'blue';
        const button = `<button id="${category}" onclick="generateProjects('${category}')" class="py-2 px-4 ms-3 bg-${color}-500 text-white font-semibold rounded-lg shadow-md hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">${category}</button>`;
        buttons.innerHTML += button;
    });
}

currentActiveSort = 'Completion';

function setActiveButton(buttonId) {
    if (currentActiveSort) {
        document.getElementById(currentActiveSort).classList.remove('active');
    }
    currentActiveSort = buttonId;
    document.getElementById(buttonId).classList.add('active');
}

generateProjects('Showcase')