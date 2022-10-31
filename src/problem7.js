//친구관계 object 만드는 함수
function makeEdge(friends) {
  let edge = {};
  for (let i of friends) {
    let [friendA, friendB] = i;
    if (friendA in edge) {
      edge[friendA].push(friendB);
    } else {
      edge[friendA] = [friendB];
    }
    if (friendB in edge) {
      edge[friendB].push(friendA);
    } else {
      edge[friendB] = [friendA];
    }
  }
  return edge;
}

//함께 아는 친구가 몇명인지 세기
function compare(arr1 = [], arr2) {
  return arr1.reduce((a, c) => a + arr2.includes(c), 0);
}

//규칙대로 점수 계산하기
function calculateScore(togetherKnow, visits) {
  return Object.keys({ ...togetherKnow, ...visits }).reduce((acc, curr) => {
    acc[curr] = (togetherKnow[curr] || 0) * 10 + (visits[curr] || 0);
    return acc;
  }, {});
}

function problem7(user, friends, visitors) {
  let relationshipFriends = makeEdge(friends);
  let userFriends = relationshipFriends[user];
  delete relationshipFriends[user];

  let countOfTogetherKnow = Object.entries(relationshipFriends).reduce(
    (acc, curr) => {
      let [user, userRelation] = curr;
      return { ...acc, [user]: compare(userFriends, userRelation) };
    },
    {}
  );
}

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);
module.exports = problem7;
