function isValidInput(pageArr){
  if(
    checkArrLength(pageArr) 
    && checkPageRange(pageArr) 
    && checkPageNum(pageArr)
    ){
    return true;
  }  
}

function checkArrLength(pageArr){
  if(pageArr.length==2){
    return true;
  }
}

function checkPageRange(pageArr){
  const [left, right] = pageArr;
  if(left >= 1 && right <= 400){
    return true;
  }
}

function checkPageNum(pageArr){
  const [left, right] = pageArr;
  if(left + 1 == right && left%2 == 1 && right%2 == 0){
    return true;
  }
}

function getMaxNum(pageArr){
  const [left, right] = pageArr;
  
  maxNum = Math.max(
    left.toString().split('').reduce((prev,curr)=> Number(prev) + Number(curr)),
    left.toString().split('').reduce((prev,curr)=> Number(prev) * Number(curr)),
    right.toString().split('').reduce((prev,curr)=> Number(prev) + Number(curr)),
    right.toString().split('').reduce((prev,curr)=> Number(prev) * Number(curr)),
  );
  return maxNum;
}

function problem1(pobi, crong) {
  var answer;

  if(!isValidInput(pobi) || !isValidInput(crong)){
    return -1;
  }

  const pobiScore = getMaxNum(pobi);
  const crongScore = getMaxNum(crong);

  if(pobiScore > crongScore){
    answer = 1;
  } else if(pobiScore < crongScore){
    answer = 2;
  } else{
    answer = 0;
  }

  return answer;
  
}

module.exports = problem1;