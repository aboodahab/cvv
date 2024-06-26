const names = document.querySelector(".name");
const work = document.querySelector(".work");
const num = document.querySelector(".num");
const email = document.querySelector(".email");
const city = document.querySelector(".city");
const link = document.querySelector(".link");
const img = document.querySelector(".img");
const socialMedia = document.querySelector(".social");
const textarea = document.querySelector("textarea");
const imageBtn = document.querySelector(".btn");
const education1 = document.querySelector(".ed1");
const education2 = document.querySelector(".ed2");
const today = new Date().toISOString().split("T")[0];
const date1 = document.querySelector(".dat").setAttribute("max", today);
const date2 = document.querySelector(".date").setAttribute("max", today);

function onClickBtn() {
  if (
    names.value === "" ||
    work.value === "" ||
    num.value === "" ||
    email.value === "" ||
    city.value === "" ||
    link.value === "" ||
    socialMedia.value === "" ||
    textarea.value === "" ||
    education1.value === "" ||
    education2.value === "" ||
    date1.value === "" ||
    date2.value === ""
  ) {
    console.log("error: One or more fields are empty");
    return;
  }

  fetch("http://localhost:3000/test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      socialMedia: socialMedia.value,
      textarea: textarea.value,
      link: link.value,
      city: city.value,
      num: num.value,
      work: work.value,
      names: names.value,
      email: email.value,
      education2: education2.value,
      education1: education1.value,
      date2: date2.value,
      date1: date1.value,
    }),
  });
}

imageBtn.addEventListener("click", onClickBtn);
