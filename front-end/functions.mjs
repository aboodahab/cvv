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
  refDiv,
  textarea,
  num,
  ref2,
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
    nameText4.style.display = "none";
    numberText4.style.display = "none";
    refDiv.style.display = "none";
    revlationText.textContent = `[Available upon request]`;
    return "yes";
  }
  if (name3.value !== "" && num3.value === "") {
    onErrorFn();
    return "no";
  }
  if (name3.value === "" && num3.value !== "") {
    console.log("sssssssssssssssssssssss333333333333333333333333333333");
    onErrorFn();
    return "no";
  }
  onSuccses();
}
function onErrorFn(evnet) {
  onError.style.display = "flex";
  onError.textContent = `Error: Please add the ${evnet}`;
  setTimeout(() => {
    onError.style.display = "none";
    onError.textContent = "";
  }, 3000);
}
function onSuccses() {
  nameText4.style.display = `flex`;
  numberText4.style.display = "flex";
  refDiv.style.display = "flex";
  nameText4.textContent = `${name3.value}`;
  numberText4.textContent = `${num3.value}`;
  revlationText.textContent = `${ref2.value}`;
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
// function clearAllData(
//   name,
//   work,
//   city,
//   email,
//   link,
//   number,
//   summary,
//   refName,
//   refNum,
//   specialty,
//   unversity
// ) {
//   if (refName === "" && refNum === "") {
//     name.value = "";
//     work.value = "";
//     city.value = "";
//     unversity.value = "";
//     specialty.value = "";

//     number.value = "";
//     summary.value = "";
//     email.value = "";
//     link.value = "";
//     return;
//   }
//   name.value = "";
//   work.value = "";
//   city.value = "";
//   unversity.value = "";
//   specialty.value = "";
//   refRe.value = "";
//   number.value = "";
//   summary.value = "";
//   email.value = "";
//   link.value = "";
//   refNum.value = "";
//   refName.value = "";
// }

function changeImg() {
  const [file] = imgInp.files;
  if (file) {
    blah.src = URL.createObjectURL(file);
  }
}

export { doubleCheck, changeImg, checking, changeData, fetchFn };
