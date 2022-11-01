function problem1(pobi, crong) {
  let pobiLeftArr = (pobi[0]+'').split('');
  let pobiRightArr = (pobi[1]+'').split('');
  let crongLeftArr = (crong[0]+'').split('');
  let crongRightArr = (crong[1]+'').split('');

  function sum(arr){
    return arr.reduce((a, b) => Number(a) + Number(b), 0); 
  }
  function multiple(arr){
    return arr.reduce((a, b) => Number(a) * Number(b), 1);  
  }

  let pobiLeftMax = Math.max(sum(pobiLeftArr),multiple(pobiLeftArr));
  let pobiRightMax = Math.max(sum(pobiRightArr),multiple(pobiRightArr));
  let crongLeftMax = Math.max(sum(crongLeftArr),multiple(crongLeftArr));
  let crongRightMax = Math.max(sum(crongRightArr),multiple(crongRightArr));
  
  function makeScore(leftMax, rightMax){
    if(leftMax>rightMax){
      return leftMax;
    } return rightMax;
  }

 let pobiScore = makeScore(pobiLeftMax,pobiRightMax);
 let crongScore = makeScore(crongLeftMax,crongRightMax);
 
}

module.exports = problem1;
