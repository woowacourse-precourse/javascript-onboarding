const isValidPages = (pages) => {
  if(!Array.isArray(pages)) return false;
  if(pages.length !== 2) return false;

  const [left, right] = pages;
  if(typeof left !== 'number' || typeof right !== 'number') return false;
  if(left+1 !== right) return false;
  if(!(right >= 2 && right <= 400)) return false;
  return true;
}

const calculateDigitAddition = (num) => {

}

const calculateDigitMutiplication = (num) => {

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
