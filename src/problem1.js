function maxNumber(pageArray){
  /**
   * pageArray 를 매개변수로 받아
   * 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해서 가장 큰수 구하고,
   * 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해서 가장 큰 수를 구한 후
   * 두 값을 비교해서 가장 큰 수를 return
   * */
  const tempPageArr = [];
  const tempResultArr = [];

  pageArray.forEach( page => {
    tempPageArr.push((page.toString()).split(''));
  });

  for(let i = 0 ; i < 2 ; i++ ){
    let add = 0 ;
    let multiple = 1;
    tempPageArr[i].forEach( n => {
      add += Number(n);
      multiple *= Number(n);
    });

    tempResultArr.push(add);
    tempResultArr.push(multiple);
  }
  return Math.max(...tempResultArr);
}

function problem1(pobi, crong) {
  /**
   * page 1 ~ 400
   * 최대 자릿수 (3) 최소 자릿수 (1)
   * 포비 승 1 크롱 승 2 무승부 0 예외사항 -1
   * 예외사항 ( 99, 102 ) 처럼 이어진 숫자 X
   * */

  // 예외사항 체크
  if(pobi[1] !== pobi[0] + 1){
    return -1;
  }

  if(crong[1] !== crong[0] +1){
    return -1;
  }

  const crongMax = maxNumber(crong);
  const pobiMax = maxNumber(pobi);

  return crongMax === pobiMax ? 0 : crongMax > pobiMax ? 2 : 1 ;
}

module.exports = problem1;
