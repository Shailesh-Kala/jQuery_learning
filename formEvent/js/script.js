$(document).ready(function () {
  //Focus(focusin) event------------
  $("#name").focusin(function () {
    $(this).css("background-color", "skyblue");
  });
  //blur(focusout)  event----------
  $("#name").focusout(function () {
    $(this).css("background-color", "blue");
  });
  //Select event----------------
  $("#name, #number").select(function () {
    $(this).css("background-color", "orange");
  });

  $("#number").focusin(function () {
    $(this).css("background-color", "skyblue");
  });
  //blur(focusout)  event----------
  $("#number").focusout(function () {
    $(this).css("background-color", "blue");
  });
  // //Select event----------------
  // $("#number").select(function () {
  //   $(this).css("background-color", "orange");
  // });

  $("#submit-form").submit(function () {
    let name = $("#name").val();
    let number = $("#number").val();
    console.log(`Name: ${name}
  Phone Number: ${number}`);

    alert("Your form is submitted");
  });
});
