//////////////////////////////
//    VARIABLES
//////////////////////////////

import { articles } from "/data.js"
const postContainer = document.querySelector('.posts-container');
const posts = postContainer.children;
const viewMoreBtn = document.querySelector('.view-more-btn');
const filteredArticles = articles.filter(article => article.title !== document.body.dataset.exclude);
const sortedArticles = filteredArticles.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return aDate < bDate
});
const nav = document.querySelector("nav");
let darkmode = JSON.parse(localStorage.getItem("darkmode")) || false;

//////////////////////////////
//    LOCAL STORAGE OR CHECK USER PREF FOR DARKMODE
//////////////////////////////

if (!localStorage.getItem("darkmode") && window.matchMedia("(prefers-color-scheme:dark)").matches) {
    darkmode = true;
}

if (darkmode) {
    document.body.classList.add("darkmode");
}

//////////////////////////////
//    RENDER RECENT POSTS
//////////////////////////////

postContainer.innerHTML = sortedArticles.map(article => {
    const date = new Date(`${article.date}`).toISOString().split("T")[0];
    return `
    <a href="${article.link}" target="_self">
    <article class="post">
    <img class="post-image" alt="post image" src="${article.image}" />
    <time class="post-date" date="${date}">${article.date}</time>
    <h2 class="post-title">${article.title}</h2>
    <p class="post-subtext">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
    After
    several months of learning in the Frontend Developer Career Path.</p>
    </article>
    </a>
    `}).join('');

//////////////////////////////
//    HIDE LAST POSTS
//////////////////////////////

hideLastPosts();

//////////////////////////////
//    FUNCTIONS
//////////////////////////////

function handleClick(e) {
    if (e.target.id === "toggle-darkmode-btn") {
        toggleDarkMode();
    } else if (e.target.id === "menu-btn") {
        nav.classList.toggle("show-menu");
    } else if (e.target.id === "view-more-btn") {
        toggleHiddenPosts();
    }
}

function toggleHiddenPosts() {
    for (let i = 3; i < filteredArticles.length; i++) {
        posts[i].classList.toggle("hidden");
    }

    viewMoreBtn.textContent = posts[3].classList.contains("hidden") ? "View More" : "View Less";
}

function hideLastPosts() {
    for (let i = 3; i < filteredArticles.length; i++) {
        posts[i].classList.add("hidden");
    }
}

function toggleDarkMode() {
    darkmode = !darkmode;
    document.body.classList.toggle("darkmode", darkmode);
    localStorage.setItem("darkmode", `${darkmode}`);
}

function handleWidthChange() {
    if (document.body.clientWidth > 1019 && nav.classList.contains("show-menu")) {
        nav.classList.remove("show-menu");
    }
}

//////////////////////////////
//    EVENT LISTENER
//////////////////////////////

document.addEventListener("click", handleClick);

window.addEventListener("resize", handleWidthChange)