$(document).ready(function () {
    function addColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    }

    $(".circle").on("mouseenter", function () {
        $(this).css('background-color', addColor());
        $(this).css('box-shadow', "0 0 60px" + addColor());
        $(this).css('z-index', "105");
        console.log("Mouse Enter");
    });

    $(".circle").on("mouseleave", function () {
        $(this).css('box-shadow', "none");
        $(this).css('z-index', "0");
        console.log("Mouse Leave");
    });

    $("#resetbutton").click(function() {
        console.log('clicked');
        $('.circle').css('background-color', "black");
    });
});

