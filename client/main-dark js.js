let mainText = document.querySelector("main-dark.main-item")
window.addEventListener('scroll', function()
{
    let value = window.scrollY;

    if(value<300) {
        mainText.style.animation = "slide 2s ease-out forwards";

    }
    else{
        mainText.style.animation = "disapper 1s ease-out"
    }
});