// Apply grid on load
$(document).ready(function(){
  var thisWidth = $(window).width();
  if (thisWidth > 875) {
    $(".cards").removeClass().addClass("cards small-block-grid-3");
  } else if (thisWidth > 650) {
    $(".cards").removeClass().addClass("cards small-block-grid-2");
  } else {
    $(".cards").addClass("small-block-grid-1");
  }
});

// Apply grid on resize
$(window).resize(function() {
  var thisWidth = $(window).width();
  if (thisWidth > 875) {
    $(".cards").removeClass().addClass("cards small-block-grid-3");
  } else if (thisWidth > 650) {
    $(".cards").removeClass().addClass("cards small-block-grid-2");
  } else {
    $(".cards").removeClass().addClass("cards small-block-grid-1");
  }
});