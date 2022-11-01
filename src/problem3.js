function problem3(number) {
  //박수 치는 숫자 배열
  const clap = [3,6,9];
  //박수 친 숫자
  let count = 0;

  //박수 쳤을 때 count가 증가하는 함수
  for( let i=0; i<=number; i++){
    let numbers = i.toString().split("");
    for(let j=0; j<numbers.length; j++){
      if(clap.includes((Number(numbers[j])))){
        count++;
      }
    }
  };
  return count;
}

module.exports = problem3;
