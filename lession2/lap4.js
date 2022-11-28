// Bài 2:
function perimeterCircle( radius) {
    var perimeter = 2 * Math.PI * radius;
    return perimeter.toFixed(2);

}
perimeterCircle(15.5);

function areaCircle ( radius) {
    var area = Math.PI * (radius **2);
    return (area).toFixed(2);
}
areaCircle(15)

// Bài 3: Viết một hàm nhận giá trị là một số hoặc một chuỗi. Hàm
// chuyển đổi tham số về giá trị số (nếu cần) và trả về kết quả dưới dạng
// “8px”, “10px”... Nếu tham số không thể chuyển đổi về dạng số, trả về
// “0px”.

function getResult( input){
    var number = Number.parseInt(input);
    if(!isNaN(number)){
        return "0px";
        
    }else{
        return `${number}px`;
    }
}
getResult( 5);

//Bài 4: Viết một hàm trả về một số ngẫu nhiên từ 3 - 8

function randomNumber() {
    Math.floor(Math.random()*6) +3;
}

randomNumber();


