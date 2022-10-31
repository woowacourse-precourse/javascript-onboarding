function problem3(number) {
  var answer=0;

  for(var num=3;num<=number;num++){
    answer+=claps(num.toString().split(''));
  }

  return answer;
}

function claps(number){
  const nums = ['3','6','9'];
  var clap=0;
  number.forEach((el)=>{if(nums.includes(el))clap++;});
  return clap;
}

module.exports = problem3;
