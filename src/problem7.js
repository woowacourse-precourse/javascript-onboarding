/* 
 * Features
 * 1. 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 최대 5명을 return
 * 2. 추천 점수가 0점인 경우 추천하지 않으며, 추천 점수가 같은 경우는 이름순으로 정렬
 * 3. 사용자와 함께 아는 친구의 수 = 10점
 * 4. 사용자의 타임 라인에 방문한 횟수 = 1점
 *  
 * Exceptions
 * 1. 아이디는 길이가 1 이상 30 이하인 문자열이다.
 * 2. friends는 길이가 1 이상 10,000 이하인 배열이다.
 * 3. visitors는 길이가 0 이상 10,000 이하인 배열이다.
 * 4. 사용자 아이디는 알파벳 소문자로만 이루어져 있다.
 * 5. 동일한 친구 관계가 중복해서 주어지지 않는다
 * 6. 추천할 친구가 없는 경우는 주어지지 않는다.
 */

const getScoreMapByVisitors = visitors => {
  visitors.map()
}


function problem7(user, friends, visitors) {
  let answer = {};

  visitors.map(visitor => {
    answer[visitor] = visitors.reduce((cnt, element) => cnt + (visitor === element), 0)
  })

  return answer;
}

console.log(
  problem7(
    "mrko", 
    [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], 
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
)


module.exports = problem7;







