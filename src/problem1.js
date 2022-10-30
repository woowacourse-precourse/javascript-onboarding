const isValidPages = (pages) => {
  return true;
}

const getGameScore = (pages) => {
  return 100;
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
