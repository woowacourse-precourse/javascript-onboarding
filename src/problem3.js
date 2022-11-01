let dp = new Array(10001).fill(0);
dp[3] = 1;
dp[6] = 1;
dp[9] = 1;

function get369Sum(n) {
  if(dp[n]) return dp[n];
  let ret = 0;
  while(n>0){
    const digit = n%10;
    if(digit === 3 || digit === 6 || digit === 9){
      ret++;
    }
    n = Math.floor(n/10);
  }
  dp[n] = ret;
  return ret;
}


function problem3(number) {
  let answer = 0;

  for(let i=3; i<=number; i++){
    answer += get369Sum(i);
  }

  return answer;
}

module.exports = problem3;
