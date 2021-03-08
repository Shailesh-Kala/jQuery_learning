$(document).ready(function () {
  let text = $("#div").text(); // for text
  alert(text);

  let code = $("body").html(); //for HTML
  console.log(code);

  let attr = $("#div").attr("class"); //for attribute
  console.log(attr);
});
