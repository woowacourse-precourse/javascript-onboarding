const ACQUAINTANCE_POINT = 10;
const TIMELINE_POINT = 1;

const pointMap = new Map();
const usersFriend = new Set();

const isusersFriend = (user, friends, 찾으려는친구) => {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user && friends[i][1] === 찾으려는친구) return true;
    if (friends[i][0] === 찾으려는친구 && friends[i][1] === user) return true;
  }
  return false;
};

const getCount = (friends, friend) => {
  let count = 0;
  const usersFriendArray = [...usersFriend];
  for (let i = 0; i < usersFriendArray.length; i++) {
    const target = usersFriendArray[i];
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][0] === target && friends[j][1] === friend) count++;
      if (friends[j][0] === friend && friends[j][1] === target) count++;
    }
  }
  return count;
};

const makeInitialPointMap = (friends, visitors) => {
  for (let i = 0; i < friends.length; i++) {
    const [idA, idB] = friends[i];
    if (!pointMap.has(idA)) pointMap.set(idA, 0);
    if (!pointMap.has(idB)) pointMap.set(idB, 0);
  }

  for (let i = 0; i < visitors.length; i++) {
    const id = visitors[i];
    if (!pointMap.has(id)) pointMap.set(id, 0);
  }
}; // pointMap: ["donut" => 0, "andole" => 0, "jun" => 0, "mrko" => 0, "shakevan" => 0, "andole" => 0]

const findUsersFriends = (user, friends) => {
  for (let i = 0; i < friends.length; i++) {
    const [idA, idB] = friends[i];

    if (idA === user) {
      usersFriend.add(idB);
    }

    if (idB === user) {
      usersFriend.add(idA);
    }
  }
};

const checkAcquaintance = (user, friends) => {
  const idList = [...pointMap.keys()];

  for (let i = 0; i < idList.length; i++) {
    const id = idList[i];

    if (isusersFriend(user, friends, id)) continue;

    const acquaintance = getCount(friends, id);
    const currentPoint = pointMap.get(id);
    pointMap.set(id, currentPoint + acquaintance * ACQUAINTANCE_POINT);
  }
};

const checkTimeline = (visitors) => {
  for (let i = 0; i < visitors.length; i++) {
    const id = visitors[i];
    const currentPoint = pointMap.get(id);
    pointMap.set(id, currentPoint + TIMELINE_POINT);
  }
};

const calculatePoints = (user, friends, visitors) => {
  checkAcquaintance(user, friends);
  checkTimeline(visitors);
};

const deleteUserFromPointMap = (user) => {
  pointMap.delete(user);
};

const getResult = () => {
  const result = [];
  const candidates = [...pointMap].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < 5; i++) {
    const [id, point] = candidates[i];
    if (!usersFriend.has(id) && point !== 0) result.push(id);
  }

  return result;
};

function problem7(user, friends, visitors) {
  makeInitialPointMap(friends, visitors);
  findUsersFriends(user, friends);
  calculatePoints(user, friends, visitors);
  deleteUserFromPointMap(user);

  const answer = getResult();

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
