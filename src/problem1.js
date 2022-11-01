const isValidPages = (pages) => {
  if(!Array.isArray(pages)) return false;
  if(pages.length !== 2) return false;

  const [left, right] = pages;
  if(typeof left !== 'number' || typeof right !== 'number') return false;
  if(left+1 !== right) return false;
  if(!(right >= 2 && right <= 400)) return false;
  return true;
}

const getDigits = (num) => {
  const nums = [];
  while(num !== 0){
    nums.push(num%10);
    num = Math.floor(num / 10);
  }

  return nums;
}

const calculateDigitAddition = (num) => {
  const digits = getDigits(num);
  return digits.reduce((pre, cur) => pre + cur, 0);
}

const calculateDigitMutiplication = (num) => {
  const digits = getDigits(num);
  return digits.reduce((pre, cur) => pre * cur, 1);
}

const getGameScore = (pages) => {
  const scores= [];
  pages.forEach((page)=>{
    scores.push(calculateDigitAddition(page));
    scores.push(calculateDigitMutiplication(page));
  })
  return Math.max(...scores);
}

function problem1(pobi, crong) {
  if(!isValidPages(pobi)) return -1;
  if(!isValidPages(crong)) return -1;

  var answer;

  const pobiScore = getGameScore(pobi);
  const crongScore = getGameScore(crong);

  if(pobiScore === crongScore) {
    answer = 0;
  } else {
    answer = pobiScore > crongScore ? 1 : 2;
  }

  return answer;
}

module.exports = problem1;
