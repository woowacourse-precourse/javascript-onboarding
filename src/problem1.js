function problem1(pobi, crong) {
  var answer;

  // 예외사항 확인
  if (isException(pobi) || isException(crong)){
    return -1;
  }

  return answer;
}

function isException(pages) {
  if (pages[1]-pages[0] != 1) {
    return true;
  }
  return false;
}

function getMaxNumByPage(page){
  let candidate_plus = 0
  let candidate_mult = 1
  while (page!=0) {
    candidate_plus += page % 10;
    candidate_mult *= page % 10;
    page = parseInt(page /= 10);
  }
  return Math.max(candidate_plus, candidate_mult);
}

module.exports = problem1;
const arr1 = [3, 4];
const arr2 = [3, 4];
console.log(problem1(arr1, arr2));