function problem5(money) {
  trans = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (i=0; i < trans.length; i++){
    if (money >= trans[i]){
      answer[i] += parseInt(money / trans[i]);
      money -= (trans[i] * answer[i]);
    }
    
  }        
  return answer;
}

// console.log(problem5(50237));
// console.log(problem5(15000));

module.exports = problem5;
