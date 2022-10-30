const points = new Map();
const myFriend = new Set();

const isMyFriend = (user, friends, 찾으려는친구) => {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user && friends[i][1] === 찾으려는친구) return true;
    if (friends[i][0] === 찾으려는친구 && friends[i][1] === user) return true;
  }
  return false;
};

const getCount = (friends, friend) => {
  let count = 0;
  const myFriendArray = [...myFriend];
  for (let i = 0; i < myFriendArray.length; i++) {
    const target = myFriendArray[i];
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][0] === target && friends[j][1] === friend) count++;
      if (friends[j][0] === friend && friends[j][1] === target) count++;
    }
  }
  return count;
};

function problem7(user, friends, visitors) {
  const answer = [];

  // 사람 채워 넣음
  for (let i = 0; i < friends.length; i++) {
    if (!points.has(friends[i][0])) points.set(friends[i][0], 0);
    if (!points.has(friends[i][1])) points.set(friends[i][1], 0);
  }
  for (let i = 0; i < visitors.length; i++) {
    if (!points.has(visitors[i])) points.set(visitors[i], 0);
  }

  // 친구 넣음
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) {
      myFriend.add(friends[i][1]);
    }
    if (friends[i][1] === user) {
      myFriend.add(friends[i][0]);
    }
  }

  // 1) 함께 아는 친구
  const friendsList = [...points.keys()];
  for (let i = 0; i < friendsList.length; i++) {
    // 일단 내 친구면 패스
    if (isMyFriend(user, friends, friendsList[i])) continue;
    const 함께아는친구수 = getCount(friends, friendsList[i]);
    const currentPoint = points.get(friendsList[i]);
    points.set(friendsList[i], currentPoint + 함께아는친구수 * 10); // 나중에 10 매직넘버 처리
  }

  // 2) 타임라인 방문
  for (let i = 0; i < visitors.length; i++) {
    const currentPoint = points.get(visitors[i]);
    points.set(visitors[i], currentPoint + 1);
  }

  // user 제거
  points.delete(user);

  const candidates = [...points].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < 5; i++) {
    // 원래 친구가 아니면 출력
    if (!myFriend.has(candidates[i][0])) answer.push(candidates[i][0]);
  }
  return answer;
}

const user = "mrko";
const friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
console.log(problem7(user, friends, visitors));

module.exports = problem7;
