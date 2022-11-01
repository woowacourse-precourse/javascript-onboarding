
// user의 점수를 구해주는 기능
function score(userName){
  let scoreList =[];
  let leftsum = 0;
  let rightsum = 0;
  let leftmultiple = 1;
  let rightmultiple = 1;
  

  const strNum = userName.map(v=>String(v));
  const leftpageNums = strNum[0].split(''); 
  const rightpageNums = strNum[1].split(''); 

  for(let i =0;i<leftpageNums.length;i++){
    leftsum += parseInt(leftpageNums[i]);
    leftmultiple *= parseInt(leftpageNums[i]);
  }
  
  for(let j =0;j<rightpageNums.length;j++){
    rightsum += parseInt(rightpageNums[j]);
    rightmultiple *= parseInt(rightpageNums[j]);
  }

  scoreList.push(leftsum);
  scoreList.push(rightsum);
  scoreList.push(leftmultiple);
  scoreList.push(rightmultiple);
  
  return Math.max(...scoreList)
}

// user의 유효성 검사
function isVaild(userName){

  if((userName[0] <=1 || userName[0] >=400) || (userName[1] <=1 || userName[1] >=400) ){
    return false;
  } else if(userName[1]-userName[0] != 1){
    return false;
  } else {
    return true;
  }
}

function problem1(pobi, crong) {
  if(isVaild(pobi) === false || isVaild(crong) === false){
    return -1;
  } else if(score(pobi) > score(crong)){
    return 1;
  } else if(score(pobi) < score(crong)){
    return 2;
  } else if(score(pobi) === score(crong)){
    return 0;
  }

}


module.exports = problem1;
