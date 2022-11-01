function problem3(number) {
  let answer=0;

  for (let i = 1;i<number+1;i++){
    let nums = String(i).split("")
    answer+=has369(nums).length
  }
  return answer;
}

function has369(nums){
  const arr369 = ["3", "6", "9"];
  return nums.filter(num=>arr369.includes(num))
}

module.exports = problem3;

