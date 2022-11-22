function createParagraph() {
  let a = 1;
  let b = 22;
  let name = "john"
  // alert(b + a); 23
  // alert(c);  //ko có giá trị

  alert(a + name + b);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
