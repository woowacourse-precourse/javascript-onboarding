function problem3(number) {
  var answer;

  let count = 0;

  // 숫자를 10으로 나눈 나머지가 3, 6, 9 가 있을 때 count ++
  // 30이 넘어가는 값을 확인하기 위해 각각의 자릿수에서도 3, 6, 9 가 있을 때 count ++
  function game_369(number) {
    for(let i = 1; i<=number; i++){
      let compare = 0;
      let value_i = i;
      while(value_i>0){
          compare = Math.floor(value_i%10);
          value_i = Math.floor(value_i/10);
          if(compare == 3 || compare == 6 || compare == 9) {
            count++;
          }
      }
    }
    return count;
  }
  
  const result = game_369(number);

  answer = result;

  return answer;
}

module.exports = problem3;
