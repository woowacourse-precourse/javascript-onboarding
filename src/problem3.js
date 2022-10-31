function problem3(number) {
  var answer;
  if (!validType(number)) throw new Error("잘못된 타입입니다.");
  if(!validRange(number)) throw new Error("잘못된 범위입니다.");
  
  answer = countTotalClap(number);
  return answer;
}


/**
 * 전체 손뼉 횟수 계산 메소드
 * @param {number} number 입력으로 주어지는 숫자
 * @return {number} 전체 손뼉 횟수
 */
function countTotalClap(number) {
  const totalClapArray = new Array();
  totalClapArray[0] = 0

  for (let i = 1; i <= number; i++) {
    totalClapArray[i] = totalClapArray[i-1] + countSpecificClap(i)
  }

  const totalClap = totalClapArray[number];

  return totalClap;
}

/**
 * 특정 숫자의 손뼉 횟수를 구하는 메소드
 * @param {number} number 손뼉 횟수를 구하고자 하는 숫자
 * @return {number} 특정 숫자의 손뼉 횟수
 */
function countSpecificClap(number) {
  const number_digits = seperateDigits(number);
  let specificClap = 0;
  number_digits.forEach((item) => { if (checkMultiple(item)) specificClap++ });
  
  return specificClap;
}

/**
 * number를 각 자리로 분리하는 메소드
 * @param {number} number 분리하고자 하는 숫자
 * @return {number[]} number를 각 자리로 분리한 배열
 */
function seperateDigits(number) {
  const digits = [];

  while (number > 0) {
    digits.push(number % 10);
    number = parseInt(number / 10);
  }

  return digits;
}

/**
 * 특정 숫자의 박수 여부 확인 메소드
 * @param {number} number 숫자의 박수 여부
 * @return {boolean} boolean
 */
function checkMultiple(number) {
  return number % 3 == 0 && number > 0;
}


// 예외 처리
function validRange(number) {
  return (1 <= number && number <= 10000 && number % 1 == 0);
}

function validType(number) {
  return typeof (number) == "number";
}

module.exports = problem3;