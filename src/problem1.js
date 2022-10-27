function problem1(pobi, crong) {
  var answer;
  return answer;
}

function plus(number) {
  const string_number = String(number);
  let plus_sum = 0;

  for (let i = 0; i < string_number.length; i++) {
    plus_sum += parseInt(string_number[i]);
  }
  return plus_sum;
}

function multiple(number) {
  const string_number = String(number);
  let multiple_sum = 1;

  for (let i = 0; i < string_number.length; i++) {
    multiple_sum *= parseInt(string_number[i]);
  }
  return multiple_sum;
}

module.exports = problem1;
