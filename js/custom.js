$(function() {
  if ($(window).width() > 1440) {
    $(".sub-header-outline").addClass("col-auto");
    $(".sub-header-outline").removeClass("col");
  }
});

$(window).resize(function() {
  if ($(window).width() <= 1440) {
    $(".sub-header-outline").addClass("col");
    $(".sub-header-outline").removeClass("col-auto");
  }
});

$(window).resize(function() {
  if ($(window).width() > 1440) {
    $(".sub-header-outline").addClass("col-auto");
    $(".sub-header-outline").removeClass("col");
  }
});
