// Bài 4: Viết một hàm nhận tham số là một chuỗi là một đoạn văn. Hàm trả về chuỗi nhận được từ tham số với
// cả các chữ cái đầu của các từ viết hoa. Ví dụ tham số là “It is a good day”, kết quả trả về “It Is A Good Day”

function upperCaseString(string) {
  let convert = string.toLowerCase().split(" ");
  let result = convert.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

upperCaseString("It is a good day");

// Bài 5: Viết một hàm nhận tham số là một mảng gồm 5 giá trị số, trong đó giá trị đầu tiên đại diện số giờ 0 (0 -
//     23), giá trị thứ 2 của mảng đại diện số phút (0 - 59), giá trị thứ 3 đại diện cho ngày (1 - 31), giá trị thứ 4 đại diện
//     cho tháng (1 - 12) và giá trị cuối cùng đại diện cho số năm (> 0). Viết hàm trả về giá trị theo mẫu sau:
//     “05:10 08/10/2022 AM”. Kiểm tra điều kiện hợp lệ của các giá trị trong mảng ở tham số, nếu có giá trị không
//     hợp lệ hàm trả về undefined.

let getDateTime = function (arrays) {
  let hour = Hour(arrays[0], arrays);
  let minute = Minute(arrays[1]);
  let day = Day(arrays[2]);
  let month = Month(arrays[3]);
  let year = Year(arrays[4]);
  if (
    hour == undefined ||
    minute == undefined ||
    day == undefined ||
    month == undefined ||
    year == undefined
  ) {
    return undefined;
  }
  console.log(
    hour + ":" + minute + " " + day + "/" + month + "/" + year + arrays[5]
  );
};

let Hour = (hour, arrays) => {
  if (checkNum(hour) == undefined) return undefined;
  switch (true) {
    case hour > 12 && hour < 24: {
      hour = `0${hour - 12}`;
      arrays.push(" PM");
      return hour;
    }
    case hour < 13 && hour > 9: {
      arrays.push(" AM");
      return hour;
    }
    case hour > 0 && hour <= 9: {
      arrays.push(" AM");
      return `0${hour}`;
    }
    default:
      return undefined;
  }
};

let Minute = (minute) => {
  if (checkNum(minute) == undefined) return undefined;
  switch (true) {
    case minute < 60 && minute >= 10: {
      return minute;
    }
    case minute > 0 && minute < 10: {
      return `0${minute}`;
    }
    default:
      return undefined;
  }
};

let Day = (day) => {
  if (checkNum(day) == undefined) return undefined;
  switch (true) {
    case day < 32 && day > 9: {
      return `day`;
    }
    case day > 0 && day <= 9: {
      return `0${day}`;
    }
    default:
      return undefined;
  }
};

let Month = (month) => {
  if (checkNum(month) == undefined) return undefined;
  switch (true) {
    case month < 13 && month > 9: {
      return month;
    }
    case month > 0 && month <= 9: {
      return `0${month}`;
    }
    default:
      return undefined;
  }
};

let Year = (year) => {
  if (checkNum(year) == undefined) return undefined;
  switch (true) {
    case year > 0: {
      return `${year}`;
    }
    default:
      return undefined;
  }
};

let checkNum = (number) => {
  if (typeof number != "number" || isNaN(number) == true) {
    return undefined;
  } else {
    return number;
  }
};

getDateTime([12, 30, 28, 11, 2022]);

// Bài 3: Viêt 1 hàm nhận vào 2 tham số, trong đó:
// Tham số đầu là 1 mảng,
// Tham số sau là 1 số nguyên
// Function này có chức năng tách mảng nhận vào ban đầu thành các mảng nhỏ hơn, và các mảng nhỏ hơn này có số phần tử bằng với tham số thứ 2 được truyền vào
// Vdu: chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]

function chunk(arr, number) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i += number) {
    let chunk = arr.slice(i, i + number);
    arr2.push(chunk);
  }
  return arr2;
}
let arr = [2, 3, 4, 5, 6];
chunk(arr, 2);
