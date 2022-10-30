function validateInput(input) {
  return input[0] >= 1 && input[0] < 400 && input[1] - input[0] === 1;
}

function problem1(pobi, crong) {
  let answer;
  if (!validateInput(pobi) || !validateInput(crong)) return -1;
  return answer;
}

module.exports = problem1;
