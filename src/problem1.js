function getMaxScore(left,right){
  let arr1 = left.toString().split("").map(x=>Number(x));
  let arr2 = right.toString().split("").map(x=>Number(x));
  let leftMax = Math.max(arr1.reduce((acc,cur)=>acc+cur,0),arr1.reduce((acc,cur)=>acc*cur,1));
  let rightMax = Math.max(arr2.reduce((acc,cur)=>acc+cur,0),arr2.reduce((acc,cur)=>acc*cur,1));

  if(leftMax > rightMax) return leftMax;
  else if(rightMax> leftMax) return rightMax;
  else return 0;
}
function isValid(page){
  if(page[1]-page[0] !== 1 || page[0] %2 === 0 || page[1] %2 === 1 || page[0] < 1 || page[1] > 400) return -1;
}

function problem1(pobi, crong) {

  if(isValid(pobi) === -1 || isValid(crong) === -1) return -1;
  let pScore = getMaxScore(pobi[0],pobi[1]);
  let cScore = getMaxScore(crong[0],crong[1]);
  if(pScore > cScore){
    return 1;
  }else if(cScore > pScore){
    return 2;
  }else if(cScore === pScore){
    return 0;
  }
}

module.exports = problem1;
