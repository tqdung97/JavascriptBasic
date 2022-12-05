// Bài 1: Trong HTML, viết một thẻ có content là một số (mặc định là 0) và hai nút button có nội dung là “+” và “-”.
// Khi click vào nút cộng hoặc nút trừ sẽ cập nhật giá trị của số trên.
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const content = document.querySelector(".event");
btn1.addEventListener("click", (plusNumber) =>{
    const clickTarget = plusNumber.target;
    if(clickTarget.classList.contains("buttons-group")) {
        return;
    }
    content.textContent++;
});
btn2.addEventListener("click", (minusNumber) =>{
    const clickTarget = minusNumber.target;
    if(clickTarget.classList.contains("buttons-group")) {
        return;
    }
    content.textContent--;
});
// Bài 2: Giả sử cửa sổ trình duyệt của bạn là một căn phòng, nền trắng là đang bật đèn. Hãy tạo một nút button để
// tắt đèn của căn phòng này. Hay quy định content hoặc style cho nút này để người dùng biết ấn vào sẽ thế nào
// (Ví dụ đèn đang sáng thì content ghi là “On”, ấn tắt đi thì chuyển sang “Off”). Có thể thêm icon hình bóng đèn và
// đổi màu nền của button sang màu tối hơn khi đèn tắt.
// Bài 3: Tạo cửa sổ modal. Tạo một button, khi click button đó thì mở ra một cửa sổ ở vị trí chính giữa cửa sổ tình
// duyệt và có một nút button để đóng. Click vào nút đó thì sẽ đóng cửa sổ vừa mở ra. (Gợi ý, sử dụng position
// fixed cho cửa sổ modal).
// Bài 4 (Nâng cao): Cải tiến bài tập 3. Khi cửa sổ modal mở ra, nền của cả cửa sổ trình duyệt phía sau modal đó
// có một màu tối có độ trong suốt. Khi click vào nút đóng hay bên ngoài của cửa sổ modal đều đóng được cửa sổ
// này