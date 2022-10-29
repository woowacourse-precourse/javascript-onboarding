function problem5(money) {
  var answer;
  var answer = [];
  //화폐 단위 모음집(배열)을 제작한다
  var money_array = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  //화폐 단위를 가져와 money에 나눠서 answer에 저장한다
  for (let i = 0; i < 9; i++) {
    if (money / money_array[i] != 0) {
      answer[i] = parseInt(money / money_array[i]);
      //money에 나눠진 값을 다시 money에 저장한다.
      money = money % money_array[i];
    } else {
      answer[i] = 0;
    }
  }
  return answer;
}

module.exports = problem5;
