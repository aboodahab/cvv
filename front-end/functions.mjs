import {
  numberText4,
  nameText4,
  revlationText,
  num3,
  name3,
  imgInp,
  blah,
  onError,
  link,
  names,
  textarea,
  num,
  city,
  email,
  work,
  education1,
  education2,
  date1,
  date2,
  socialMedia,
} from "./data.mjs";
function checking() {
  if (imgInp.value === "") {
    return "no";
  }
  return "yes";
}
function changeData() {
  link.setAttribute("placeholder", `${socialMedia.value} Link`);
  console.log("changed");
}
function doubleCheck() {
  if (name3.value === "" && num3.value === "") {
    nameText4.style.display = `none`;
    numberText4.style.display = "none";
    revlationText.textContent = `optional`;
    return "yes";
  }
  if (name3.value !== "" && num3.value === "") {
    onError.style.display = "flex";
    onError.textContent = "Error: Please add the number";
    setTimeout(() => {
      onError.style.display = "none";
      onError.textContent = "";
    }, 3000);
    return "no";
  }
  if (name3.value === "" && num3.value !== "") {
    onError.style.display = "flex";
    onError.textContent = "Error: Please add the name";
    setTimeout(() => {
      onError.style.display = "none";
      onError.textContent = "";
    }, 3000);
    return "no";
  }
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
function changeImg() {
  const [file] = imgInp.files;
  if (file) {
    blah.src = URL.createObjectURL(file);
  }
}

export { doubleCheck, changeImg, checking, changeData, fetchFn };
