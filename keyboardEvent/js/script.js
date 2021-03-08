$(document).ready(function () {
  alert("Press any key");
  //Keypress event---------------------
  // $("body").keypress(function () {
  //   $(this).css("background-color", "skyblue");
  // });

  //Keydown event---------------------
  $("body").keydown(function () {
    $(this).css("background-color", "green");
  });
  //Keyup event---------------------
  $("body").keyup(function () {
    $(this).css("background-color", "blue");
  });
});
