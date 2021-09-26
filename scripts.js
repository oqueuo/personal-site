var projects = [
    {
        title: "Common Crawl Search Engine",
        description: "A search engine that queries Common Crawl's web-scraping data. I learned how to write a backend API in Java, upload data to AWS ElasticSearch, and deploy on AWS Elastic Beanstalk.",
        cover: "backgrounds/CommonCrawl.png",
        demo: "https://www.youtube.com/watch?v=CHQksGVgDz4",
        link: "n/a",
        github: "n/a"
    },
    {
        title: "Cookstagram",
        description: "A recipe-sharing social network application created with ReactJS/Redux frontend and Django Rest Framework backend",
        cover: "backgrounds/cookstagram.jpg",
        link: "https://cookstagram.live",
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
    },
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

function show_video_demo(project) {
    if ('demo' in project) {
        return `
        Video Demo: <a href="${project.demo}" style="color: #ffd4be" target="_blank">YouTube Link</a>`
    } else {
        return ``
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
                    ${show_video_demo(project)}
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





var experiences = [
    {
        company: "Vectorworks",
        title: "Software Engineer Intern",
        date: "June 2021 - August 2021",
        summary: "● Overhauled the content translation system in Django: decreased upload times by 85%, automated task assignments/notifications, and implemented pre-production previews<br>\
                  ● Created memory analysis tools using Python libraries (Pympler, objgraph) to diagnose and fix memory leaks on production servers.<br>\
                  ● Developed the main accounts page of the single sign-on system using React<br>\
                  ● Revamped the software release preparation system with MySQL and automated Slack messages.",
        logo: "backgrounds/vectorworks_small.png"
    },
]

function render_experiences(experiences, experience_id) {
    let experience_case = document.querySelector(experience_id);
    if (experience_case) {
        if (experiences instanceof Array) {
            for (let experience of experiences) {
                let template = `
                <div class="experience-logo" style="background-image: url(${experience.logo});"></div>
                <div class="experience-info">
                    <h1 class="experience-company">
                        ${experience.company}</h1>
                    <h2 class="experience-title">
                        ${experience.title}</h2>
                    <h3 class="experience-date">
                        ${experience.date}</h3>
                    <p class="experience-summary">
                        ${experience.summary}</p>
                </div>`;
                
                let experience_card_container = document.createElement("div");
                experience_card_container.className = "experience-card-container";
                experience_card_container.innerHTML = `${template}`
                experience_case.append(experience_card_container);
            }
        }
    }
}