const img = document.querySelectorAll("img");
const imgObserve = new IntersectionObserver((entry, observe) => {
    entry.forEach(element => {
        if(element.isIntersecting){
            console.log(element.target.dataset.src);
            const value = element.target.dataset.src;
            element.target.src = value;
            // element.target.style.transform = "scale(1)"
            element.target.classList.add("active");
            observe.unobserve(element.target);
        }
    })

}, {rootMargin: "50px"});
img.forEach(element => {
    imgObserve.observe(element);
});