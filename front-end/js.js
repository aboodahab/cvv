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
const date1 = document.querySelector(".dat");
const date2 = document.querySelector(".date");
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
    console.log("error");
    return;
  }
  fetch("http://localhost:3000/test", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      socialMedia,
      textarea,
      link,
      city,
      num,
      work,
      names,
      email,
      education2,
      education1,
      date2,
      date1,
    }),
  });
}
imageBtn.addEventListener("click", onClickBtn);
