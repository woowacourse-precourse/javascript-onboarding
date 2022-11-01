function count369(num) {
  const stringNum = num.toString();
  const compareArr = ["3", "6", "9"];
  let count = 0;

  for (let i = 0; i < stringNum.length; i++) {
    if (compareArr.includes(stringNum[i])) {
      count++;
    }
  }
  return count;
}

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
