// Yêu cầu :

// Nhấn chuột vào 1 vị trí bất kỳ trên trang web, tạo 1 hình tròn tại vị trí nhấn chuột
// Mỗi lần nhấn chuột chỉ có 1 hình tròn được xuất hiện
const canvas = document.querySelector("square");
canvas.addEventListener('mousedown', function(event) {
    document.getElementById('debug3').innerHTML = 'works';//Just debug stuff.

    for (i=0;i>10;i++) { //to loop through squares.
       document.getElementById('debug5').innerHTML = 'works';
       if (mouseX >= square[i].x - 20 && mouseX <= square[i].x + 40 && mouseY >= square[i].y - 20 && mouseY <= square[i].y + 40) {//To see if mouse coordinates equal square ones.
           square[i].x = mouseX;//Just defining that mouse coordinates equal square ones.
           square[i].y = mouseY;
           document.getElementById('debug6').innerHTML = 'works';
       }
   }
}, true);