function problem3(number) {

  if(number < 1 || number > 10000) return -1;

  let clap = 0;
  let i = 1;
  const reg365 = /3|6|9/g;

  // (i.toString().match(reg365) || []) -> 값이 있거나 배일이 초기화되면 변수에 할당/ 그렇지 않으면 변수를 빈 배열로 초기화
  for (i; i<=number; i++){
    clap += (i.toString().match(reg365) || []).length;
  }
  return clap;
}

module.exports = problem3;
