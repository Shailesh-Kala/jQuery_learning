$(document).ready(function () {
  //scroll event------------
  $(window).scroll(function () {
    $("body").css("background-color", "skyblue");
  });
  $("#box").scroll(function () {
    $("body").css("background-color", "blue");
  });
  //resizeing  event----------
  $(window).resize(function () {
    alert("Your are resizing your documents");
  });
});
