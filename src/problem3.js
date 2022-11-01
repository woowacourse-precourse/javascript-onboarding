function createString(number){
  let string = '';
  for(let i=1;i<=number;i++){
      string+=i;
  }return string;
}
function findNumber(target_number){
  let clap=0;
  for(let i=0;i<target_number.length;i++){
      if(target_number.charAt([i])==='3')clap++;
      if(target_number.charAt([i])==='6')clap++;
      if(target_number.charAt([i])==='9')clap++;
  }return clap;
}
function problem3(number) {
  let answer;
  let target_number=createString(number)
  answer=findNumber(target_number);
  return answer;
}

module.exports = problem3;