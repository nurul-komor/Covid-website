const menuBtn = document.querySelector(".menu-bar")

$(document).ready(function() {
    $(".menu-btn").click(function() {
        $('#sliderID').addClass("show")
    });
})
$(document).ready(function() {
    $(".cancel-btn").click(function() {
        $('#sliderID').removeClass("show")
        $('#sliderID').addClass("hide")
    });
})