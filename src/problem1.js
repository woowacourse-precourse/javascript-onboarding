function problem1(pobi, crong) {

  // 왼쪽 페이지와 오른쪽 페이지의 차이가 1이 아닐 경우(예외처리)
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1
  };

  // 배열을 잘라서 보관
  let pobiArr = pobi.join('').split('');
  let crongArr = crong.join('').split('');

  // 포비의 왼쪽 페이지 가장 큰 값 저장
  let pobiLeftMax = Math.max(
    pobiArr.slice(0, pobiArr.length / 2).reduce((acc, cur) => parseInt(acc) + parseInt(cur)),
    pobiArr.slice(0, pobiArr.length / 2).reduce((acc, cur) => parseInt(acc) * parseInt(cur)),
  );

  // 포비의 오른쪽 페이지 가장 큰 값 저장
  let pobiRightMax = Math.max(
    pobiArr.slice(pobiArr.length / 2).reduce((acc, cur) => parseInt(acc) + parseInt(cur)),
    pobiArr.slice(pobiArr.length / 2).reduce((acc, cur) => parseInt(acc) * parseInt(cur)),
  );

  // 크롱의 왼쪽 페이지 가장 큰 값 저장
  let crongLeftMax = Math.max(
    crongArr.slice(0, crongArr.length / 2).reduce((acc, cur) => parseInt(acc) + parseInt(cur)),
    crongArr.slice(0, crongArr.length / 2).reduce((acc, cur) => parseInt(acc) * parseInt(cur)),
  );

  // 크롱의 오른쪽 페이지 가장 큰 값 저장
  let crongRightMax = Math.max(
    crongArr.slice(crongArr.length / 2).reduce((acc, cur) => parseInt(acc) + parseInt(cur)),
    crongArr.slice(crongArr.length / 2).reduce((acc, cur) => parseInt(acc) * parseInt(cur)),
  );

  // 포비의 왼쪽, 오른쪽 페이지 중 가장 큰 값
  let pobiMax = Math.max(pobiLeftMax, pobiRightMax);

  // 크롱의 왼쪽, 오른쪽 페이지 중 가장 큰 값
  let crongMax = Math.max(crongLeftMax, crongRightMax);

  // 포비와 크롱이 같을 경우 0점
  if (pobiMax === crongMax) {
    return 0
  }
  // 포비가 크롱보다 클 경우 1점
  else if (pobiMax > crongMax) {
    return 1
  }
  // 포비가 크롱보다 작을 경우 2점
  else if (pobiMax < crongMax) {
    return 2
  }
}

module.exports = problem1;
