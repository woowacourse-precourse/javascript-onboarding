function problem3(number) {
  function clap(n) {
    let result = String(n).replace(/[3,6,9]/g,"O").replace(/[0-9]/g,"");
    return result.length;
  }
  
  let answer = 0;

  for(let i = 3; i < number+1; i++) {
    answer += clap(i);
  }
  return answer;
  
}


module.exports = problem3;
