// document.getElementById("submit").addEventListener("click", function () {
//   let input_value = document.getElementById("name").value;
//   let user_name = document.getElementById("user_name");
//   user_name.innerHTML = input_value;
// });

// let input_value = document.getElementById("name");
// input_value.onkeyup = function () {
//   if (input_value.value != "") {
//     let capital_name =
//       input_value.value.charAt(0).toUpperCase() + input_value.value.slice(1);
//     document.getElementById("user_name").innerHTML = capital_name + ".";
//   } else {
//     document.getElementById("user_name").innerHTML = "USER";
//   }
// };
// let btn_lg = document.querySelector("btn-lg");
// let btn_md = document.querySelector("btn-md");
// let btn_sm = document.querySelector("btn-sm");
// let modal = document.querySelector("modal");
// let output = document.querySelector("output");

// btn_lg.addEventListener("click", function () {
//   console.log("clickd");
//   modal.style.display == "block";
// });

let firstName = document.getElementById("first_name");
let lasttName = document.getElementById("last_name");
let age = document.getElementById("age");
let place = document.getElementById("location");
let career = document.getElementById("career");

// let full_name = firstName.value + " " + lasttName.value;
// firstName.onkeyup = function () {
//   console.log(firstName.value);
// };

function capitalize(word) {
  const str = document.getElementById(word).value;
  const lower = str.toLowerCase();
  let final = str.charAt(0).toUpperCase() + lower.slice(1);
  let test = final.onkeyup;
  return test;
}
console.log(capitalize("first_name"));
