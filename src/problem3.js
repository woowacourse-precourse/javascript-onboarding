function get369Count(num) {
  let count = 0;
  const stringNum = String(num);
  for (i = 0; i < stringNum.length; i++) {
    if (+stringNum[i] !== 0 && +stringNum[i] % 3 === 0) {
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
