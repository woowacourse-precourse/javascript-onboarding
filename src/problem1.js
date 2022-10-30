

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


function problem1(pobi, crong) {
  if(score(pobi)>score(crong)){
    return 1;
  } else if(score(pobi)<score(crong)){
    return 2;
  } else if(score(pobi) === score(crong)){
    return 0;
  } else {
    return -1
  }
  


module.exports = problem1;
