function problem5(money) {
  let answer = [];
  let paperCoin = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  //돈이 큰 수부터 for문을 돌면서 받은돈으로 나눠준 후,돈의 갯수이기 때문에 정수화 시켜준 후 답 배열에 주입시킨다. 
  //그후 주입시킨 돈의 갯수만큼 받은 돈에서 빼준다.
  for (let i = 0; i < paperCoin.length; i++) {
    var count = Math.floor(money / paperCoin[i]);
    answer[i] = count;
    money -= paperCoin[i] * count;
  }
  return answer;
}

module.exports = problem5;
