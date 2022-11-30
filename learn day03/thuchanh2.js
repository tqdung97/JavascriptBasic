// Bài 3: Viết một hàm nhận tham số là một mảng gồm các chuỗi là tên của người hoặc đồ vật... Hàm
// trả về một chuỗi có dạng như sau: Ví dụ tham số truyền vào là [“Mai”, “Vân”, “Tùng”, “Khánh”] thì kết
// quả trả về là “Mai, Vân, Tùng và Khánh”.

function bai3(input) {
    if(input.length == 2){
        return `${input[0]} và ${input[1]}`;
    }

    let string = "";
    let string2 =""
    for(let i = 0; i < input.length-1 ; i++){
        string += `, ${input[i]}`;
    }
   string2 +=  string.toString() + " và " + input.pop().toString();
    return string2;
}

input = ["MAI", "Khánh", "Tùng", "Vân"];
bai3(input);