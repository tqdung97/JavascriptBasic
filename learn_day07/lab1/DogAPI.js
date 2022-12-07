const btn = document.getElementById("btn");
const image = document.getElementById("image");

// Lắng nghe sự kiện khi bấm vào nút "random"
btn.addEventListener("click", function () {
  getRandomImage();
});

// Gọi API để lấy dữ liệu và hiển thị
function getRandomImage() {
    let res = axios.get("https://dog.ceo/api/breeds/image/random");
    res
    .then(res => {
        return image.src = res.data.message;
    })
    .catch(error => {
        console.log(error)
    })
  
}
