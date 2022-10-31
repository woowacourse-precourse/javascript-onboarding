function problem1(pobi, crong) {
  function isCorrectPage(pages) {
    return pages[0] + 1 === pages[1] ? true : false; 
  }

  function getScore(pages) {
    let leftScore = pages[0].toString().split("").map(Number).reduce((sum, v) => {
      sum[0] += v;
      sum[1] *= v;
      return sum;
    }, [0, 1]);
  
    let rightScore = pages[0].toString().split("").map(Number).reduce((sum, v) => {
      sum[0] += v;
      sum[1] *= v;
      return sum;
    }, [0, 1]);
    
    return Math.max(...leftScore,...rightScore);
  }

  if (!isCorrectPage(pobi) || !isCorrectPage(crong)) return -1; 

  let pobiScore = getScore(pobi);
  let crongScore = getScore(crong);

  return pobiScore > crongScore? 1 : (pobiScore < crongScore ? 2 : 0);
}

module.exports = problem1;
