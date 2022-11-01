function add_if_possible(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (multipleof_three(str[i])) {
      count += 1;
    }
  }
  return count;
}

function multipleof_three(str) {
  if (str === '3' || str === '6' || str === '9') {
    return true;
  }
  return false;
}

function problem3(number) {
  var answer = 0;
  let str = '';
  for (let i = 1; i <= number; i++) {
    str = i.toString();
    answer += add_if_possible(str);
  }

  return answer;
}

module.exports = problem3;
