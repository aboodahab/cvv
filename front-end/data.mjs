const names = document.querySelector(".name");
const form = document.querySelector("form");
const work = document.querySelector(".work");
const num = document.querySelector(".num");
const email = document.querySelector(".email");
const city = document.querySelector(".city");
const link = document.querySelector(".link");
const imgInp = document.querySelector(".img");
const blah = document.querySelector("#blah");
const socialMedia = document.querySelector(".social");
const textarea = document.querySelector("textarea");
const imageBtn = document.querySelector(".btn");
const education1 = document.querySelector(".ed1");
const education2 = document.querySelector(".ed2");
const today = new Date().toISOString().split("T")[0];
const date1 = document.querySelector(".dat");
const date2 = document.querySelector(".date");
const onError = document.querySelector(".error");
const h1 = document.querySelector(".hs1");
const logo = document.querySelector(".logo");
const location2 = document.querySelector(".city2");
const number = document.querySelector(".number");
const email2 = document.querySelector(".email2");
const name3 = document.querySelector(".name3");
const num3 = document.querySelector(".num3");
const ref = document.querySelector(".ref");
const ref2 = document.querySelector(".ref2");
const summaryText = document.querySelector(".summary-text");
const unversityText = document.querySelector(".universty-text");
const workText = document.querySelector(".workText");
const specialtyText = document.querySelector(".specialty-text");
const nameText = document.querySelector(".nameText");
const date1Text = document.querySelector(".date1-text");
const date2Text = document.querySelector(".date2-text");
const revlationText = document.querySelector(".revlationText4");
const numberText4 = document.querySelector(".numberText4");
const nameText4 = document.querySelector(".nameText4");

export {
  blah,
  form,
  ref2,
  nameText4,
  revlationText,
  numberText4,
  nameText,
  workText,
  specialtyText,
  date1Text,
  date2Text,
  names,
  work,
  num,
  email,
  city,
  link,
  imgInp,
  socialMedia,
  textarea,
  imageBtn,
  education1,
  education2,
  today,
  date1,
  date2,
  onError,
  h1,
  logo,
  location2,
  number,
  email2,
  name3,
  num3,
  ref,
  summaryText,
  unversityText,
};
//document.getElementById("myForm").addEventListener("submit", function (event) {
  //   event.preventDefault(); // Prevent the default form submission
  
  //   const formData = new FormData(this); // Create FormData object from the form
  
  //   fetch(this.action, {
  //     method: this.method,
  //     body: formData,
  //   })
  //     .then((response) => response.json()) // or response.text() based on the server response
  //     .then((data) => {
  //       console.log("Success:", data);
  //       // Optionally, you can handle the response here, update the UI, etc.
  //       // For example, you might want to update the UI to reflect the form submission
  //       // data could be used to update form elements or display messages
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // });