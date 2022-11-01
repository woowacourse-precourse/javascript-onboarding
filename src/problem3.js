function problem3(number) {
  var answer;

  let count = 0;
  let newNumber;
  let remainder;

  // 숫자를 10으로 나눈 나머지가 3, 6, 9가 있거나, 30으로 나눈 나머지가 0 일 경우 count += 1

  function game_369(number, newNumber) {
    for(let i=1; i<=number; i++) {
        newNumber = Math.floor(i%10);
        console.log("newNumber : " + newNumber);
        if((newNumber == 3 || newNumber == 6 || newNumber == 9) || (i%30 == 0)) {
          count++;
          console.log("if문 내부 : " + newNumber, count);
      }
    }
    return count;
  }

  const result = game_369(number, newNumber);

  answer = result;
  
  return answer;
}

module.exports = problem3;
