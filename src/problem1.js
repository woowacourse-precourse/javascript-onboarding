function problem1(pobi, crong) {
  var answer;
  let arr = [];
  let plus;
  let multiply;
  let pobiLeftRigth = [];
  let pobiMax;
  let crongMax = [];
  pobi.map((index) => {
    arr = index
      .toString()
      .split("")
      .map((x) => parseInt(x));
    plus = arr.reduce((acc, cur) => acc + cur, 0);
    multiply = arr.reduce((acc, cur) => acc * cur, 1);
    pobiLeftRigth.push(plus > multiply ? plus : multiply);
  });
  pobiMax =
    pobiLeftRigth[0] > pobiLeftRigth[1] ? pobiLeftRigth[0] : pobiLeftRigth[1];

  console.log(pobiMax);
  return answer;
}

module.exports = problem1;

// 기능 목록
// 1. pobi의 왼쪽페이지의 합,곱과 오른쪽페이지의 합,곱을 구한 후, 큰 값을 찾는다.
// 2. pobi의 왼쪽페이지와 오른쪽페이지의 값중 큰 값을 본인의 점수로 한다.
// 3. crong 도 pobi와 같은 과정을 거친다.
// 4. 점수를 비교해 승자를 가린다.
