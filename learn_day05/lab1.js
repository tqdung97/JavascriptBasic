// <!-- Bài 1: In ra cửa sổ console thẻ p đầu tiên trong thẻ div có class là “text-content”. -->
    document.getElementsByClassName('text-content')[0].querySelector('p');

// <!-- Bài 2: In ra cửa sổ console thẻ p thứ hai trong thẻ div có class là “text-content”. -->
document.getElementsByClassName('text-content')[0].querySelectorAll('p')[1];

// <!-- Bài 4: In ra cửa số console các thẻ p trong thẻ div có class là “text-content”. Đổi kết quả về dạng
// mảng và in ra cửa sổ console (Gợi ý, sử dụng spread operator). -->
theP = document.getElementsByClassName('text-content')[0].querySelectorAll('p')
arr = [...theP]
console.log(arr)

// <!-- Bài 3: In ra cửa sổ console các thẻ li có trong list. Đổi kết quả về dạng mảng và in ra cửa sổ console . -->
tag = document.querySelector('ul').querySelectorAll('li')
arr = [...tag]
console.log(arr)