function problem7(user, friends, visitors) {
  let scores = {};
  let myfriends = [];
  friends.forEach((friend) => {
    const myfriend = findFriend(friend, user);
    myfriends.push(myfriend);
    if (!myfriend) return;
    friends.forEach((friend) => {
      const friendOfFriend = findFriend(friend, myfriend);
      if (friendOfFriend && friendOfFriend !== user) {
        if (scores[friendOfFriend]) {
          scores[friendOfFriend] += 10;
        } else {
          scores[friendOfFriend] = 10;
        }
      }
    });
  });
  visitors.forEach((visitor) => {
    if (!myfriends.includes(visitor)) {
      if (scores[visitor]) {
        scores[visitor] += 1;
      } else {
        scores[visitor] = 1;
      }
    }
  });
  Object.fromEntries(
    Object.entries(scores).sort(([name1, score1], [name2, score2]) => {
      if (score1 < score2) return -1;
      else if (score1 > score2) return 1;
      else {
        if (name1 < name2) return -1;
        else return 1;
      }
    })
  );

  return Object.keys(scores).slice(0, 6);
}

function findFriend(relation, user) {
  if (relation[0] === user) {
    return relation[1];
  } else if (relation[1] === user) {
    return relation[0];
  }
}

module.exports = problem7;
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

/*
1. friends에서 내 닉네임 포함된 배열 찾아서 내 친구 찾기
2. 1에서 찾은 이름 포함된 배열 다시 friends에서 찾아서 내 친구의 친구 찾기
3. 찾은 횟수*10만큼 점수 ++
4. visitors 돌면서 방문할때마다 점수 ++
5. 점수순 정렬
6. 점수 같으면 이름순 정렬
7. 5명까지만 뽑아서 return
*/
