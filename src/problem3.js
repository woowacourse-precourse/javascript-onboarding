const _ = require("./myFunction.js");

/* 
  기능 목록
  - 1부터 number까지의 수 배열 생성하기
  - 1자리 수로 분해한 배열 만들기
  - 분해한 수가 갖는 3, 6, 9의 개수 구하기
  - 구한 개수 모두 더하기

  아이디어
  - 규칙을 찾아 시간 복잡도 개선
*/

function 개수_새기(배열, 찾을_원소) {
  return 배열.filter((원소) => 원소 === 찾을_원소).length;
}

function problem3(수) {
  const 분해한_수_배열 = _.연속_값_배열_만들기(1, 수, 1).map(_.수_분해하기);

  return _.더하기([
    _.더하기(분해한_수_배열.map((분해한_수) => 개수_새기(분해한_수, 3))),
    _.더하기(분해한_수_배열.map((분해한_수) => 개수_새기(분해한_수, 6))),
    _.더하기(분해한_수_배열.map((분해한_수) => 개수_새기(분해한_수, 9))),
  ]);
}

module.exports = problem3;
