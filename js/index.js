$(document).ready(function() {
  function hoverImg() {
    $('.hover-img').mouseenter(function() {
      this.src = $(this).data('hover');
    });
    
    $('.hover-img').on('mouseleave', function() {
      this.src = $(this).data('origin');
    });
  }

  hoverImg();
});
