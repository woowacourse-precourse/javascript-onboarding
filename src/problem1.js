function validateInput(input) {
  return input[0] >= 1 && input[0] < 400 && input[1] - input[0] === 1;
}

function calculatePageNumber(page) {
  let add = 0;
  let multiply = 1;
  while (page > 0) {
    add += page % 10;
    multiply *= page % 10;
    page = parseInt(page / 10);
  }
  return add > multiply ? add : multiply;
}

function problem1(pobi, crong) {
  let answer;
  if (!validateInput(pobi) || !validateInput(crong)) return -1;
  return answer;
}

module.exports = problem1;
