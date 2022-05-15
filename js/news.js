$(document).scroll(function() {
    if ($('.post-recenlty').offset().top + $('.post-recenlty').height() >= $('#footer').offset().top - 10)
        $('.post-recenlty').addClass('scroll');

    if ($(document).scrollTop() + $('.post-recenlty').height() < $('#footer').offset().top)
        $('.post-recenlty').removeClass('scroll');
});