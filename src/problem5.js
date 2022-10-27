function problem5(money) {
  var answer = [];
  let monetary_unit = 100000;//초기 화폐 단위
  for(let i = 0;i<8;i++){ //화폐 단위가 9개여서 8번 실행
    //순서에따라 2와 5를 나눠 화폐 단위를 줄여나감
    if(i % 2 == 0) monetary_unit = monetary_unit / 2;
    if(i % 2 == 1) monetary_unit = monetary_unit / 5;
    //화폐 개수를 answer에 push함
    answer.push(parseInt(money / monetary_unit))
    money = money % monetary_unit
  }
  //1단위 화폐를 push함
  answer.push(parseInt(money / 1))
  return answer;
}
module.exports = problem5;
