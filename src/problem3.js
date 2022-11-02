var dp = [];
dp.push(0);

function clap(x){
  var count = 0;
  while (Math.floor(x / 10) > 0){
    if((x % 10) % 3 === 0 &&  (x % 10) !== 0) count++; 
    x = Math.floor(x / 10);
  }
  if ((x % 10) % 3 === 0) count++;
  dp.push(count + dp[dp.length - 1]);
  return;
}



function problem3(number) {
  var answer;
  
  for(var i = 1; i <= number; i++){
    clap(i);
  }
  
  return dp[number];
}


module.exports = problem3;
