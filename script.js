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
// ======== Values ======
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let age = document.getElementById("age");
let place = document.getElementById("location");
let career = document.getElementById("career");

// ==== inner HTML`=======`
let full_name = document.getElementById("full_name");
let full_age = document.getElementById("full_age");
let full_location = document.getElementById("full_location");
let full_career = document.getElementById("full_career");

function capitalize(word) {
  const str = word.value;
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}
let full_name_value = firstName + " " + lastName;

firstName.onkeyup = function () {
  full_name.innerHTML = capitalize(firstName);
  document.querySelector(".bio-info").innerHTML = `Hello, i'm <br> ${capitalize(
    firstName
  )}`;
};
lastName.onkeyup = function () {
  full_name.innerHTML = capitalize(firstName) + " " + capitalize(lastName);
};
age.onkeyup = function () {
  if (age.onkeyup === "") {
    full_age.innerHTML = " ";
  } else {
    full_age.innerHTML = capitalize(age) + " Years";
  }
};
place.onkeyup = function () {
  full_location.innerHTML = capitalize(place);
};
career.onkeyup = function () {
  full_career.innerHTML = capitalize(career);
};
let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let modal_content = `
<div class="profile">
        <p class="title">Profile</p>
        <p id="full_career">${capitalize(career)}</p>
      </div>
      <div class="details">
        <h2>Details</h2>
        <span>Name:</span>
        <h1 id="full_name">
          ${capitalize(firstName)}  ${capitalize(lastName)}
        </h1>
        <span>age:</span>
        <h3 id="full_age">${capitalize(age)} years</h3>
        <span>Location:</span>
        <h3 id="full_location">${capitalize(place)}</h3>
      </div>
      <div class="about">
        <h2>About me</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius iure ad
          tempore commodi quidem. Culpa nihil ea, dolorem repudiandae ratione
          expedita quis sapiente facilis neque architecto doloremque adipisci
          rerum aut? Necessitatibus autem eos labore deserunt consequuntur
        </p>
      </div>
      <div class="biography">
        <img src="profile-img.jpg" alt="" />
        <p class="bio-info">
          Hello, i'm <br />
          ${capitalize(firstName)}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sit.
          Praesentium, quae perferendis. Aperiam dolorum dolore eius.
        </p>
      </div>
`;

  document.querySelector(".modal").innerHTML = modal_content;
  // console.log(modal_content);
});
let modal = document.querySelector(".modal");

document.querySelector(".btn-lg").addEventListener("click", () => {
  modal.classList.toggle("modal-lg");
  document.getElementById("main").classList.toggle("isblured");
});

document.querySelector(".btn-md").addEventListener("click", () => {
  modal.classList.toggle("modal-md");
  document.getElementById("main").classList.toggle("isblured");
});
document.querySelector(".btn-sm").addEventListener("click", () => {
  modal.classList.toggle("modal-sm");
  document.getElementById("main").classList.toggle("isblured");
});
