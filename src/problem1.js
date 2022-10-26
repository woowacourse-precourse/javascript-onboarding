function problem1(pobi, crong) {
  //예외사항 처리
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) {
    return -1;
  }
  //2~3 과정에서 가장 큰 점수를 구하는 함수
  function maxNumber(character) {
    const Pages = character.map((v) => v.toString().split('').map(Number));
    const numList = [];
    for (i of Pages) {
      numList.push(i.reduce((acc, v) => acc + v));
      numList.push(i.reduce((acc, v) => acc * v));
    }
    return Math.max(...numList);
  }
  //캐릭터별로 가장 큰 점수를 비교하여 결괏값 반환
  if (maxNumber(pobi) === maxNumber(crong)) {
    return 0;
  } else if (maxNumber(pobi) > maxNumber(crong)) {
    return 1;
  } else if (maxNumber(pobi) < maxNumber(crong)) {
    return 2;
  }
}
module.exports = problem1;
