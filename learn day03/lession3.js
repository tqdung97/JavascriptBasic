function inputArr(arr) {
  let arr2 = arr.map((x) => x * 2);
  return arr2;
}

//B3:

function getArr(input) {
  let arr = [];
  for (let i = 0; i <= input; i++) {
    arr.push(i);
  }
  return arr;
}

//B5

function bai5(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == sum / 2) {
      return true;
    }
  }
  return false;
}

// Bài 2: Viết một hàm nhận tham số là một mảng gồm các giá trị số. Hàm trả về một mảng mới gồm
// các giá trị số chẵn có trang mảng tham số truyền vào.
function bai2(input) {
  let arr = [];

  for (let i = 0; i <= input.length; i++) {
    if (arr[i] % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
}
input = [1, 2, 5, 6];
bai2(input);

// Bài 4: Viết một hàm tương tự như bài 3 kết quả trả về theo giá trị ngược lại, từ giá trị tham số đến 0
function bai4(input) {
  let arr = [0];

  for (let i = 0; i < input.length; i++) {
    if (arr[i] % 2 != 0) {
      arr.push(i);
    }
  }
  return arr;
}


