function problem1(pobi, crong) {
  var answer;
  return answer;
}

function maxNum(array){
  let maxNum;
  const leftPage = array[0].toString().split(''); 
  const rightPage = array[1].toString().split(''); 
  let addLeftNum = 0;
  let multipleLeftNum = 1;
  let addRightNum = 0;
  let multipleRightNum = 1;
  for (i=0; i<leftPage.length ; i++){  
    addLeftNum += parseInt(leftPage[i]);
    multipleLeftNum *= parseInt(leftPage[i]);
  }
  for (i=0; i<rightPage.length ; i++){  
    addRightNum += parseInt(rightPage[i]);
    multipleRightNum *= parseInt(rightPage[i]);
  }
  maxNum = Math.max(addLeftNum, addRightNum, multipleLeftNum, multipleRightNum)
  return maxNum;
}

module.exports = problem1;
