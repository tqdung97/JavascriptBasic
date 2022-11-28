function convertAndSum(string1, string2, sumFunction) {
  const num1 = Number(string1);
  const num2 = Number(string2);
  return sumFunction(num1, num2);
}

function sum(number1, number2) {
  return number1 + number2;
}

const result = convertAndSum(1, 2, sum);

console.log(result);