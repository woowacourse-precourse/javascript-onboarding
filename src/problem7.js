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
 * 4. 아이디는 알파벳 소문자로만 이루어져 있다.
 * 5. 동일한 친구 관계가 중복해서 주어지지 않는다
 * 6. 추천할 친구가 없는 경우는 주어지지 않는다.
 */

const isIDLengthError = id => !(id.length >= 1 && id.length <= 30)
const isLowerCase = id => id === id.toLowerCase()
const validationsOfUser = user => {
  if (isIDLengthError(user)) {
    throw "user ID length error"
  }
  if (!isLowerCase(user)) {
    throw "ID must be small letter"
  }
}
const validationsOfFriends = friends => {
  if (!(friends.length >= 1 && friends.length <= 10000)) {
    throw "friends length error"
  }
  friends.map(friend => {
    if (friend.length === 2) {
      if (isIDLengthError(friend[0]) || isIDLengthError(friend[1])) {
        throw "friend ID length error"
      }
      if (!isLowerCase(friend[0]) || !isLowerCase(friend[1])) {
        throw "ID must be small letter"
      }
    } else {
      throw "friend length error"
    }
  })
}
const validationsOfVisitors = visitors => {
  if (!(visitors.length >= 0 && visitors.length <= 10000)) {
    throw "visitors length error"
  }
  visitors.map(visitor => {
    if (isIDLengthError(visitor)) {
      throw "visitor ID length error"
    }
    if (!isLowerCase(visitor)) {
      throw "ID must be small letter"
    }
  })
}
const validations = (user, friends, visitors) => {
  validationsOfUser(user);
  validationsOfFriends(friends);
  validationsOfVisitors(visitors);  
}

const getScoreByVisitors = (visitors, score) => {
  visitors.map(visitor => {
    score[visitor] = visitors.reduce((cnt, element) => cnt + (visitor === element), 0)
  })
}
const getMyFriends = (user, friends) => {
  let myFriends = []
  friends.map(friendPair => {
    if (friendPair.includes(user)) {
      myFriends.push(friendPair.filter(friend => friend !== user)[0])
    }
  })

  return myFriends;
}
const getScoreByFriends = (friends, myFriends, score) => {
  friends.map(friendPair => {
    if (myFriends.includes(friendPair[0])) {
      if(score[friendPair[1]]) {
        score[friendPair[1]] += 10
      } else {
        score[friendPair[1]] = 10
      }
    } else if (myFriends.includes(friendPair[1])) {
      if(score[friendPair[0]]) {
        score[friendPair[0]] += 10
      } else {
        score[friendPair[0]] = 10
      }
    }
  })
}
const sortScore = score => Object.fromEntries(Object.entries(score).sort(([,a], [,b]) => a > b ? -1 : 1))
const filterKey = (conditions, me, score) => {
  conditions.push(me)

  return Object.keys(score).filter(userId => !(conditions.includes(userId)));
}

function problem7(user, friends, visitors) {
  let answer;
  let score = {};
  let myFriends = getMyFriends(user, friends);
  validations(user, friends, visitors);
  getScoreByVisitors(visitors, score);
  getScoreByFriends(friends, myFriends, score);
  score = sortScore(score)
  answer = filterKey(myFriends, user, score)

  return answer;
}

module.exports = problem7;







