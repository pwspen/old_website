class MyContainer extends HTMLElement {
    connectedCallback() {
      fetch('/side-buttons.html')
        .then(response => response.text())
        .then(html => this.innerHTML = html);
    }
  }
customElements.define('side-buttons', MyContainer);

////////////////////////////////////////////////////////////////

project_list = { // tech type (hw, sw, both)
    "NASA Software Engineering": {
        "img": "imgs/nasa/nasa-headshot.JPG",
        "link": "projects/nasa-internship.html",
        "date": "2023",
        "Technology": "Both",
        "Completion": "Completed",
        "Group type": "Team"},
    "Lunar Lander Propulsion + VTVL Rocket Testing": { 
        "img": "imgs/2023/02/image-26.png", 
        "link": "projects/xl-1.html",
        "date": "2021",
        "Technology": "Hardware",
        "Completion": "Completed",
        "Group type": "Team"},
    "Self-Stabilizing Stick": { 
        "img": "imgs/2023/02/image-40.png", 
        "link": "projects/closed-loop-control-self-stabilizing-stick.html",
        "date": "2022",
        "Technology": "Both",
        "Completion": "Completed",
        "Group type": "Personal"},
    "Rocket Team: Propulsion Lead": { 
        "img": "imgs/2023/02/image-75.png", 
        "link": "projects/propulsion-lead.html",
        "date": "2020 - 2023",
        "Technology": "Both",
        "Completion": "Completed",
        "Group type": "Team (leader)"},
    "Rocket Team: Captain": { 
        "img": "imgs/2023/02/image-48.png", 
        "link": "projects/spaceport-2022-season.html",
        "date": "2022",
        "Technology": "Both",
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
        "Technology": "Both",
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
        "img": "imgs/2023/02/image-41.png", 
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
}

categories = {
    "Completion": ["Completed", "In Progress", "Concept"],
    "Technology": ["Both", "Software", "Hardware"],
    "Group type": ["Team (leader)", "Personal", "Team"]
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
    Object.keys(projects).forEach((name) => {
        const project = projects[name];
        if (project[category_type] === category) {
            // console.log(`found category (${category}) match: generating ${name}`)
            // Ensure each project has the required keys
            // const projectElement = `
            //     <a href="${project.link}" class="grid-item block transform transition duration-200 ease-in-out hover:scale-105 rounded-lg shadow-md border-2 overflow-hidden flex flex-col justify-between p-3 w-full h-64">
            //         <div class="flex flex-grow items-center justify-center w-full">
            //             <img src="${project.img}" class="object-cover h-32 mx-auto rounded-md">
            //         </div>
            //         <span class="text-center text-base font-semibold mt-4 w-full">${name}</span>
            //     </a>`;

            const projectElement = `
            <a href="${project.link}" class="grid-item block transform transition duration-200 ease-in-out hover:scale-105 rounded-lg shadow-md overflow-hidden flex flex-col justify-between p-3 w-full h-64 border-2">
                <div class="flex items-center justify-center w-full flex-grow">
                    <img src="${project.img}" class="object-cover max-h-32 mx-auto rounded-md">
                </div>
                <div class="mt-4">
                    <span class="text-center text-base font-semibold">${name}</span>
                    <p class="text-sm text-gray-600">${project.date}</p>
                </div>
            </a>`;
            genHTML2 += projectElement;
        }
    });
    if (genHTML2 == '<!-- start of category -->') {
        genHTML2 += '<div class="text-center text-gray-600">Nothin here yet!</div>';
    }
    return genHTML2;
}

function generateProjects(category_type) {
    genHTML = '<!-- start of all categories-->';
    categories[category_type].forEach((category_name) => {
        // console.log(`generating category: ${category_name}`)
        grid = generateProjectCategory(project_list, category_type, category_name)
        const category_html = ` 
            <div class="category-bar w-full cursor-pointer p-3 border-2 hover:bg-gray-300 rounded-lg flex justify-between items-center font-semibold" onclick="toggleCategory('${category_name}', this)">
                <span>${category_name}</span>
                <span class="arrow transform transition duration-500">&#9660;</span> <!-- Downward arrow -->
            </div>
            <div id="${category_name}" class="grid grid-cols-4 py-3 gap-6 hidden"> 
                ${grid}
            </div>`;
        genHTML += category_html;
    });
    const box = document.getElementById('project_categories');
    box.innerHTML = genHTML;

    toggleCategory(categories[category_type][0]);
    
    const buttons = document.getElementById('buttons');

    
    buttons.innerHTML = `<span class="py-2 text-2xl text-blue-500 font-semibold mr-3">Categories</span>`
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

generateProjects('Completion')