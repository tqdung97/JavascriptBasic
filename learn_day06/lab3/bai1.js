// Bài 1: Trong HTML, viết một thẻ có content là một số (mặc định là 0) và hai nút button có nội dung là “+” và “-”.
// Khi click vào nút cộng hoặc nút trừ sẽ cập nhật giá trị của số trên.
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const content = document.querySelector(".event");

btn1.addEventListener("click", (plusNumber) => {
  const clickTarget = plusNumber.target;
  if (clickTarget.classList.contains("buttons-group")) {
    return;
  }
  content.textContent++;
});
btn2.addEventListener("click", (minusNumber) => {
  const clickTarget = minusNumber.target;
  if (clickTarget.classList.contains("buttons-group")) {
    return;
  }
  content.textContent--;
});
