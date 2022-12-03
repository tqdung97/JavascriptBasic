// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

const changeHTML = document.querySelector("p");
changeHTML.innerHTML = `<p id = "text" style = "color: #777; font-size: 2rem" > Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript. </p>`;

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>

const styleHTML = document.getElementsByTagName("li");
for (let i = 0; i < styleHTML.length; i++) {
  styleHTML[i].style.color = "blue";
}

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// <ul id="list">
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//    <li>Item 5</li>
//    <li>Item 6</li>
//    <li>Item 7</li>
// </ul>
// Sử dụng javascript để thực hiện những công việc sau:
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let ulTag = document.getElementById("list");
let tag = document.createElement("li");
let text = document.createTextNode("Item 8");
tag.appendChild(text);
ulTag.appendChild(tag);
let tag2 = document.createElement("li");
let text2 = document.createTextNode("Item 9");
tag2.appendChild(text2);
ulTag.appendChild(tag2);
let tag3 = document.createElement("li");
let text3 = document.createTextNode("Item 10");
tag3.appendChild(text3);
ulTag.appendChild(tag3);

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const editHTML = document.getElementById("list").querySelectorAll("li")[0];
editHTML.style.color = "red";
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const editHTML = document.getElementById("list").querySelectorAll("li")[2];
editHTML.style.backgroundColor = "green";
// Remove thẻ <li> 4
const editHTML = document.getElementById("list").querySelectorAll("li")[3];
editHTML.remove();
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const ulQuery = document.getElementById("list");
const liQuery = document.getElementById("list").querySelectorAll("li")[3];
let tagNew = document.createElement("li");
tagNew.innerText = "Thay thế thẻ 4 đã bị xóa";
ulQuery.replaceChild(tagNew, liQuery);
