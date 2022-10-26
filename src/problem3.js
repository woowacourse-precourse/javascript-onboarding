function problem3(number) {
  var answer;

  for(var num=3;num<=number;num++){
    claps(num);
  }

  return answer;

  //3. 반환값들을 전부 더해 리턴.
}

function claps(number){
  const nums = [3,6,9];
  var clap=0;
  number.forEach((el)=>{if(nums.includes(el))clap++;});
  return clap;
}

module.exports = problem3;
