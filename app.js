const app = {};

app.smoothScroll = () => {
    console.log("working!");
    var $root = $('html, body');

    $('.fa-chevron-down').click(function () {
        var href = $(this).parent().attr('href');

        $root.animate({
            scrollTop: $(href).offset().top
        }, 800, function () {
            window.location.hash = href;
        });

        return false;
    });

    $('#menuBar a').click(function () {
        var href = $(this).attr('href');

        $root.animate({
            scrollTop: $(href).offset().top
        }, 800, function () {
            window.location.hash = href;
        });

        return false;
    });
};






app.scrollReveal = () => {
    window.sr = ScrollReveal();
    sr.reveal('#portrait img', { duration: 800 });
    sr.reveal('#aboutMeText p', { duration: 800 });
    sr.reveal('#skills .svgIcon', { duration: 800 }, 100);
    sr.reveal('.project', { duration: 800 }, 500);
}

app.init = () => {
    app.scrollReveal();
    app.smoothScroll();

}

$(function () {
    app.init();
});