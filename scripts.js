var projects = [
    {
        title: "Cookstagram",
        description: "A recipe-sharing social network application created with ReactJS/Redux frontend and Django Rest Framework backend",
        cover: "backgrounds/cookstagram.jpg",
        link: "https://cookstagram.recipes",
        github: "https://github.com/oqueuo/Cookstagram"
    },
    {
        title: "Cook Simple",
        description: "A minimalist recipe storage app created with Django and Django Templates",
        cover: "backgrounds/cook-simple.png",
        link: "https://cooksimple.life",
        github: "https://github.com/oqueuo/cook_simple"
    },
    {
        title: "Boollet Hell",
        description: "A Bullet Hell shooter game created in C++ for an in-class project",
        cover: "backgrounds/boollet-hell.png",
        link: "n/a",
        github: "n/a"
    }
]
function try_out_the_website(project) {
    if (project.link != "n/a") {
        return `
        To try it out, <a href="${project.link}" style="color: #ffd4be" target="_blank">Click here</a>
        `
    } else {
        return ''
    }
}

function more_info_on_my_github(project) {
    if (project.github != "n/a") {
        return `
        See code on <a href="${project.github}" style="color: #ffd4be" target="_blank">GitHub</a>
        `
    } else {
        return ''
    }
}

function render_projects(projects, projects_id) {
    let project_case = document.querySelector(projects_id);
    if (project_case) {
        if (projects instanceof Array) {
            for (let project of projects) {
                let template = `
                <div class="project-card-content" style="background-image: url(${project.cover});"></div>
                <div class="project-overlay">
                    ${project.description}<br><br>
                    ${try_out_the_website(project)} <br>
                    ${more_info_on_my_github(project)}
                </div>`;
                
                let project_card_container = document.createElement("div");
                project_card_container.className = "project-card-container";
                project_card_container.innerHTML = `
                <div class="project-card-gray">
                    ${template}
                </div>
                `
                project_case.append(project_card_container);
            }
        }
    }
}

function showHamburger() {
    document.getElementById("nav-pulldown").style.cssText = "opacity: 1; visibility: visible;";
}
function closeHamburger() {
    document.getElementById("nav-pulldown").style.cssText = "opacity: 0; visibility: hidden;";
}

const show_project_info = (el) => {

}