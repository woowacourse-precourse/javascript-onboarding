function problem3(number) {
  if (number < 1 || number > 10000 || Number.isInteger(number) === false) {
    return -1;
  }

  let answer = 0;
  let numString;
  let howMany = 0;
  for (let i = 1; i <= number; i++) {
    numString = i.toString();
    howMany = numString.match(/[3,6,9]/g);
    if (howMany != 'undefined' && howMany != null) {
      answer += howMany.filter(function (item) { return item !== '' }).length;
    }
  }

  return answer;
}

module.exports = problem3;