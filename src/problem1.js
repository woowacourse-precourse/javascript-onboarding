// 기능정의
// 1.예외처리
//    ㄴ 번호 오류 (a.홀짝수 오류  b.페이지 오류)
//    ㄴ 오류 x  =>  정상 진행
// 2. 숫자 더하기 or 곱하기 진행 함수 만들기 =>  더 큰 수를 값으로 저장
// 3. 크롱 포비 값 비교 후 0,1,2,-1 return

function whatMax(firstArr, secondArr) {
  // 2번 과정
  var Plus = 0;
  var Multi = 1;
  var max = 0;

  for (let i = 0; i < firstArr.length; i++) {
    Plus += parseInt(firstArr[i]);
    Multi *= parseInt(firstArr[i]);
  }
  for (let i = 0; i < secondArr.length; i++) {
    Plus += parseInt(secondArr[i]);
    Multi *= parseInt(secondArr[i]);
  }

  if (Plus >= Multi) {
    max = Plus;
  } else {
    max = Multi;
  }

  return max;
}

function problem1(pobi, crong) {
  var answer;

  var pobiFirst = String(pobi[0]).split("");
  var pobiSecond = String(pobi[1]).split("");
  var crongFirst = String(crong[0]).split("");
  var crongSecond = String(crong[1]).split("");

  var pobiMax = 0;
  var crongMax = 0;

  if (pobi[1] - pobi[0] == 1 && crong[1] - crong[0] == 1) {
    // 1번 과정
    pobiMax = whatMax(pobiFirst, pobiSecond);
    crongMax = whatMax(crongFirst, crongSecond);

    if (crongMax > pobiMax) {
      // 3번 과정
      answer = 2;
    } else if (crongMax == pobiMax) {
      answer = 0;
    } else {
      answer = 1;
    }
  } else {
    // 1번 과정
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
