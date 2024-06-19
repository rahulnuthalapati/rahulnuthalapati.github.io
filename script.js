let navbar = document.getElementById("navbar");
let navbarHeight = navbar.offsetHeight;
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

document.getElementById("menu").addEventListener("click", function(event) {
    if (this.textContent === '+') {
        this.textContent = '×';
        document.getElementById("menu-overlay").style.display = "block";
        document.getElementById("menu-overlay").style.marginTop = navbarHeight + "px";
        window.onscroll = function () { window.scrollTo(0, 0); };

    } else {
        this.textContent = '+';
        document.getElementById("menu-overlay").style.display = "none";
        window.onscroll = function(){};
    }
    event.stopPropagation();
});
