const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green_bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
