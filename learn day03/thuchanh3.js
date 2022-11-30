// Bài 5: Viết một hàm nhận tham số là một mảng gồm 5 giá trị số, trong đó giá trị đầu tiên đại diện số giờ 0 (0 -
//     23), giá trị thứ 2 của mảng đại diện số phút (0 - 59), giá trị thứ 3 đại diện cho ngày (1 - 31), giá trị thứ 4 đại diện
//     cho tháng (1 - 12) và giá trị cuối cùng đại diện cho số năm (> 0). Viết hàm trả về giá trị theo mẫu sau:
//     “05:10 08/10/2022 AM”. Kiểm tra điều kiện hợp lệ của các giá trị trong mảng ở tham số, nếu có giá trị không
//     hợp lệ hàm trả về undefined

function getDateTime() {
  let hours = Math.floor(Math.random() * 24);
  let minute = Math.floor(Math.random() * 59);
  let day = Math.floor(Math.random() * 31) + 1;
  let month = Math.floor(Math.random() * 12) + 1;
  let year = Math.floor(Math.random() * 9999999) + 1;
  let arr = [];
  arr.push(hours);
  arr.push(minute);
  arr.push(day);
  arr.push(month);
  arr.push(year);
  
  for(let i = 0; i < arr.length; i++) {

  }
}
