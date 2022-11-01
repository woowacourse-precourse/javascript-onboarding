function problem3(number) {
  let clapCount = 0;
  const clapRegExp = /[369]/g;

  for (let index = 0; index <= number; index++) {
    clapCount = clapCount + (String(index).match(clapRegExp) || []).length;
  }
  
  return clapCount;
}

module.exports = problem3;
