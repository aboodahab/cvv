import {
  numberText4,
  nameText4,
  revlationText,
  names,
  work,
  num,
  email,
  city,
  link,
  img,
  socialMedia,
  textarea,
  imageBtn,
  date1Text,
  date2Text,
} from "./data.mjs";
import {
  ref2,
  workText,
  nameText,
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
  specialtyText,
} from "./data.mjs";

date1.setAttribute("max", today);
date2.setAttribute("max", today);

function onClickBtn(e) {
  e.preventDefault();
  console.log(ref2.value);

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
  let datt1 = dat1[1].slice(1);
  let datt2 = dat1[1].slice(1);
  if (datt1 > datt2) {
    onError.style.display = "flex";
    onError.textContent = "Error: One or more fields are emffffpty";
    setTimeout(() => {
      onError.style.display = "none";
      onError.textContent = "";
    }, 3000);
    console.log("ee");
    return;
  }
  if (datt1[1] > datt2[1]) {
    onError.style.display = "flex";
    onError.textContent = "Error: One or more fields are emffffpty";
    setTimeout(() => {
      onError.style.display = "none";
      onError.textContent = "";
    }, 3000);
    console.log("ee");
    return;
  }

  if (datt1[2] > datt2[2]) {
    onError.style.display = "flex";
    onError.textContent = "Error: One or more fields are emffffpty";
    setTimeout(() => {
      onError.style.display = "none";
      onError.textContent = "";
    }, 3000);
    console.log("ee");
    return;
  }

  if (email.value.endsWith("@gmail.com")) {
    nameText4.textContent = `${name3.value}`;
    numberText4.textContent = `${num3.value}`;
    revlationText.textContent = `${date1.value}`;
    date1Text.textContent = `${date1.value}`;
    date2Text.textContent = `${date2.value}`;
    specialtyText.textContent = `${education1.value}`;
    unversityText.textContent = `${education2.value}`;
    summaryText.textContent = `${textarea.value}`;
    nameText.textContent = `${names.value}`;
    workText.textContent = `${work.value}`;
    h1.style.display = "inline";
    logo.src = `logo-${socialMedia.value}.svg`;
    location2.textContent = `${city.value}`;
    number.textContent = `${num.value}`;
    email2.textContent = `${email.value}`;
    onError.style.display = "none";
    fetchFn();
    return;
  }

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
function fetchFn() {
  fetch("http://localhost:3000/test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      socialMedia: socialMedia.value,
      textarea: textarea.value,
      number22: num3.value,
      name2: name3.value,
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

socialMedia.addEventListener("change", changeData);
imageBtn.addEventListener("click", onClickBtn);
