function slicePage(pageNum){
  let pageString = String(pageNum);
  let leftPageNum = Number(pageString[0]);
  let rightPageNum = Number(pageString[1]);
  
  return calPlusMinus(leftPageNum, rightPageNum);
}

function maxCalPlusMinus(leftPageNum, rightPageNum){
  return max(leftPageNum + rightPageNum, leftPageNum * rightPageNum);
}


function problem1(pobi, crong) {
    pobi.forEach(slicePage);
    crong.forEach(slicePage);
}

  var answer;
  return answer;
}

module.exports = problem1;
