/*
 * <기능 목록>
 * 1. 친구 관계를 담은 이차원 배열 friends에서 사용자와 친구인 userFriends와 친구의 친구인 friendOfFriends 배열을 반환하는 seperateFriends() 함수.
 *     이 때, userFriends는 중복을 제거하고, friendOfFriends는 추천 점수를 계산해야 하므로 중복 제거하지 않는다.
 *     또한, user는 friendOfFriends에서 제외한다.
 * 2. 친구의 친구 리스트 friendOfFriends을 입력받아 함께 아는 친구 추천 점수를 포함한 Object를 반환하는 scoreCommonFriend() 함수.
 *     이 때, Object의 key는 '아이디'이고, value는 (중복된 친구 수 * 10) 이다.
 * 3. 방문기록 visitors에서 방문자 추천 점수를 포함한 Object를 반환하는 scoreVisitor() 함수.
 *     이 때, Object의 key는 '아이디'이고, value는 (중복된 친구 수) 이다.
 *     또한, 사용자의 친구인 userFriends는 제외 추천에서 제외한다.
 * 4. 두 개의 추천 점수를 합산한 Object를 반환하는 addScore() 함수.
 * 5. 친구 추천 점수 상위 5명을 반환하는 findFeatureFriend() 함수.
 * 6. 점수는 내림차순, 점수가 같다면 이름순으로 정렬하기 위해 쓰이는 sortFunction() 함수.
 */

function problem7(user, friends, visitors) {
  if (!isValidInput(user, friends, visitors)) {
    return "Error: Invalid Input";
  }
  const [userFriends, friendOfFriends] = seperateFriends(friends, user);
  const friendScore = scoreCommonFriend(friendOfFriends);
  const visitScore = scoreVisitor(visitors, userFriends);
  const featuredFriend = findFeaturedFriend(addScore(friendScore, visitScore));

  return featuredFriend;
}

function isValidInput(user, friends, visitors) {
  let isValid;
  if (!isValidId(user)) {
    isValid = false;
  } else if (!(friends.length >= 1 && friends.length <= 10000)) {
    isValid = false;
  } else if (!(visitors.length >= 0 && visitors.length < 10000)) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}

function isValidId(id) {
  let isValid;
  if (!(id.length >= 1 && id.length <= 30)) {
    isValid = false;
  } else if (id !== id.toLowerCase()) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}

function seperateFriends(friends, user) {
  let userFriends = [];
  let friendOfFriends = [];

  for (let [userFriend, friendOfFriend] of friends) {
    userFriends.push(userFriend);
    if (friendOfFriend !== user) {
      friendOfFriends.push(friendOfFriend);
    }
  }
  userFriends = [...new Set(userFriends)];

  return [userFriends, friendOfFriends];
}

function scoreCommonFriend(friendOfFriends) {
  const FRIEND_SCORE = 10;
  let scores = {};

  for (let friend of friendOfFriends) {
    if (isValidId(friend)) {
      if (scores[friend]) {
        scores[friend] += FRIEND_SCORE;
      } else {
        scores[friend] = FRIEND_SCORE;
      }
    }
  }

  return scores;
}

function scoreVisitor(visitors, userFriends) {
  const VISIT_SCORE = 1;
  let scores = {};

  for (let visitor of visitors) {
    if (!userFriends.includes(visitor) && isValidId(visitor)) {
      if (scores[visitor]) {
        scores[visitor] += VISIT_SCORE;
      } else {
        scores[visitor] = VISIT_SCORE;
      }
    }
  }

  return scores;
}

function addScore(friendScore, visitScore) {
  let totalScore = friendScore;

  for (let visitor of Object.keys(visitScore)) {
    if (totalScore[visitor]) {
      totalScore[visitor] += visitScore[visitor];
    } else {
      totalScore[visitor] = visitScore[visitor];
    }
  }

  return totalScore;
}

function findFeaturedFriend(score) {
  const MAX_NUM = 5;
  let featuredFriend = [];
  let scoreList = Object.keys(score).map((key) => [score[key], key]);

  scoreList.sort(sortFunction);
  if (scoreList.length > MAX_NUM) {
    scoreList = scoreList.slice(0, MAX_NUM);
  }
  scoreList.forEach((x) => featuredFriend.push(x[1]));

  return featuredFriend;
}

function sortFunction(a, b) {
  if (a[0] === b[0]) {
    return a[1] < b[1] ? -1 : 1;
  } else {
    return a[0] > b[0] ? -1 : 1;
  }
}

module.exports = problem7;
