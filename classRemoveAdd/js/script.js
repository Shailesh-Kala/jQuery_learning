$(document).ready(function () {
  $("#red").click(function () {
    $("#box").removeClass("bg-info");
    $("#box").removeClass("bg-success");
    $("#box").removeClass("bg-warning");
    $("#box").addClass("bg-danger");
  });
  $("#yellow").click(function () {
    $("#box").removeClass("bg-info");
    $("#box").removeClass("bg-success");
    $("#box").removeClass("bg-danger");
    $("#box").addClass("bg-warning");
  });
  $("#green").click(function () {
    $("#box").removeClass("bg-info");
    $("#box").removeClass("bg-warning");
    $("#box").removeClass("bg-danger");
    $("#box").addClass("bg-success");
  });
  $("#toggle").click(function () {
    $("#box").toggleClass("bg-info");
    $("#box").removeClass("bg-warning");
    $("#box").removeClass("bg-danger");
    $("#box").removeClass("bg-success");
  });
});
