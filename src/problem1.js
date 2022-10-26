// 예외사항 함수 생성
const isValidInput = (leftPage, rightPage) => {
  if (leftPage[0] <= 1 || leftPage[1] >= 400 || rightPage[0] <= 1 || rightPage[1] >= 400)
    return false;
  else if (leftPage[1] - leftPage[0] !== 1) return false;
  else if (rightPage[1] - rightPage[0] !== 1) return false;
  else return true;
};


// function problem1(pobi, crong) {
//   var answer;
//   return answer;
// }

// module.exports = problem1;
