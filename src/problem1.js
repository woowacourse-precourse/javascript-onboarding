function problem1(pobi, crong) {
  //플레이어의 왼쪽, 오른쪽 점수를 저장할 배열
  let pobiMax = new Array();
  let crongMax = new Array();

  //주어진 배열이 연속된 숫자가 아닐 경우 예외 처리
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  //각 스코어를 비교하여 점수 계산
  function calScore(player1, player2) {
    console.log("player1: ", player1, "player2: ", player2);
    if (player1 > player2) {
      return 1;
    } else if (player1 === player2) {
      return 0;
    } else {
      return -1;
    }
  }

  //각 자릿수를 합했을 때
  function calAddMax(num) {
    return num
      .toString()
      .split("")
      .reduce((prev, cur) => prev + parseInt(cur), 0);
  }

  //각 자릿수를 곱했을 때
  function calMulMax(num) {
    return num
      .toString()
      .split("")
      .reduce((prev, cur) => prev * parseInt(cur), 1);
  }

  //포비의 점수 계산
  pobi.map((num) => {
    pobiMax.push(Math.max(calAddMax(num), calMulMax(num)));
  });

  //크롱의 점수 계산
  crong.map((num) => {
    crongMax.push(Math.max(calAddMax(num), calMulMax(num)));
  });

  //포비와 크롱의 점수 비교 및 결과 반환
  return calScore(Math.max(...pobiMax), Math.max(...crongMax));
}
module.exports = problem1;
