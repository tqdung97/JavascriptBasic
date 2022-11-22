// Bài 1: Hoán đổi giá trị của biến
// Viết function nhận vào 2 arguments là 2 số, log ra console tên và value
// của 2 biến đó (vdu: Biến foo có giá trị bằng 2, bar có giá trị bằng 5).
// Sau đó xử lý để hoán đổi giá trị của 2 biến này và log ra console để được kết quả như sau:
function convert(num1,num2){
    console.log("Foo có giá trị bằng: " + num1);
    console.log("Bar có giá trị bằng: " + num2);
    let num3 = 0;
    num3 = num1;
    num1 = num2;
    num2 = num3;
    console.log("Foo có giá trị bằng: " + num1);
    console.log("Bar có giá trị bằng: " + num2);
}
console.log(convert(1,2))
