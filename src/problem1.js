function problem1(pobi, crong) {
  var answer;

  // 예외사항 확인
  if (isException(pobi) || isException(crong)){
    return -1;
  }
  let pobi_score = getScore(pobi);
  let crong_score = getScore(crong);
  //console.log(`pobi_score: ${pobi_score}, crong_score: ${crong_score}`);

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

function getScore(pages){
  let left_num = getMaxNumByPage(pages[0]);
  let right_num = getMaxNumByPage(pages[1]);
  return Math.max(left_num, right_num);
}

module.exports = problem1;

