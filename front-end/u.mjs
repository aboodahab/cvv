import { imgInp, blah } from "./data.mjs";
console.log(blah);
imgInp.onchange = (evt) => {
  const [file] = imgInp.files;
  if (file) {
    blah.src = URL.createObjectURL(file);
  }
};
