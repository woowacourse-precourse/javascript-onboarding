function problem5(money) {
  let temp = money;
  let result = [];
  let calArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (money of calArray) {
    cal(money);
  }
  function cal(cashnum) {
    let calCount = Math.floor(temp / cashnum);
    result.push([cashnum], [calCount]);
    temp = temp - cashnum * calCount;
    return calCount;
  }

  // console.log(result);
  let finalResult = [];
  for (let i = 0; i < result.length; i++) {
    if (i % 2 !== 0) {
      finalResult.push(...result[i]);
    }
  }
  var answer = finalResult;
  return answer;
}

module.exports = problem5;
