const getMax = (arr) => {
  let maxNum = 0;
  let plus = 0;
  let multiple = 1;

  // cf. 왼쪽/오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
  for (let i=0; i<2; i++) {
    let digit;
    while (arr[i] > 0) {
      digit = arr[i] % 10;
      plus += digit;
      multiple *= digit;
      arr[i] = Math.floor(arr[i] / 10);
    }
    maxNum = Math.max(maxNum, plus, multiple);
  }
  
  return maxNum;
}

const isValid = (arr) => {
  // cf. 시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다. (포비와 크롱이 페이지 번호가 1부터 시작되는 400 페이지의 책을 주웠다.)
  // cf. pobi와 crong의 길이는 2이다.
  // cf. pobi와 crong에는 [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있다.
  if (arr[0] === 1 || arr[1] === 400 || arr.length !== 2 || arr[0] % 2 !== 1 || arr[1] % 2 !== 0 || arr[1] - arr[0] !== 1) return false;
  return true;
}

function problem1(pobi, crong) {
  // cf. 예외사항은 -1로 return
  if (!isValid(pobi) || !isValid(crong)) return -1;

  // cf. 점수를 비교해 가장 높은 사람이 게임의 승자가 된다.
  const pobiMax = getMax(pobi);
  const crongMax = getMax(crong);

  // cf. 포비가 이긴다면 1, 크롱이 이긴다면 2, 무승부는 0으로 return
  return pobiMax > crongMax ? 1 : (crongMax > pobiMax ? 2 : 0);
}

module.exports = problem1;