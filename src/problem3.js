function add_if_possible(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '3' || str[i] == '6' || str[i] == '9') {
      count++;
    }
  }
  return count;
}

function problem3(number) {
  var answer;
  let str = '';
  for (let i = 1; i <= number; i++) {
    str += i.toString();
    answer = add_if_possible(str);
  }
  return answer;
}

module.exports = problem3;
