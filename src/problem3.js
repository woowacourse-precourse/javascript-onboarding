function problem3(number) {
  let answer=0;

  for (let i = 1;i<number+1;i++){
    let nums = String(i).split("")
    answer+=clap(nums)
  }
  return answer;
}

function clap(nums){
  let answer = 0;
  for(let num of nums){
    has369(num)?answer+=1:null
  }
  return answer
}

function has369(num){
  const arr369 = ["3", "6", "9"];
  if(arr369.includes(num)){
    return true
  }
  return false
}

module.exports = problem3;

