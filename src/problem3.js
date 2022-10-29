function problem3(number) {
  let count = 0;
  for(let nowNumber = 1; nowNumber < number + 1; nowNumber++){
    nowNumberArray = nowNumber.toString().split("");
    if(nowNumberArray.includes("3") || nowNumberArray.includes("6") || nowNumberArray.includes("9")){
      count += 1;
    }
  }
  return count;
}

console.log(problem3(13));

module.exports = problem3;
