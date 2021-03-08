$(document).ready(function () {
  $("#show").click(function () {
    $(".more").show();
    $(this).hide();
    $(".hide").show();
  });
  $(".hide").click(function () {
    $(this).hide();
    $(".more").hide();
    $("#show").show();
  });
});
