function problem1(pobi, crong) {
  if (exceptionPage(pobi, crong)) return -1;

  const pobiScore = [];
  pobi.forEach(page => pobiScore.push(pageScore(page)));

  const crongScore = [];
  crong.forEach(page => crongScore.push(pageScore(page)));

  const pobiResultScore = Math.max(...pobiScore);
  const crongResultScore = Math.max(...crongScore);

  return gameWinner(pobiResultScore, crongResultScore);        
}

function exceptionPage(pobi, crong) {
  if (pobi[1] === 1 || crong[1] === 1 || pobi[0] === 400 || crong[0] === 400) return true; // 시작면으로 끝나거나 끝면으로 시작 할 경우
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return true; // 페이지가 순서대로 없을 경우
}

function pageScore(page) {
  const pageSplit = page.toString().split('');
  const add = pageSplit.reduce((fir, idx) => fir + idx/1, 0);
  const mul = pageSplit.reduce((fir, idx) => fir * idx/1, 1);

  return Math.max(add, mul);
}

function gameWinner(pobiResultScore, crongResultScore) {
  let winner = 0;
  if (pobiResultScore > crongResultScore) {
    winner = 1;
  } else if (pobiResultScore < crongResultScore) {
    winner = 2;
  } else if (pobiResultScore === crongResultScore) {
    winner = 0;
  }  

  return winner;
}

module.exports = problem1;
