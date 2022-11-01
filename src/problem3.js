function problem3(number) {
  let count = 0;

  // 1 ~ number 모든 수 검사
  for(let i=1;i<=number;i++){
    //문자열로 변환후 각 자리 수가 3, 6, 9인지 검사 
    (i+'').split('').map(digit=>{
      if(digit === '3' || digit === '6' || digit === '9')
        count++;
    })
  }

  return count;
}

module.exports = problem3;
