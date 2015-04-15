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

// On info icon click, reveal .user-bio
$(".user-name img").click(function(){
  if ($(this).hasClass("active")) {
    $(this).parent().siblings(".event").animate({ top:"-250px" }, 700);
    $(this).parent().siblings('.card-buttons').animate({ top:"-250px" }, 700);
    $(this).removeClass("active");
  } else {
    $(this).parent().siblings(".event").animate({ top:"0px" }, 700);
    $(this).parent().siblings('.card-buttons').animate({ top:"0px" }, 700);
    $(this).addClass("active");
  }
});
