function problem3(number) {
  var answer = 0;

  //두번 이상 쓰는 값들 미리 할당하기
  const numToStr = number.toString();
  const length = numToStr.length;
  const degree = length - 1;

  // baseArray 생성
  const baseArray = calcClapBase(degree);

  //인자로 들어온 number에 대해서 손뼉치는 횟수 구하기 시작
  for (let i = 0; i < length; i++) {
    const currentDegree = length - 1 - i; //차수는 인덱스 반대로 가니까 선언해서 사용
    const c = Number(numToStr[i]);

    for (let j = 1; j <= c; j++) {
      const base = baseArray[currentDegree];
      answer += base;
      if (j == 3 || j == 6 || j == 9) {
        answer += Math.pow(10, currentDegree);
      } //3, 6, 9일땐 10^d만큼 더해준다
    }

    if (currentDegree !== 0 && c % 3 === 0) {
      const substract =
        Math.pow(10, currentDegree) - Number(numToStr.slice(i + 1, length)) - 1;
      answer -= substract;
    } //3, 6, 9로 그 자리의 숫자가 끝나서 base를 채울만큼 박수를 치지 못하는 경우 그만큼 빼준다.
  }

  return answer;
}

/**
 * 0부터 10^d-1 까지 치는 박수 숫자를 base라고 이름붙임.
 * ex) d = 1 , base = 3  /  d = 2, base = 60 ...
 * base 배열을 미리 구해두기 위한 함수
 * 최대 차수의 base를 재귀함수로 구하고, 그 과정에서 이미 구해지는 아래차수들의 base 값 또한 저장해서 리턴해준다.
 *
 * @param {number} d
 * @returns {number[]} 차수 0 ~ d 까지 clapBase 값을 가진 배열 리턴
 */
function calcClapBase(d) {
  let result = new Array(d).fill(null);
  calcValue(d);

  //clap 값으로 재귀함수 하기 위해. clacClapBase 안에 새로 함수를 하나 더 만들어서 활용
  function calcValue(d) {
    if (d < 0 || typeof d !== "number") return -1; //차수 d에 이상한 값이 오면 -1 리턴

    if (d === 0) {
      return (result = [0]);
    } //차수가 0이면 바로 [0] 리턴

    if (d === 1) {
      if (result[1] == null) {
        result[0] = 0;
        result[1] = 3;
      }
      return 3;
    }
    if (2 <= d) {
      const prev = calcValue(d - 1); //차수가 2 이상일때부터 재귀로 값 구하기
      const dValue = 10 * prev + 3 * Math.pow(10, d - 1);
      if (result[d] == null) {
      }
      return dValue;
    }
  }
  return result;
}

module.exports = problem3;
