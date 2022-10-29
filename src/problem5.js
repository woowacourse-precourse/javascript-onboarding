function problem5(money) {
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  function recursion(change) {
    if(change >= 50000) {
      answer[0] += 1;
      return recursion(change-50000)
    }
    if(change >= 10000) {
      answer[1] += 1;
      return recursion(change-10000)
    }
    if(change >= 5000) {
      answer[2] += 1;
      return recursion(change-5000)
    }
    if(change >= 1000) {
      answer[3] += 1;
      return recursion(change-1000)
    }
    if(change >= 500) {
      answer[4] = answer[4] + 1;
      return recursion(change-500)
    }
    if(change >= 100) {
      answer[5] = answer[5] + 1;
      return recursion(change-100)
    }
    if(change >= 50) {
      answer[6] = answer[6] + 1;
      return recursion(change-50)
    }
    if(change >= 10) {
      answer[7] = answer[7] + 1;
      return recursion(change-10)
    }
    if(change >= 1) {
      answer[8] = answer[8] + 1;
      return recursion(change-1)
    }
  }

  recursion(money);
  
  return answer;
}

module.exports = problem5;
