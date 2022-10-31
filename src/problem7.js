const KNOWN_USER_SCORE = 10
const VISTIED_USER_SCORE = 1

/**
 * 올바른 입력인지 확인한다.
 * @param {string} user
 * @param {string[][]} friends
 * @param {string[]} visitors
 * @returns {boolean}
 */
function isInvalidInputs(user, friends, visitors) {
  const idRegExp = /^[a-z]{1,30}$/

  if (!user || !friends || !visitors) {
    return true
  }

  if (
    typeof user !== 'string' ||
    !Array.isArray(friends) ||
    !Array.isArray(visitors)
  ) {
    return true
  }

  if (!idRegExp.test(user)) {
    return true
  }

  const isRightFriendFormat = friends.every(
    (friend) =>
      Array.isArray(friend) &&
      friend.length === 2 &&
      idRegExp.test(friend[0]) &&
      idRegExp.test(friend[1])
  )
  if (!isRightFriendFormat || friends.length < 1 || friends.length > 10000) {
    return true
  }

  const isRightVisitorFormat = visitors.every(
    (visitor) => typeof visitor === 'string' && idRegExp.test(visitor)
  )
  if (!isRightVisitorFormat || visitors.length > 10000) {
    return true
  }

  return false
}

/**
 * @typedef friendInfo
 * @property {boolean} visited
 * @property {string[]} friends
 * @property {boolean} direct
 * @property {number} score
 */

/**
 * 직접적인 친구 관계를 반환한다.
 * @param {string[][]} friends
 * @returns {Object.<string, friendInfo>}
 */
function getFriendRelations(friends) {
  const friendRelations = {}

  friends.forEach((friend) => {
    const [user1, user2] = friend

    user1 in friendRelations
      ? friendRelations[user1]['friends'].push(user2)
      : (friendRelations[user1] = {
          visited: false,
          friends: [user2],
          direct: false,
          score: 0,
        })

    user2 in friendRelations
      ? friendRelations[user2]['friends'].push(user1)
      : (friendRelations[user2] = {
          visited: false,
          friends: [user1],
          direct: false,
          score: 0,
        })
  })

  return friendRelations
}

/**
 * user와 직접적으로 친구인 유저들(추천할 필요가 없음)을 초기화한다.
 * @param {string} user
 * @param {Object.<string, friendInfo>} friendRelations
 */
function initFriendRelations(user, friendRelations) {
  const directFriends = friendRelations[user].friends

  friendRelations[user].direct = true
  directFriends.forEach((directFriend) => {
    friendRelations[directFriend].direct = true
  })
}

/**
 * user의 친구, 친구의 친구 등에 대해 점수를 더한다.
 * @param {string} user
 * @param {Object.<string, friendInfo>} friendRelations
 */
function calculateDirectRelation(user, friendRelations) {
  // bfs
  const queue = [user]
  friendRelations[user].visited = true

  while (queue.length !== 0) {
    const currentUser = queue.shift()
    if (!currentUser) {
      // currentUser의 type이 string | undefined이기 때문에 추가.
      break
    }

    const { friends } = friendRelations[currentUser]
    friends.forEach((friend) => {
      if (!friendRelations[friend].direct) {
        friendRelations[friend].score += KNOWN_USER_SCORE
      }

      if (!friendRelations[friend].visited) {
        friendRelations[friend].visited = true
        queue.push(friend)
      }
    })
  }
}

/**
 * user를 방문한 유저에 대해 점수를 더한다.
 * @param {string[]} visitors
 * @param {Object.<string, friendInfo>} friendRelations
 */
function calculateIndirectRelation(visitors, friendRelations) {
  visitors.forEach((visitor) => {
    if (!friendRelations[visitor]) {
      friendRelations[visitor] = {
        score: 0,
      }
    }

    if (friendRelations[visitor].direct) {
      return
    }

    friendRelations[visitor].score += VISTIED_USER_SCORE
  })
}

/**
 * 추천할 친구를 정렬한다.
 * @param {(string | number)[]} user1
 * @param {(string | number)[]} user2
 * @returns {number}
 */
function sortRecommendedUsers(user1, user2) {
  return user1[1] !== user2[1]
    ? user2[1] - user1[1] // score에 따라 정렬
    : user1[0].localeCompare(user2[0]) // 이름에 따라 정렬
}

/**
 * 추천할 친구 목록을 반환한다.
 * @param {string} user
 * @param {string[][]} friends
 * @param {string[]} visitors
 * @returns {string[]}
 */
function problem7(user, friends, visitors) {
  if (isInvalidInputs(user, friends, visitors)) {
    return '입력값이 잘못되었습니다.'
  }

  const friendRelations = getFriendRelations(friends)
  if (friendRelations[user]) {
    initFriendRelations(user, friendRelations)
    calculateDirectRelation(user, friendRelations)
  }
  calculateIndirectRelation(visitors, friendRelations)

  const recommendedUsers = Object.entries(friendRelations) // [username, friendInfo]
    .filter((user) => user[1].score > 0)
    .map((user) => [user[0], user[1].score])
    .slice(0, 5)
    .sort(sortRecommendedUsers)
    .map((user) => user[0])

  return recommendedUsers
}

module.exports = problem7
