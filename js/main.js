function NavBarFunction(thisNav) {
    thisNav.classList.toggle("active");
    $("#nav").toggleClass("active");
  }
  $(window).click(function () {
    $(".nav-navbar-resContent").removeClass("active");
    $(".Xicon").removeClass("active");
    $("#nav").removeClass("active");
});
  $(".nav-navbar-res").click(function (event) {
    event.stopPropagation();
  });