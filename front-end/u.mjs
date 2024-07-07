import { form } from "./data.mjs";
console.log("sssssssssssssssssssss222222222222222222");

function handleSubmit(event) {
  const url = "http://localhost:3000/files";
  const formData = new FormData(form);
  console.log("slsllllllllllllllllllllllllllllllllllll", 300 + 2);
  formData.append("string", "ss");
  const fetchOptions = {
    method: "post",

    body: formData,
  };

  fetch(url, fetchOptions);

  event.preventDefault();
}
form.addEventListener("submit", handleSubmit);
