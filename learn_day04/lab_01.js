// Bài 1: Tạo một biến lưu thông tin về một con vật nuôi trong nhà là một object gồm các key sau: type
// (chó, mèo, chim...), name, breed (giống), hairColor, c (là một mảng gồm các giá trị chuỗi).

const infor = {
  type: "Chó",
  name: "Mực",
  breed: "Đốm",
  hairColor: "Đen",
  favoriteFood: ["Thịt", "Cơm"],
};

// Bài 2: In ra cửa sổ console giá trị của một key bất kỳ trong object tạo ra từ bài 1.

console.log(infor.name);

// Bài 3: Thêm vào object ở bài 1 key “yearOld” để bổ sung số tuổi cho con vật, sử dụng giá trị số. In ra
// cửa sổ console dữ liệu của object sau khi đã bổ sung key - value mới.

infor.yearOld = 3;
console.log(infor);

// Bài 4: Viết một hàm nhận tham số là một object giống object của bài 1. Từ các key và giá trị của
// object đó, hàm trả về một chuỗi có nội dung như sau: “Nhà tôi có một con mèo tên là Tom, nó thích
// ăn cá, bánh xèo, bít tết.

function input(infor) {
  return `Nha tôi có một con ${infor.type} tên nó là ${infor.name}, nó thích ăn ${infor.favoriteFood[0]}, ${infor.favoriteFood[1]} và ${infor.favoriteFood[2]}`;
}
const infor = {
  type: "Mèo",
  name: " Tom",
  favoriteFood: ["Cá", "Bánh Xèo", "Bít Tết"],
};
input(infor);

// Bài 5: Tạo một biến có giá trị là một mảng chứa 3 object giống bài 1. Thông tin về các con vật không
// được trùng nhau quá nhiều và tuổi của chúng phải khác nhau.

const pet1 = {
  type: "Mèo",
  name: " Tom",
  breed: "VN",
  hairColor: "Vàng",
  favoriteFood: ["Cá", "Bánh Xèo", "Bít Tết"],
  yearOld: 4,
};
const pet2 = {
  type: "Chó",
  name: "Mực",
  breed: "Đốm",
  hairColor: "Đen",
  favoriteFood: ["Thịt", "Cơm"],
  yearOld: 5,
};
const pet3 = {
  type: "Lạc Đà",
  name: "Mao",
  breed: "Đốm",
  hairColor: "Đen",
  favoriteFood: ["Cỏ", "Cám"],
  yearOld: 7,
};

let arr = [pet1, pet2, pet3];

console.log(arr);
