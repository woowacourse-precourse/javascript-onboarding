function problem3(number) {
  let count = 0;
  let regexp = /[3|6|9]/g;

  for (let i = 0; i <= number; i++) {
    let match = ("" + i).match(regexp); // match에 i의 증가값 중 regexp에 해당하는 값을 넣어줌
    if (match != undefined) count += match.length; //undefined, null이 아닐 때 count 증가
  }
  return count;
}

module.exports = problem3;
