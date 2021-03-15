document.querySelector(".miniature").addEventListener("click", function(e) {
    e.target.classList.toggle("big");
})

document.querySelector(".navbar-brand").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".navbar-nav").classList.toggle("hide");
    document.querySelector(".form").classList.toggle("hide");
})