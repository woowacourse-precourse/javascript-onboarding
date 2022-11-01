function problem1(pobi, crong) {

  // 예외사항 체크
  const isValidPobi = isValidInput(pobi);
  const isValidCrong = isValidInput(crong);
  
  if(!(isValidPobi && isValidCrong)) return -1;

  // 규칙에 따라 계산된 점수
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);
  
  // 점수 비교 후 결과
  // 무승부 = 0
  // 포비 승 = 1
  // 크롱 승 = 2
  if(pobiScore === crongScore) return 0;
  if(pobiScore > crongScore) return 1;
  if(pobiScore < crongScore) return 2;

  /**
   * 예외사항 체크 함수
   * - input 의 길이가 2가 아닌 경우
   * - 시작 면 또는 마지막 면이 포함된 경우
   * - [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 [홀수, 짝수]가 아닌 경우
   * - [왼쪽 페이지 번호, 오른쪽 페이지 번호]가 순서대로 들어있지 않은 경우
   * @param {number[]} input [왼쪽 페이지 번호, 오른쪽 페이지 번호]
   * @returns {boolean} 예외사항에 해당되면 false 반환
   */
  function isValidInput(input){
    if (
      input.length !== 2 | 
      input[1] === 0 | 
      input[0] === 399 | 
      input[0]%2 !== 1 | 
      input[1]%2 !== 0 | 
      Math.abs(input[1] - input[0]) !== 1
      ) return false;
    return true;
  };

  /**
   * 본인의 점수를 정하는 함수
   * - 페이지의 각 자리의 숫자를 모두 더하거나 모두 곱해서 큰 수를 구한다
   * - 왼쪽 페이지와 오른쪽 페이지 각각 위의 과정을 통해 나온 수를 score 배열에 저장 후 비교
   * @param {number[]} pages [왼쪽 페이지 번호, 오른쪽 페이지 번호]
   * @return {number} 계산된 점수를 반환
   */
  function getScore(pages){
    const score = [];
    pages.map((v)=>{
      const page = v.toString().split("").map(x=>parseInt(x));
      const pageSum = page.reduce((acc,cur)=>acc + cur , 0);
      const pageMulti = page.reduce((acc,cur)=>acc * cur , 1);
      return score.push(Math.max(pageSum, pageMulti));
    });
    return Math.max.apply(null,score);
  };

};

module.exports = problem1;
