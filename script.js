const btn = document.querySelector(".btn");
const inputContainer = document.getElementById("input");
const iconCopy = document.querySelector(".icon");
const notificationContainer = document.querySelector(".notification");
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
  notificationContainer.innerText = `${password} copied successfully!`;
  setTimeout(() => {
    notificationContainer.classList.add("active");
  }, 3000);
});
iconCopy.addEventListener("click", () => {
  if (!inputContainer.value) {
    notificationContainer.innerText = `nothing here`;
  }
  inputContainer.select();
  inputContainer.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputContainer.value);
  notificationContainer.classList.remove("active");
});
