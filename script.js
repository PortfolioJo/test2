// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-visible");
        }
    });
});

document.querySelectorAll(".fade-section")
    .forEach(el => observer.observe(el));