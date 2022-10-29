// #1
// 생각보다 쉬운 문제라고 생각했는데, 생각보다 생각해야할 조건이 까다로웠다,
// 접근 방식에 대한 고민을 다 끝내놓고 코드를 짜야겠다, 안그러니더 헷갈리고 오래 걸렸다.
// 조금 더 잘 읽히고 조금 더 효율적인 코드를 짜려고 하다보니 더 힘들었던 것 같다.

//각 10^n의 자리수가 하나 올라갈 때마다 더해줄 수를 base라고 하고
//base 배열을 미리 구해두기 위한 함수
function calcClapBase(d) {
  //calcClapBase에서는 배열을 리턴하기 위해 미리 선언
  let result = new Array(d).fill(null);
  calcValue(d);

  //최대 차수의 base를 재귀함수로 구하고
  //최대차수 base를 구하는 과정 이미 구해지는 아래 차수 base값들을 채운다
  function calcValue(d) {
    //차수 d에 이상한 값이 오면 -1 리턴
    if (d < 0 || typeof d !== "number") return -1;

    //차수가 0이면 바로 [0] 리턴
    if (d === 0) {
      return (result = [0]);
    }
    //차수가 1 이상일때부터 재귀로 값 구하기
    if (d === 1) {
      if (result[1] == null) {
        result[0] = 0;
        result[1] = 3;
      }
      return 3;
    }
    if (2 <= d) {
      const prev = calcValue(d - 1);
      const dValue = 10 * prev + 3 * Math.pow(10, d - 1);
      if (result[d] == null) {
      }
      return dValue;
    }
  }
  return result;
}

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
    //차수는 인덱스 반대로 가니까 선언해서 사용
    const currentDegree = length - 1 - i;
    const c = Number(numToStr[i]);

    for (let j = 1; j <= c; j++) {
      const base = baseArray[currentDegree];
      answer += base;
      //3, 6, 9일땐 10^d만큼 더해준다
      if (j == 3 || j == 6 || j == 9) {
        answer += Math.pow(10, currentDegree);
      }
    }

    //3, 6, 9로 그 자리의 숫자가 끝나서 더 많이 더해지는 경우 빼준다.
    if (currentDegree !== 0 && c % 3 === 0) {
      const substract =
        Math.pow(10, currentDegree) - Number(numToStr.slice(i + 1, length)) - 1;
      answer -= substract;
    }
  }

  return answer;
}
module.exports = problem3;
