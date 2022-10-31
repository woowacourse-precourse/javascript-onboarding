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

}

module.exports = problem1;
