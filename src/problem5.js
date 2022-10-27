function problem5(money) {
  if(money < 1 || money > 1000000){
    return -1;
  }
  if(/[^0-9]/g.test(money)){
    return -1;
  }
  const bankNote = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = new Array(9).fill(0);
  while(money>0){
    let moneyIdx = bankNote.findIndex((el)=>{
      return money>=el;
    });
    let count = Math.floor(money/bankNote[moneyIdx]);
    money = money%bankNote[moneyIdx];
    answer[moneyIdx] += count;
  }
  return answer;
}
/* findIndex함수를 통해, money보다 작은 화폐 중 가장 큰 금액의 인덱스를 리턴받아
answer의 인덱스 위치에 갯수를 저장한다. 그리고 나머지를 money에 저장하고 money가 0이 될 때 까지 반복 
예외1) money가 1 미만, 100만 초과인경우
예외2) money가 숫자가 아닌 경우 
*/
module.exports = problem5;
