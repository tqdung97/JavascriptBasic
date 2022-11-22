// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function calculateFactorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * calculateFactorial(number - 1);
}
console.log("Gia thừa là " + calculateFactorial(5));

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString(‘hello’) => olleh

function reverseString(string) {
  //phân tách chuỗi thành mảng
  let arr = string.split("");
  //đảo ngược chuỗi
  let rvs = arr.reverse();
  //chuyển mảng về chuỗi
  let result = rvs.join("");
  return result;
}
console.log(reverseString("abcd"));

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”
// Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó

function translate(name,message) {
    
  switch (message) {
    case 36:
      console.log(name+ ": Szia");
      break;

    case 44:
      console.log(name+ ": Hello");
      break;
    case 66:
      console.log(name + ": สวัสดี");
      break;

    case 84:
      console.log(name + ": Xin chào");
      break;

    default:
      console.log(name + ": Mã vùng không hợp lệ");
      break;
  }

}
console.log(translate("Thái Lan",84));


// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”


function subString(string){
   let result =  string.slice(0,10);
    return console.log(result + "...")
}
console.log(subString("xinchaocacbantoila"));