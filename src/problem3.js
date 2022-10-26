function problem3(number) {
  var answer;
  let prefixSum = [];
  prefixSum[0] = 0;
  for(let i = 1; i <= number; i++){
    prefixSum[i] = prefixSum[i-1] + getClap(i);
  }
  answer = prefixSum[number];
  return answer;
}

module.exports = problem3;
