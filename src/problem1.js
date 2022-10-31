function problem1(pobi, crong) {

  // 결괏값을 담아줄 변수 선언
  let result = 0;

  // 예외사항 
  if(pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    return -1;
  }

  // 포비 최댓값
  const pobiMax = Math.max(
    ...pobi.map((n) => {
      const sum = n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
      const mul = n.toString().split('').reduce((acc, cur) => acc * Number(cur), 1);
      return Math.max(sum, mul);
    })
  )
  // 크롱 최댓값
  const crongMax = Math.max(
    ...crong.map((n) => {
      const sum = n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
      const mul = n.toString().split('').reduce((acc, cur) => acc * Number(cur), 1);
      return Math.max(sum, mul);
    })
  )

  // 포비와 크롱의 최댓값을 비교 후 포비가 이긴다면 1, 크롱이 이긴다면 2를 리턴
  if (pobiMax > crongMax) result = 1;
  if (pobiMax < crongMax) result = 2;

  // 최종 결괏값 리턴 
  return result;

}
module.exports = problem1;
