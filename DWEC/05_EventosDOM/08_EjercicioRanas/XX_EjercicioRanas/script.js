let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
   
    images[i].addEventListener("error", function() {
        this.src = "img/imgerror.png";

    });

    images[i].oncontextmenu = function() {
        return false;
    }

    images[i].addEventListener("error", function() {
        this.style.visibility = "hidden";
    });
}

