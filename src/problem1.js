function problem1(pobi, crong) {
  var answer;
  let verifyPobiPage = verifyPage(pobi[0],pobi[1]);
  let verifycrongPage = verifyPage(crong[0],crong[1]);
  if(verifyPobiPage & verifycrongPage){
    let pobiLeftMax = getMax(pobi[0]);
    let pobiRightMax = getMax(pobi[1]);
    let crongLeftMax = getMax(crong[0]);
    let crongRightMax = getMax(crong[1]);
    let pobiScore = Math.max(pobiLeftMax,pobiRightMax);
    let crongScore = Math.max(crongLeftMax,crongRightMax);
    (pobiScore == crongScore) ? (answer = 0) : 
    (pobiScore > crongScore) ? (answer = 1) : (answer = 2)
  }
  else answer = -1;
  return answer;
}

function getMax(num){
  let sum = 0, mul = 1;
  do{
    sum += num % 10;
    mul *= num % 10;
    num = Math.floor(num/10)
  }while(num>0)

  return Math.max(sum,mul);
}

function verifyPage(leftPage,rightPage){
  if((leftPage % 2) !== 1 || (rightPage % 2) !==0 || (rightPage-leftPage) !== 1) return false;
  else return true;
}

module.exports = problem1;