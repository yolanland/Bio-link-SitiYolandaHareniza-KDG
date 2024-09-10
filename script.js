document.addEventListener("scroll", (e) => {
    
    document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY}px)`;
});