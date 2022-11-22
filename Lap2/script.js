function compareAge(name1, name2, age1, age2) {
  if (age1 < age2) {
    console.log(name1 + " nhỏ hơn " + name2 + " " + (age2 - age1) + " tuổi.");
  } else if ((age1 = age2)) {
    console.log(name1 + " bằng tuổi " + name2);
  } else {
    console.log(name2 + " nhỏ hơn " + name1 + " " + (age1 - age2) + " tuổi.");
  }
}
compareAge("Mai", "Dũng", 20, 20);

function BMI(height, weight) {
  var BMI = weight / height ** 2;

  if (BMI < 16) {
    console.log("Gầy độ III");
  } else if (16 <= BMI < 17) {
    console.log("Gầy độ II");
  } else if (17 <= BMI < 18.5) {
    console.log(BMI + " Gầy độ I");
  } else if (18.5 <= BMI < 25) {
    console.log(BMI + " Bình thường");
  } else if (25 <= BMI < 30) {
    console.log(BMI + " Thừa cân");
  } else if (30 <= BMI < 35) {
    console.log(BMI + " Béo phì độ I");
  } else if (35 <= BMI <= 40) {
    console.log(BMI + " Béo phì độ II");
  } else {
    console.log(BMI + " Béo phì độ III");
  }
}

BMI(170, 50);
