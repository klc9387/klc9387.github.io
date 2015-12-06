$(function() {

  $(".thumbnail").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    $(this).parent().remove();

  })

})