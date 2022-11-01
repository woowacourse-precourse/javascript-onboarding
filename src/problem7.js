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

  let visitorsCount = visitors.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let score = calculateScore(countOfTogetherKnow, visitorsCount);

  const sortScore = Object.fromEntries(
    Object.entries(score).sort(([alpha1, num1], [alpha2, num2]) => {
      if (num1 === num2) {
        return alpha1.localeCompare(alpha2);
      } else if (num1 < num2) {
        return 1;
      } else {
        return -1;
      }
    })
  );

  return Object.keys(sortScore)
    .filter((item) => !userFriends?.includes(item) && sortScore[item] !== 0)
    .slice(0, 5);
}

module.exports = problem7;
