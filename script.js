const btn = document.querySelector(".btn");
const inputContainer = document.getElementById("input");
const selectedText = "1234567890!@#$%^&*()_}:><][mnbvcxzasdfghjklpoiuytrewq";
// console.log(selectedText.substring(10, 11));
const numberOfPasswordLength = 12;
console.log(selectedText.length);
btn.addEventListener("click", () => {
  let password = "";
  for (let i = 0; i < numberOfPasswordLength; i++) {
    const randomPosition = Math.floor(Math.random() * selectedText.length);
    password += selectedText.substring(randomPosition, randomPosition + 1);
  }
  inputContainer.value = password;
});
