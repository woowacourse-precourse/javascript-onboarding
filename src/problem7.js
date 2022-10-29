function problem7(user, friends, visitors) {
  const friendsOfUser = getFriendsOfUser(user, friends)
  const countsOfCommonFriends = getCountsOfCommonFriends(user, friendsOfUser, friends)
  const scoresForCommonFriends = getScoresForCommonFriends(countsOfCommonFriends)
  const scoresForVisting = getScoresForVisting(visitors)
  console.log(scoresForCommonFriends)
  console.log(scoresForVisting)
  // 본인과 이미 친구인 애 빼기
  // 추천 점수 순으로 정렬해서 최대 5명만 반환하기 
  var answer;
  return answer;
}

/**
 * user와 친구인 사용자 목록을 반환한다.
 * @param {string} user user_id
 * @param {string[][]} friends [['one_of_user_id', 'other_user_id'], ...]
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

/**
 * 함께 아는 친구의 수를 표시하는 객체를 반환한다.
 * @param {*} user 
 * @param {string[]} friendsOfUser 
 * @param {set} friends 
 * @returns {{ [key: string]: number }} { user_id : number_of_common_freinds }
 */
function getCountsOfCommonFriends(user, friendsOfUser, friends) {
  const counts = {}
  for (let i = 0; i < friends.length; i++) {
    const [from, to] = friends[i]
    if (friendsOfUser.has(from) && user !== to) {
      counts[to] = counts[to] ? counts[to] + 1 : 1
    }
    if (friendsOfUser.has(to) && user !== from) {
      counts[from] = counts[from] ? counts[from] + 1 : 1
    }
  }
  return counts
}

/**
 * 함께 아는 친구 수에 따른 점수를 구한다.
 * @param {{ [key: string]: number }} common { user_id : number_of_common_freinds }
 * @returns {{ [key: string]: number }} { user_id: score }
 */
function getScoresForCommonFriends(common) {
  const scores = {}
  for (let key in common) {
    scores[key] = common[key] * 10
  }
  return scores
}

/**
 * 방문 횟수에 따른 점수를 구한다.
 * @param {string[]} visitors 방문자 아이디 목록을 담고 있는 배열
 * @returns {{ [key: string]: number }} { user_id: score }
 */
function getScoresForVisting(visitors) {
  const scores = {}
  console.log(visitors)
  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i]
    scores[visitor] = scores[visitor] ? scores[visitor] + 1 : 1
  }
  return scores
}

console.log(problem7(
  "mrko",
  [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
))

module.exports = problem7;
