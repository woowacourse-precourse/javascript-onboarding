function problem1(pobi, crong) {
  if(pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1){
      return -1;
  }
  else if(pobi[0] % 2 === 0 || crong[0] % 2 === 0){
      return -1;
  }
  else if(pobi[1] % 2 === 1 || crong[1] % 2 === 1){
      return -1;
  }
  function getScore(page){
    score = [0,1,0,1]
        for(let i = 0; i < page.length; i++){
            while(page[i] > 0){
                score[i * 2] += page[i] % 10;
                score[i * 2 + 1] *= page[i] % 10;
                page[i] = Math.floor(page[i] / 10); 
            }
        }
    return Math.max(...score);
  }
  let gameResult = getScore(pobi) - getScore(crong);
  
  return gameResult > 0 ? 1 :
         gameResult < 0 ? 2 : 0;
}

module.exports = problem1;
