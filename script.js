document.addEventListener("DOMContentLoaded", function() {
    const el = document.getElementById("changeColor-btn");
    const colorbox = document.getElementById("color-box");

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    el.addEventListener("click", function() {
        colorbox.style.backgroundColor = getRandomColor();
    });
});