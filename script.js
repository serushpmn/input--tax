// document.getElementById("submit").addEventListener("click", function () {
//   let input_value = document.getElementById("name").value;
//   let user_name = document.getElementById("user_name");
//   user_name.innerHTML = input_value;
// });

let input_value = document.getElementById("name");
input_value.onkeyup = function () {
  if (input_value.value != "") {
    let capital_name =
      input_value.value.charAt(0).toUpperCase() + input_value.value.slice(1);
    document.getElementById("user_name").innerHTML = capital_name + ".";
  } else {
    document.getElementById("user_name").innerHTML = "USER";
  }
};
let btn_lg = document.querySelector("btn-lg");
let btn_md = document.querySelector("btn-md");
let btn_sm = document.querySelector("btn-sm");
let modal = document.querySelector("modal");
let output = document.querySelector("output");

btn_lg.addEventListener("click", function () {
  console.log("clickd");
  modal.style.display == "block";
});
