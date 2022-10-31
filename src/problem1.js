function problem1(pobi, crong) {
  var answer;
  return answer;
}

//예외사항 : 첫, 마지막 페이지일때 예외. 다음 페이지가 이전 페이지보다 +1이 아닐 때
function exceptions(arr) {
  if (arr[0] + 1 !== arr[1]) return false;
  if (arr[0] === 1 || arr[1] === 400) return false;
  return true;
}

function MaxNumber(arr) {
  let mnum = 0;

  for (let i = 0; i < arr.length; i++) {
    // 배열을 쪼개 문자열을 숫자로 변환한 뒤 합산, 초기값 0
    let plus = arr[i].toString().split("").reduce((accumulator, currentnum) => accumulator + Number(currentnum), 0);
    // 배열을 쪼개 문자열을 숫자로 변환한 뒤 곱산 후 합산, 초기값 1(0으로 주면 0반환)
    let multiply = arr[i].toString().split("").reduce((accumulator, currentnum) => accumulator * Number(currentnum), 1);
    // 최댓값 산출
    mnum = Math.max(mnum, plus, multiply);
  }

  return mnum;
}
module.exports = problem1;
