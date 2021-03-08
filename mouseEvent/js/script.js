//Click Event-------------------
$(document).ready(function () {
  $("#box").click(function () {
    $(this).addClass("bg-warning");
    $(this).removeClass("bg-info");
    $(this).removeClass("bg-dark");
    $(this).remove("bg-secondary");
    $(this).removeClass("bg-success");
  });
  //Double Click Event-------------------
  $("#box").dblclick(function () {
    $(this).addClass("bg-info");
    $(this).removeClass("bg-warning");
    $(this).removeClass("bg-dark");
    $(this).remove("bg-secondary");
    $(this).removeClass("bg-success");
  });
  $("#box").contextmenu(function () {
    $(this).removeClass("bg-info");
    $(this).removeClass("bg-warning");
    $(this).addClass("bg-dark");
    $(this).remove("bg-secondary");
    $(this).removeClass("bg-success");
  });
  $("#box").mouseenter(function () {
    $(this).removeClass("bg-info");
    $(this).removeClass("bg-warning");
    $(this).removeClass("bg-dark");
    $(this).addClass("bg-success");
    $(this).remove("bg-secondary");
  });
  $("#box").mouseleave(function () {
    $(this).removeClass("bg-info");
    $(this).removeClass("bg-warning");
    $(this).removeClass("bg-dark");
    $(this).removeClass("bg-success");
    $(this).addClass("bg-secondary");
  });
});
