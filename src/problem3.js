function problem3(number) {
  var answer;
  return answer;
}

function countTotalClap(number) {
  const totalArray = makeArray(number);
  let totalClap = 0;
  totalArray.forEach((item) => totalClap += countSpecificClap(item));

  return totalClap;
}

function makeArray(number) {
  const numberArray = [];

  for (let i = 1; i <= number; i++) {
    numberArray.push(i);
  }

  return numberArray;
}

function countSpecificClap(number) {
  const number_digits = seperateDigits(number);
  let specificClap = 0;
  number_digits.forEach((item) => { if (checkMultiple(item)) specificClap++ });
  
  return specificClap;
}

function seperateDigits(number) {
  const digits = [];

  while (number > 0) {
    digits.push(number % 10);
    number = parseInt(number / 10);
  }

  return digits;
}

function checkMultiple(number) {
  return number % 3 == 0;
}

module.exports = problem3;