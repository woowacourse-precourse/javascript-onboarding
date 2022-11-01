// calcMax: 각 페이지(왼쪽, 오른쪽 중 하나)를 받아서 덧셈 혹은 곱셈 중 가장 큰 값을 리턴한다
function calcMax(eachPage) {
  let add = 0;
  let mul = 1;
  while (eachPage > 0) {
    add += eachPage % 10;
    mul *= eachPage % 10;
    eachPage = Math.floor(eachPage / 10);
  }
  let max = add > mul ? add : mul;
  return max;
}

function problem1(pobi, crong) {
  let answer;
  // 왼쪽, 오른쪽 페이지의 차가 1이 아닌 경우, 배열에 2가지 값을 받지 않은 경우 -1
  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1] || pobi.length > 2 || crong.length > 2) {
    answer = -1;
  } else {
    // 오른쪽, 왼쪽 중 덧셈, 곱셈 중 가장 큰 값을 저장한다
    let pobiResult = calcMax(pobi[0]) > calcMax(pobi[1]) ? calcMax(pobi[0]) : calcMax(pobi[1]);
    let crongResult = calcMax(crong[0]) > calcMax(crong[1]) ? calcMax(crong[0]) : calcMax(crong[1]);
    if (pobiResult > crongResult) {
      answer = 1;
    } else if (pobiResult < crongResult) {
      answer = 2;
    } else if (pobiResult === crongResult) {
      answer = 0;
    }
  }
  return answer;
}
module.exports = problem1;
