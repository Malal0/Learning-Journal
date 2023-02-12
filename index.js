//////////////////////////////
//    VARIABLES
//////////////////////////////
const hiddenPosts = document.querySelectorAll('a[class="hidden"]');
const viewMoreBtn = document.querySelector('.view-more-btn');

//////////////////////////////
//    FUNCTIONS
//////////////////////////////
function handleClick(e) {
    if (e.target.classList.contains("view-more-btn")) {
        toggleHiddenPosts();
    }
}

function toggleHiddenPosts() {
    hiddenPosts.forEach(post => post.classList.toggle("hidden"));
    viewMoreBtn.textContent = hiddenPosts[0].classList.contains("hidden") ? "View More" : "View Less";
}

//////////////////////////////
//    EVENT LISTENER
//////////////////////////////
addEventListener("click", handleClick);