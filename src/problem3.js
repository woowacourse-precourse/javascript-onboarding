function problem3(number) {
  var answer = 0;
  
  for (let i = 1; i <= number; i++) {
  numArr = String(i).split("");
  
  const divArr = numArr.map((x) => Number(x) > 0 && Number(x) % 3);
  
  const clap = divArr.filter((x) => x === 0).length;
  answer += clap;
  }
  return answer;
}
  
module.exports = problem3;