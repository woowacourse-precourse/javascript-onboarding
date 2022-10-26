function problem1(pobi, crong) {
  if(isValid(pobi) || isValid(crong)) return -1;

  const scorePobi = getScore(pobi);
  const scoreCrong = getScore(crong);


}

function isValid(page){
  if(page[0]%2!==1 || page[1]%2!==0) return true;
  else if(page[1]!==page[0]+1) return true;
  else if(page[0]===1 || page[1]===400) return true;
  else return false;
}

function getScore(page){
  const leftPage = page[0].toString().split('');
  const rightPage = page[1].toString().split('');

  const leftResult = [leftPage.reduce((sum, el)=>{return sum+Number(el)},0), leftPage.reduce((sum, el)=>{return sum*Number(el)},1)];
  const rightResult = [rightPage.reduce((sum, el)=>{return sum+Number(el)},0), rightPage.reduce((sum, el)=>{return sum*Number(el)},1)];
  return Math.max(...[...leftResult, ...rightResult]);
}

module.exports = problem1;
