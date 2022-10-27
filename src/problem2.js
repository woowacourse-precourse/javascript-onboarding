function problem2(cryptogram) {
  let answer;
  let array = [...cryptogram]; // 배열로

  //문자열로 바꿔준 array배열을 문자열로 다시 만들어줌
  answer = cryptoSlice(array).join("");;
  return answer;
}

function cryptoSlice(array) {
  let count = 1; // 연속되는 중복문자 카운트
  let check = 0; // 반복문 종료조건을 위한 확인변수
  
  while(true) {
    // check 횟수가 문자열의 길이가 같거나 커지면 멈춤
    if(check >= array.length)
      break;

    for(let i = 0; i < array.length - 1; i++) {
      for(let j = 1; j < array.length; j++) {
        //같으면 중복을 확인하는 변수인 count의 값을 증가시키면서, 중복이 없음을 확인하는 check의 값을 0으로
        if(array[i] === array[i + j]) {
          count++;
          check = 0;
        }
        //break를 바로 걸어주는 이유는, break를 걸지 않고 카운팅하면 연속적인 중복문자가 아닌 중복문자까지 체크됨
        else {
          check++;
          break;
        }
      }

      //해당 범위 splice
      if(count > 1)
        array.splice(i, count);
      
      count = 1;
    }
  }

  return array;
}

module.exports = problem2;
