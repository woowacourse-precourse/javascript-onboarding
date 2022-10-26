function problem3(number) {
  var answer;
  return answer;

  //2. 반복문을 사용해 3부터 number까지 기능1 함수 동작하도록 작성.
  //3. 반환값들을 전부 더해 리턴.
}

function claps(number){
  const nums = [3,6,9];
  var clap=0;
  number.forEach((el)=>{if(nums.includes(el))clap++;});
  return clap;
}

module.exports = problem3;
