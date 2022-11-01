/** 친구 관계를 나타내는 객체를 생성하는 기능 **/
function makeFriendsList(friends) {
  let friendsObject = {};

  for (let item of friends) {
    for (let i = 0; i < 2; i++) {
      if (item[i] in friendsObject) friendsObject[item[i]].push(item[1 - i]);
      else friendsObject[item[i]] = [item[1 - i]];
    }
  }
  return friendsObject;
}

/** 친구 추천 규칙에 따라 점수를 정리한 객체를 생성하는 기능 **/
function makeScoreList(user, friendsObject, visitors) {
  let scoreList = {};

  for (let userName in friendsObject) {
    if (userName === user) continue;
    if (friendsObject[user].includes(userName)) continue;
    let score =
      friendsObject[userName].filter((element) =>
        friendsObject[user].includes(element)
      ).length * 10;
    scoreList[userName] = score;
  }

  for (let userName of visitors) {
    if (userName === user) continue;
    if (friendsObject[user].includes(userName)) continue;
    if (userName in scoreList) scoreList[userName]++;
    else scoreList[userName] = 1;
  }

  return scoreList;
}

/** socreList에서 점수가 높은 순, 점수가 같으면 이름 순으로 최대 5명의 이름이 담긴 배열을 생성하는 기능 **/
function findRecommendedUser(scoreList) {
  let recommendedUser = [];
  scoreList = Object.entries(scoreList)
    .sort()
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  for (let item of scoreList) {
    recommendedUser.push(item[0]);
  }

  return recommendedUser;
}

function problem7(user, friends, visitors) {
  var answer = [];
  let friendsObject = makeFriendsList(friends);
  let scoreList = makeScoreList(user, friendsObject, visitors);

  answer = findRecommendedUser(scoreList);
  return answer;
}

module.exports = problem7;
