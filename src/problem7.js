/*
  기능 목록
  1. 주어진 친구관계를 이용해, 친구관계를 나타내는 Object를 만든다.
  2. 친구관계를 나타내는 Object를 이용해, 친구의 친구를 찾아 점수를 부여한다.
  3. 방문기록을 이용해, 점수를 부여한다.
  4. 점수를 이용해, 추천 친구를 찾는다. 이 때, 0점인 친구는 제외한다.

 */
function problem7(user, friends, visitors) {
  var answer;
  const friendsList = [];
  const score = {};
  const relation = makeRelation(friends);
  getRelationScore(user, relation, score, friendsList);
  getVisitorScore(user, visitors, score);
  answer = getRecommendation(score, friendsList);
  return answer;
}

function makeRelation(friends) {
  // 1번 구현
  const relation = {};
  for (let i = 0; i < friends.length; i++) {
    const [name1, name2] = friends[i];
    if (relation[name1]) {
      relation[name1].push(name2);
    } else {
      relation[name1] = [name2];
    }
    if (relation[name2]) {
      relation[name2].push(name1);
    } else {
      relation[name2] = [name1];
    }
  }
  return relation;
}

function getRelationScore(user, relation, score, friendsList) {
  //2번 구현
  for (let i = 0; i < relation[user].length; i++) {
    const friendOfUser = relation[user][i];
    friendsList.push(friendOfUser);
    for (let j = 0; j < relation[friendOfUser].length; j++) {
      // 친구의 친구를 찾는다.
      const friendOfFriend = relation[friendOfUser][j];
      if (friendOfFriend !== user && !friendsList.includes(friendOfFriend)) {
        // 친구의 친구가 자기 자신 또는 직접 친구가 아닌 경우
        score[friendOfFriend] = score[friendOfFriend] + 10 || 10;
      }
    }
  }
}

function getVisitorScore(user, visitors, score) {
  //3번 구현
  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    if (visitor !== user) {
      score[visitor] = score[visitor] + 1 || 1;
    }
  }
}

function getRecommendation(score, friendsList) {
  //4번 구현
  const recommendation = Object.keys(score)
    .filter((friend) => !friendsList.includes(friend)) // 이미 있는 친구를 제외
    .filter((friend) => score[friend] !== 0) // 점수가 0인 친구를 제외
    .sort() // 이름순으로 정렬
    .sort((a, b) => score[b] - score[a]) // 점수순으로 정렬
    .slice(0, 5); // 상위 5명만 추출
  return recommendation;
}

module.exports = problem7;
