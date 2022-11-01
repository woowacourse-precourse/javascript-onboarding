function get369Count(num) {
  let count = 0;
  const stringNum = String(num);
  for (let i = 0; i < stringNum.length; i++) {
    if (['3', '6', '9'].includes(stringNum[i])) {
      count++;
    }
  }

  return count;
}

function problem3(number) {
  var answer = 0;

  for (let j = 1; j < number + 1; j++) {
    answer += get369Count(j);
  }

  return answer;
}

module.exports = problem3;
