function countBMI() {
  var height = 150;
  var weight = 45.5;
  console.log("Chỉ số BMI là:" + weight / height ** 2);
}
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", countBMI);
}
