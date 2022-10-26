function problem1(pobi, crong) {
  
  let pobiLeft=String(pobi[0]);
  let pobiRight=String(pobi[1]);
  let crongLeft=String(crong[0]);
  let crongRight=String(crong[1]);
  let pobiLeftResult =Calculate(pobiLeft)
  let pobiRightResult= Calculate(pobiRight)
  let crongLeftResult =Calculate(crongLeft)
  let crongRightResult= Calculate(crongRight)
  let pobiResult = Compare(pobiLeftResult,pobiRightResult);
  let crongResult = Compare(crongLeftResult,crongRightResult)
  

  if(pobi[1]-pobi[0]!==1 || crong[1]-crong[0]!==1){
    return -1
  }
  else if(pobiResult > crongResult){
    return 1;
  }
  else if(pobiResult < crongResult){
    return 2;
  }
  else return 0;
}


function Calculate(data){
  let dataAddResult = 0;
  let dataMulResult =1;
  let dataResult
  
  for(let i=0;i<data.length;i++){
    dataAddResult+= Number(data[i]);
    dataMulResult*= Number(data[i]);
  }
  if(dataAddResult >= dataMulResult){
    dataResult= dataAddResult
  }
  else{
    dataResult = dataMulResult
  }
  return dataResult
}

function Compare(data1,data2){
  if(data1 > data2){
    dataResult = data1
  }
  else{
    dataResult = data2
  }
  return dataResult
}

module.exports = problem1;




// 처음에 짠 코드 너무 길어서 가독성이 떨어진다 어떻게 하면 줄이지?
// function problem1(pobi, crong) {
  
//   let pobiResult = 0;
//   let pobiLeft=String(pobi[0]);
//   let pobiLeftAddResult = 0;
//   let pobiLeftMulResult =1;
//   let pobiLeftResult
  
//   for(let i=0;i<pobiLeft.length;i++){
//     pobiLeftAddResult+= Number(pobiLeft[i]);
//     pobiLeftMulResult*= Number(pobiLeft[i]);
//   }
//   if(pobiLeftAddResult >= pobiLeftMulResult){
//     pobiLeftResult= pobiLeftAddResult
//   }
//   else{
//     pobiLeftResult = pobiLeftMulResult
//   }

//   let pobiRight=String(pobi[1]);
//   let pobiRightAddResult = 0;
//   let pobiRightMulResult =1;
//   let pobiRightResult

//   for(let i=0;i<pobiRight.length;i++){
//     pobiRightAddResult+= Number(pobiRight[i]);
//     pobiRightMulResult*= Number(pobiRight[i]);
//   }
//   if(pobiRightAddResult >= pobiRightMulResult){
//     pobiRightResult= pobiRightAddResult
//   }
//   else{
//     pobiRightResult = pobiRightMulResult
//   }
//   if(pobiLeftResult > pobiRightResult){
//     pobiResult = pobiLeftResult
//   }
//   else{
//     pobiResult = pobiRightResult
//   }



//   let crongResult = 0;

//   let crongLeft=String(crong[0]);
//   let crongLeftAddResult = 0;
//   let crongLeftMulResult =1;
//   let crongLeftResult

//   for(let i=0;i<crongLeft.length;i++){
//     crongLeftAddResult+= Number(crongLeft[i]);
//     crongLeftMulResult*= Number(crongLeft[i]);
//   }
//   if(crongLeftAddResult >= crongLeftMulResult){
//     crongLeftResult= crongLeftAddResult
//   }
//   else{
//     crongLeftResult = crongLeftMulResult
//   }

//   let crongRight=String(crong[1]);
//   let crongRightAddResult = 0;
//   let crongRightMulResult =1;
//   let crongRightResult
//   //98
//   for(let i=0;i<crongRight.length;i++){
//     crongRightAddResult+= Number(crongRight[i]);
//     crongRightMulResult*= Number(crongRight[i]);
//   }

//   if(crongRightAddResult >= crongRightMulResult){
//     crongRightResult= crongRightAddResult
//   }
//   else{
//     crongRightResult = crongRightMulResult
//   }
  
//   if(crongLeftResult > crongRightResult){
//     crongResult = crongLeftResult
//   }
//   else{
//     crongResult = crongRightResult
//   }

//   if(pobi[1]-pobi[0]!==1 || crong[1]-crong[0]!==1){
//     return -1
//   }
//   if(pobiResult > crongResult){
//     return 1;
//   }
//   else if(pobiResult < crongResult){
//     return 2;
//   }
//   else return 0;
// }