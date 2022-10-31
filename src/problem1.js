function problem1(pobi, crong) {
  
  const [pobileft, pobiright] = pobi;
  const [crongleft, crongright] = crong;

  if(pobileft-pobiright !== -1 || crongleft-crongright !== -1 ) return -1;

  const sum = (page) => {
    const Page = String(page).split('').reduce((a,b) => Number(a) + Number(b), 0 );
    return Page;
  };
  const multiply = (page) => {
    const Page = String(page).split('').reduce((a,b) => Number(a) * Number(b), 1 );
    return Page;
  };

  const pobiBest = Math.max(sum(pobileft),sum(pobiright),multiply(pobileft),multiply(pobiright));
  const crongBest = Math.max(sum(crongleft),sum(crongright),multiply(crongleft),multiply(crongright));

  if(pobiBest>crongBest) return 1;
  else if (pobiBest<crongBest) return 2;
  else return 0;

}

module.exports = problem1;
