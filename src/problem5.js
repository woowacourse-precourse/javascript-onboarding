function problem5(money) {
  //var answer;
  const answer = [0,0,0,0,0,0,0,0,0];
  const m_check = [50000,10000,5000,1000,500,100,50,10,1];

  for(let i = 0; i < answer.length; i++){
    if(parseInt(money / m_check[i]) === 0) continue;
    else { 
      answer[i] = parseInt(money / m_check[i]);
      money = money % m_check[i];
    }
  }
  return answer;
}

module.exports = problem5;
