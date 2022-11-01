function problem1(pobi, crong) {
  if(handleException(pobi, crong)) {
    return -1;
  }

  pobi = findMaxNumber(pobi);
  crong = findMaxNumber(crong);

  if(pobi > crong) {
    return 1;
  } else if(pobi < crong) {
    return 2;
  } else {
    return 0;
  }
}
module.exports = problem1;



function findMaxNumber(pages) {
  const numbers = [];
  for(let i = 0; i < pages.length; i++) {
    const numArr = String(pages[i]).split('').map(item => +item);
    numbers.push(numArr.reduce((a, b) => a + b));
    numbers.push(numArr.reduce((a, b) => a * b));
  }
  const maxNum = Math.max(...numbers);
  return maxNum;
}

function handleException(pobi, crong) {
  for(const pages of [pobi, crong]) {
    for(let i = 0; i < pages.length; i++) {
      if(pages[i] < 1 || pages[i] > 400) return -1;
    }
  
    const left = pages[0];
    const right = pages[1];
    if(right !== left + 1) return -1;
  
    if(left % 2 === 0 || right % 2 !== 0) return -1;
  }
}