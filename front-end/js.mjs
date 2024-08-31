import {
  names,
  work,
  num,
  email,
  city,
  link,
  socialMedia,
  textarea,
  imageBtn,
  important,
  form,
  date1Text,
  date2Text,
  blah,
  num3,
  name3,
} from "./data.mjs";

import {
  doubleCheck,
  changeImg,
  clearAllData,
  checking,
  downloadFn,
  changeData,
  fetchFn,
} from "./functions.mjs";
import {
  mam,
  btnDownload,
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
  summaryText,
  unversityText,
  specialtyText,
} from "./data.mjs";

date1.setAttribute("max", today);
date2.setAttribute("max", today);

function onClickBtn(e) {
  let dat1 = date1.value.split("-");
  let dat2 = date2.value.split("-");

  console.log(dat1[1], dat2);
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
    e.preventDefault();
    onError.style.display = "flex";
    onError.textContent = "Error: One or more fields are empty";
    setTimeout(() => {
      onError.textContent = "";
      onError.style.display = "none";
    }, 4500);
    console.log("error: One or more fields are empty");
    return;
  }

  if (dat1[0] > dat2[0]) {
    e.preventDefault();
    onError.style.display = "flex";
    onError.textContent = "Error: One or more fields are emffffpty";
    setTimeout(() => {
      onError.style.display = "none";
      onError.textContent = "";
    }, 3000);
    console.log("ee");
    return;
  }

  if (dat1[1] > dat2[1]) {
    e.preventDefault();
    onError.style.display = "flex";
    onError.textContent = "Error: please add the correct universty date";
    setTimeout(() => {
      onError.style.display = "none";
      onError.textContent = "";
    }, 3000);
    console.log("ee");
    return;
  }

  if (dat1[2] > dat2[2]) {
    e.preventDefault();
    onError.style.display = "flex";
    onError.textContent = "Error: please add the correct universty date";
    setTimeout(() => {
      onError.style.display = "none";
      onError.textContent = "";
    }, 3000);
    console.log("ee");
    return;
  }
  if (doubleCheck() === "no") {
    return;
  }
  if (email.value.endsWith("@gmail.com")) {
    if (email.value === "@gmail.com") {
      onError.style.display = "flex";
      onError.textContent = "Error: please add a characters";
      setTimeout(() => {
        onError.style.display = "none";
        onError.textContent = "";
      }, 3000);
      return;
    }
    fetchFn();
    frontEnd();

    btnDownload.addEventListener("click", () => {
      important.style.display = "none";
      downloadFn();
      setTimeout(() => {
        clearAllData(
          names,
          work,
          city,
          email,
          link,
          num,
          textarea,
          name3,
          num3,
          education1,
          education2,
          date1,
          date2
        );
      }, 1500);
    });
    return;
  }

  onError.style.display = "flex";
  onError.textContent = "Error: please Add Google Gmail";
  setTimeout(() => {
    onError.textContent = "";
    onError.style.display = "none";
  }, 3000);
  return;
}

function frontEnd() {
  if (checking() === "yes") {
    blah.style.display = "flex";
    changeImg();
  }
  if (checking() === "no") {
    blah.style.display = "none";
  }
  summaryText.textContent = `${textarea.value}`;

  important.style.display = "flex";
  date1Text.textContent = `${date1.value}`;
  date2Text.textContent = `${date2.value}`;
  specialtyText.textContent = `${education1.value}`;
  unversityText.textContent = `${education2.value}`;

  nameText.textContent = `${names.value}`;
  workText.textContent = `${work.value}`;
  h1.style.display = "inline";
  logo.src = `logo-${socialMedia.value}.svg`;
  location2.textContent = `${city.value}`;
  number.textContent = `${num.value}`;
  email2.textContent = `${email.value}`;
  mam.textContent = `${socialMedia.value}`;
  onError.style.display = "none";
  setTimeout(() => {
    important.style.display = "none";
  }, 6500);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

socialMedia.addEventListener("change", changeData);
imageBtn.addEventListener("click", onClickBtn);
