function problem7(user, friends, visitors) {
  const friendsOfUser = getFriendsOfUser(user, friends)
  console.log(friendsOfUser)
  // 함께 아는 친구 수 구하기
  // 함께 아는 친구 수에 따른 점수 더하기
  // 방문 횟수에 따른 점수 더하기
  // 이미 친구인 애 빼기
  // 추천 점수 순으로 정렬해서 최대 5명만 반환하기 
  var answer;
  return answer;
}

/**
 * user와 친구인 사용자 목록을 반환한다.
 * @param {string} user 
 * @param {string} friends 
 * @returns {Set<string>}
 */
function getFriendsOfUser(user, friends) {
  const firstDegree = new Set()
  for (let i = 0; i < friends.length; i++) {
    const [from, to] = friends[i]
    if (from === user) {
      firstDegree.add(to)
    }
    if (to === user) {
      firstDegree.add(from)
    }
  }
  return firstDegree
}

console.log(getFriendsOfUser(
  "mrko",
  [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]]
))

module.exports = problem7;
