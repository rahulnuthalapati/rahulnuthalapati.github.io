let navbar = document.getElementById("navbar");
window.onscroll = function() {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.style.backgroundColor = "rgba(256, 256, 256, 0.95)";
        navbar.style.position = "sticky";
        navbar.style.top = "0";
        navbar.querySelector("h1").style.fontWeight = "600";
    }
    else
    {
        navbar.style.backgroundColor = "rgba(256, 256, 256, 1)";
        navbar.style.position = "";
        navbar.style.top = "";
        navbar.querySelector("h1").style.fontWeight = "";
    }
};

document.getElementById("menu").addEventListener("click", function() {
    this.textContent = "+";
    event.stopPropagation();
});

document.addEventListener('click', function() {
    var menuButton = document.getElementById('menu');
    if (menuButton.textContent === '+') {
        menuButton.textContent = '=';
    }
});
