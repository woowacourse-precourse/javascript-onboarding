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

  return answer;
}

module.exports = problem1;
