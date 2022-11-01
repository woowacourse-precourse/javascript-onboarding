function problem5(money) {
  let answer = [0,0,0,0,0,0,0,0,0];

  let paper = 50000; // 화폐
  let firstNum = 5; // 화폐 단위 앞자리
        
  for (let i = 0; i < answer.length; i++) {
      answer[i] = parseInt(money / paper);
      money = money % paper;
      
      if (firstNum === 5) {
        firstNum = 1;
        paper /= 5;
      }
      else if (firstNum === 1 && money < 10) {
        paper /= 10;
      }
      else {
        firstNum = 5;
        paper /= 2;
      }
  }

  return answer;
}

module.exports = problem5;
