$(document).ready(function(){
    var height = $(".landing").height();
    $(window).scroll(function () {
        var height = $(".landing").height();
        if ($(window).scrollTop() > height) {
            $(".nav").addClass("addNav");
        }
        else{
            $(".nav").removeClass("addNav");
        }
    })

    document.getElementsByTagName("BODY")[0].onresize = function() {detectResize()};

    function detectResize() {
        var height = $(".landing").height();
        if ($(window).scrollTop() > height) {
            $(".nav").addClass("addNav");
        }
        else{
            $(".nav").removeClass("addNav");
        }
}
});