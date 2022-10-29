function problem3(number) {
  let resultCount = 0;
  for(let nowNumber = 1; nowNumber < number + 1; nowNumber++){
    const nowNumberArray = nowNumber.toString().split("");
    nowNumberArray.forEach(element => {
      if(element === '3' || element == '6' || element == '9') { resultCount += 1 }
    });
  }
  return resultCount;
}

console.log(problem3(33));

module.exports = problem3;
