function problem5(money) {
  //거슬러주고 남은 금액
  let change = money;
  //결과 배열
  let result = new Array();
  //거스름돈 동전과 개수
  const d = [
    [50000, 0],
    [10000, 0],
    [5000, 0],
    [1000, 0],
    [500, 0],
    [100, 0],
    [50, 0],
    [10, 0],
    [1, 0],
  ];

  //거스름돈 동전을 하나씩 돌면서 50000원부터 차례로 카운트
  d.map((item) => {
    while (change >= item[0]) {
      //거슬러 주고 나면 남은 거스름돈 계산
      change = change - item[0];
      //거슬러준 동전 카운트 + 1
      item[1] = item[1] + 1;
    }
  });

  //결과를 result 배열에 담기
  for (i in d) {
    result.push(d[i][1]);
  }

  return result;
}

module.exports = problem5;
