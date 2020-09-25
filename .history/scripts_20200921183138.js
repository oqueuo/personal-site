var projects = [
    {
        title: "Cookstagram",
        description: "",
        cover: "backgrounds/cookstagram.jpg",
        link: "https://cookstagram.recipes",
        github: "https://github.com/oqueuo/Cookstagram"
    },
    {
        title: "Cook Simple",
        description: "A minimalist recipe storage app for computers and mobile devices.",
        cover: "backgrounds/cook-simple.png",
        link: "https://cooksimple.life",
        github: "https://github.com/oqueuo/cook_simple"
    },
    {
        title: "Boollet Hell",
        description: "A Bullet Hell shooter game. Inspired by popular bullet hell shooters from Japan",
        cover: "backgrounds/boollet-hell.png",
        link: "n/a",
        github: "n/a"
    }
]
function try_out_the_website(project) {
    if (project.link != "n/a") {
        return `
        To try it out, <a href="${project.link}">Click here</a>
        `
    }
}

function more_info_on_my_github(project) {
    if (project.github != "n/a") {
        return `
        See code on <a href="${project.github}">GitHub</a>
        `
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
                    <a href="${project.link}">Click here</a> to try it out! <br><br>
                    ${try_out_the_website(project)}
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

const show_project_info = (el) => {

}