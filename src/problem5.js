function problem5(money) {
  let answer = new Array(9).fill(0);
  if (money < 1 || money > 1000000){
    return 'money 가능 범위를 벗어났습니다';
  }
  else{
    let rest = money;
    const moneybase = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    moneybase.map((m,idx) =>{
      answer[idx] = parseInt(rest / m);
      rest -= (answer[idx] * m);
    })
    return answer;
  }
}

module.exports = problem5;