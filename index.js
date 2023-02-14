//////////////////////////////
//    VARIABLES
//////////////////////////////
import { articles } from "/data.js"
const postContainer = document.querySelector('.posts-container');
const posts = postContainer.children;
const viewMoreBtn = document.querySelector('.view-more-btn');
let nums = randomNonrepeatingNumbers(3);
// const hiddenPosts = document.querySelectorAll('a[class="hidden"]');

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
    for (let i = 0; i < nums.length; i++) {
        // posts[nums[i]].classList.add("hidden");
        posts[nums[i]].classList.add("hidden");
        console.log(posts[nums[i]].classList);
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
postContainer.innerHTML = articles.map(article => `
<a href="${article.link}" target="_self">
<article class="post">
    <img class="post-image" alt="post image" src="images/${article.image}" />
    <time class="post-date" date="2023-02-23">february 23, 2023</time>
    <h2 class="post-title">${article.title}</h2>
    <p class="post-subtext">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
        After
        several months of learning in the Frontend Developer Career Path.</p>
</article>
</a>
`).join('');

//////////////////////////////
//    HIDE SOME ARTICLES
//////////////////////////////

// console.log(posts);
hideSomePosts();
