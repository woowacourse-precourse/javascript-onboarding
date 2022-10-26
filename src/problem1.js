function userMax(userPages){
  let resultUser = [];

  // 기능 1: 페이지 각 자리수의 합, 곱 구하기
  userPages.forEach(function(item){
    let tempSum = 0;
    let tempMul = 1;
    let page = item.toString();
    
    for(let i = 0; i < page.length; i++){
      tempSum += parseInt(page[i])
      tempMul *= parseInt(page[i])
    }

    resultUser.push(tempSum);
    resultUser.push(tempMul);
  });

  return Math.max(...resultUser);

}


function problem1(pobi, crong) {
  var answer;

  //예외처리 
  if (Math.abs(pobi[0] - pobi[1]) != 1 || Math.abs(crong[0] - crong[1]) != 1){
    return -1;
  }
  //기능 2: 각 인원의 최대값 비교 및 출력
  let maxPobi = userMax(pobi);
  let maxCrong = userMax(crong);

  if (maxPobi > maxCrong){
    answer = 1;
  }
  else if(maxPobi === maxCrong){
    answer = 0;
  }
  else{
    ansewr = 2;
  }


  return answer;
}

module.exports = problem1;
