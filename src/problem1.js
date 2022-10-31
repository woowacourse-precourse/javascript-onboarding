function problem1(pobi, crong) {
  // 입력: 길이가 2인 1차원 배열 2개 (pobi===[[131, 132]], crong===[[211, 212]] )
  // 출력:  포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1 리턴
  // 해야할 일 :
  //1. 포비와 크롱의 각각 점수 계산 => 각 페이지를 split 메서드를 사용해서 숫자로 변환한 뒤 세 수를 더하거나 곱해서 더 큰 숫자 뽑아내기
  //2. 포비와 크롱의 점수 비교하여 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0, 예외사항은 -1 리턴
  //3. 예외사항은 입력으로 들어온 배열의 페이지가 연속하는 숫자가 아니거나, 배열의 0번째가 홀수, 1번째가 짝수가 아니거나, [1,2], [399,400]일때
  let answer;

  if (isValid(pobi) === false || isValid(crong) === false) {
    return -1;
  }

  let pobiLeftPage = String(pobi[0]).split("");
  let pobiRightPage = String(pobi[1]).split("");
  let crongLeftPage = String(crong[0]).split("");
  let crongRightPage = String(crong[1]).split("");

  let pobiScore = Math.max(maxnum(pobiLeftPage), maxnum(pobiRightPage));
  let crongScore = Math.max(maxnum(crongLeftPage), maxnum(crongRightPage));

  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore < crongScore) {
    answer = 2;
  } else if (pobiScore === crongScore) {
    answer = 0;
  }

  return answer;
}

function isValid(arr) {
  if (arr[0] === 1 || arr[0] === 399 || arr[0] % 2 === 0) {
    return false;
  } else if (arr[1] % 2 === 1) {
    return false;
  } else if (arr[0] + 1 !== arr[1]) {
    return false;
  }
  return true;
}
function maxnum(arr) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < arr.length; i++) {
    a = a + Number(arr[i]);
    b = b * Number(arr[i]);
  }
  return Math.max(a, b);
}
module.exports = problem1;
