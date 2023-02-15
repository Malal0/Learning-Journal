//////////////////////////////
//    VARIABLES
//////////////////////////////
import { articles } from "/data.js"
const postContainer = document.querySelector('.posts-container');
const posts = postContainer.children;
const viewMoreBtn = document.querySelector('.view-more-btn');
const exclude = document.body.dataset.exclude;
const filteredArticles = articles.filter(article => article.title !== exclude);
let nums = randomNonrepeatingNumbers(6);

//////////////////////////////
//    FUNCTIONS
//////////////////////////////
function handleClick() {
    toggleHiddenPosts();
}

function toggleHiddenPosts() {
    hiddenPosts.forEach(key => key.classList.toggle("hidden"));
    viewMoreBtn.textContent = hiddenPosts[0].classList.contains("hidden") ? "View More" : "View Less";
}

function randomNonrepeatingNumbers(length) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * 6);
        arr.includes(randomNum) ? i-- : arr.push(randomNum);
    }

    return arr;
}

function hideSomePosts() {
    for (let i = 3; i < randomizedArticles.length; i++) {
        console.log(posts[i])
        posts[i].classList.add("hidden");
    }
}


//////////////////////////////
//    EVENT LISTENER
//////////////////////////////

if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", handleClick);
}

//////////////////////////////
//    RENDER ARTICLES
//////////////////////////////

// const randomizedArticles = nums.map(num => filteredArticles[num]);
const randomizedArticles = [];
for (let i = 0; i < filteredArticles.length; i++) {
    nums[i] < 7 ? randomizedArticles.push(filteredArticles[nums[i]]) : randomizedArticles.push(filteredArticles[6])
}

postContainer.innerHTML = randomizedArticles.map(article => {
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
//    HIDE SOME ARTICLES
//////////////////////////////

hideSomePosts();
const hiddenPosts = document.querySelectorAll('a[class="hidden"]');