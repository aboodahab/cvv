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
const date1 = document.querySelector(".dat");
const date2 = document.querySelector(".date");
const onError = document.querySelector(".error");
date1.setAttribute("max", today);
date2.setAttribute("max", today);
function onClickBtn() {
  let dat1 = date1.value.split("-");
  let dat2 = date2.value.split("-");
  console.log(dat1, dat2);
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
    onError.style.display = "flex";
    onError.textContent = "Error: One or more fields are empty";
    setTimeout(() => {
      onError.textContent = "";
      onError.style.display = "none";
    }, 4500);
    console.log("error: One or more fields are empty");
    return;
  }
  if (dat1[0] > dat2[0] || dat1[1] > dat2[1] || dat1[2] >= dat2[2]) {
    onError.style.display = "flex";
    onError.textContent = "Error: One or more fields are emffffpty";
    console.log("ee")
    return
  }
  if (email.value.endsWith("@gmail.com")) {
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
  onError.style.display = "flex";
  onError.textContent = "Error: please Add Google Gmail";
  setTimeout(() => {
    onError.textContent = "";
    onError.style.display = "none";
  }, 4500);
}
function changeData() {
  link.setAttribute("placeholder", `${socialMedia.value} Link`);
  console.log("changed");
}
socialMedia.addEventListener("change", changeData);
imageBtn.addEventListener("click", onClickBtn);
