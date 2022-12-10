// Bài 2: Giả sử cửa sổ trình duyệt của bạn là một căn phòng, nền trắng là đang bật đèn. Hãy tạo một nút button để
// tắt đèn của căn phòng này. Hay quy định content hoặc style cho nút này để người dùng biết ấn vào sẽ thế nào
// (Ví dụ đèn đang sáng thì content ghi là “On”, ấn tắt đi thì chuyển sang “Off”). Có thể thêm icon hình bóng đèn và
// đổi màu nền của button sang màu tối hơn khi đèn tắt.
const button = document.querySelector(".lamp-button");
const room = document.querySelector(".room");
button.addEventListener("click", () => {
  if (room.style.backgroundColor === "white") {
    room.style.backgroundColor = "black";
    button.style.color = "black";
  } else {
    room.style.backgroundColor = "white";
    button.style.color = "green";
  }
});
