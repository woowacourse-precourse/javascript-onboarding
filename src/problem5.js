function problem5(money) {
  let answer=new Array(9);
  const moneyType=[50000,10000,5000,1000,500,100,50,10,1];

  // 그리디 알고리즘_ 큰 단위의 화폐부터 차례대로 확인하기
  for (let i=0;i<9;i++) {
    answer[i]=parseInt(money/moneyType[i]);
    money%=moneyType[i];
  }

  return answer;
}

module.exports = problem5;
