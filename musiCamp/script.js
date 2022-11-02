$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(document).ready(function () { 
    $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
    });
  });