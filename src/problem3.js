function problem3(number) {
  const regex = /3|6|9/g;
  let resultCount = 0;
  for(let nowNumber = 1; nowNumber < number + 1; nowNumber++){
    const matchNumberArray = nowNumber.toString().match(regex);
    if(matchNumberArray == null) { continue; }
    resultCount += matchNumberArray.length;
  }
  return resultCount;
}

console.log(problem3(13));

module.exports = problem3;
