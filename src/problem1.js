function problem1(pobi, crong) {

  //예외처리
  const checkPage = (arr) => {
    if(arr[0]+1 !== arr[1]) return false;
    if(arr.length !== 2) return false;
    if(arr[0] < 1 || arr[0] % 2 === 0) return false;
    if(arr[1] > 400 || arr[1] % 2 === 1) return false;
    // arr[0] 이 짝수이거나 arr[1] 이 홀수일때 조건
    return true;
  }

  var answer;
  return answer;
}

module.exports = problem1;
