//1. 1부터 number까지 순회
//2. 순회하는 숫자 한자리씩 분리
//3. 순회하는 숫자에 3, 6, 9 들어가있을 때마다 counter에 +1

function problem3(number) {
  let answer;
  let counter = 0;

  for (let num = 1; num <= number; num++) {
    const separatedNumArr = String(num).split('').map(Number);
    
    for (let i = 0; i < separatedNumArr.length; i++) {
      if (separatedNumArr[i] === 3 || separatedNumArr[i] === 6 || separatedNumArr[i] === 9) { 
        counter++;
      }
    }
  }
  
  answer = counter
  return answer;
}

module.exports = problem3;
