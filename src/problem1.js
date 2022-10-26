//TODO list
// - [x] 책을 임의로 펼친다. - 함수에 인자를 적용받는다. - 구현필요 x

// left right 구분
// - [x] left right 배열을 입력받고 둘을 나누어준다.

// findPageIndex
// - [x] 페이지값의 length를 알아낸다
// - [x] 페이지값의 각 length값을 이용하여 자릿수의 값을 알아낸다

// 합과 곱
// - [x] 해당하는 왼쪽 페이지 번호의 각 자리 숫자를 모두 더한다.
// - [x] 해당하는 왼쪽 페이지 번호의 각 자리 숫자를 모두 곱한다.
// - [x] 해당하는 오른쪽 페이지 번호의 각 자리 숫자를 모두 더한다.
// - [x] 해당하는 오른쪽 페이지 번호의 각 자리 숫자를 모두 곱한다.

// findMax
// - [x] 왼쪽 오른쪽 가장 큰 수를 구해서 pobi, crong에 각각 할당해 준다.

// compareValues
// - [x] pobi가 가장 크다면 1을 return한다.
// - [x] crong이 가장 크다면 2를 return한다.
// - [x] 둘다 값이 같다면 0을 return한다.
// - [x] 만약 왼쪽 오른쪽 페이지 값이 1이상 차이나면 예외처리인 -1을 return한다.

// 이미 입력값이 들어올 때 시작 면과 마지막 면이 들어오지 않으니 따로 구현 필요 x
// - [x] 시작 면이 나오지 않게한다. - 1제외
// - [x] 마지막 면이 나오지 않게한다. - 400제외

function problem1(pobi, crong) {
  const dividePageValues = (pages) => {
    const leftpage = pages[0];
    const rightpage = pages[1];

    let leftvalue = findPageIndex(leftpage);
    let rightvalue = findPageIndex(rightpage);

    return leftvalue > rightvalue ? leftvalue : rightvalue;
  };

  const findPageIndex = (page) => {
    const stringvalue = String(page);
    let sum = 0;
    let mul = 1;

    for (let index = 0; index < stringvalue.length; index++) {
      sum += Number(stringvalue[index]);
      mul *= Number(stringvalue[index]);
    }

    return sum > mul ? sum : mul;
  };

  const pobiMax = findPageValues(pobi);
  const crongMax = findPageValues(crong);

  let answer;

  if (check == true) {
    answer = -1;
    return answer;
  }
  if (pobiMax > crongMax) {
    answer = 1;
    return answer;
  }
  if (pobiMax < crongMax) {
    answer = 2;
    return answer;
  }
  if (pobiMax == crongMax) {
    answer = 0;
    return answer;
  }
}

module.exports = problem1;
