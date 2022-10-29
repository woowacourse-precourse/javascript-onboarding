function problem1(pobi, crong) {
  var answer;

  // 예외사항 확인
  if (isException(pobi) || isException(crong)){
    return -1;
  }

  let pobi_score = getScore(pobi);
  let crong_score = getScore(crong);

  answer = compareScores(pobi_score, crong_score);

  return answer;
}

function isException(pages) {
  if (pages[1]-pages[0] != 1) {
    return true;
  }
  if (pages[0]<1 || pages[0]>400 || pages[1]<1 || pages[1]>400 ){
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

function compareScores(pobi_score, crong_score){
  if (pobi_score > crong_score) {
    return 1;
  }
  if (pobi_score < crong_score) {
    return 2;
  }
  return 0;
}

module.exports = problem1;