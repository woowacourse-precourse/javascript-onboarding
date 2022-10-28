function problem7(user, friends, visitors) {
  const recommandFreind = {};

  const friendObj = friendsRecomandScore(
    user,
    filteredFreinds(user, friends),
    friends
  );

  return friendObj;
}

// 1. USER 의 친구를 거르는 기능
function filteredFreinds(user, friends) {
  const arr = friends.filter((t) => {
    return t.includes(user);
  });
  return arr;
}
// 2. 친구의 친구를 구하는 기능
function friendsRecomandScore(me, myFreinds, friends) {
  const friendObj = {};

  myFreinds.map((id) => {
    const friendsFriends = filteredFreinds(id[0], friends);
    friendsFriends.map((f) => {
      if (f[1] !== me) {
        if (!friendObj.hasOwnProperty(f[1])) {
          friendObj[f[1]] = 1;
        } else {
          friendObj[f[1]] += 1;
        }
      }
    });
  });

  return friendObj;
}

// 3. VISITOR의 카운트를 세서 점수 계산하는 기능
function visiterRecomanScore(visitors) {}
// 4. 점수가 가장 높은 순으로 정렬,친구 추천 기능
function scoreSortRecomandFreinds(score) {}

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
