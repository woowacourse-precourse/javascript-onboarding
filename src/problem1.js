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

function getScore(pages) {
  const leftPage = calculatePageNumber(pages[0]);
  const rightPage = calculatePageNumber(pages[1]);
  return leftPage > rightPage ? leftPage : rightPage;
}

function problem1(pobi, crong) {
  let answer;
  if (!validateInput(pobi) || !validateInput(crong)) return -1;

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  return answer;
}

module.exports = problem1;
