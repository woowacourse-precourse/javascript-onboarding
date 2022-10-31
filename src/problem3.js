// 인자가 3,6,9 인지 확인하는 기능
function find369(number) {
  if (number === "3" || number === "6" || number === "9") return true;
  else return false;
}

function problem3(number) {
  var answer = 0;
  var numberToStringArray;

  // 1부터 number까지 손뼉을 몇 번 쳐야하는지 횟수를 세는 기능
  for (let i = 1; i <= number; i++) {
    // 숫자를 문자열 배열로 변환하는 기능
    numberToStringArray = String(i).split("");
    for (let j = 0; j < numberToStringArray.length; j++) {
      if (find369(numberToStringArray[j]) === true) answer++;
    }
  }

  return answer;
}

module.exports = problem3;
