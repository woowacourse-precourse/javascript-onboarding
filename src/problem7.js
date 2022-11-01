const ACQUAINTANCE_POINT = 10;
const TIMELINE_POINT = 1;

const pointMap = new Map();
const usersFriend = new Set();

const isUsersFriend = (user, friends, id) => {
  for (let i = 0; i < friends.length; i++) {
    const [idA, idB] = friends[i];

    if (idA === user && idB === id) return true;
    if (idA === id && idB === user) return true;
  }

  return false;
};

const getCount = (friends, id) => {
  let count = 0;
  const usersFriendList = [...usersFriend];

  for (let i = 0; i < usersFriendList.length; i++) {
    const target = usersFriendList[i];

    for (let j = 0; j < friends.length; j++) {
      const [idA, idB] = friends[j];

      if (idA === target && idB === id) count++;
      if (idA === id && idB === target) count++;
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

    if (isUsersFriend(user, friends, id)) continue;

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
  const candidates = [...pointMap].sort((a, b) => {
    if (b[1] === a[1]) {
      if (a[0] <= b[0]) return -1;
      else return 1;
    } else return b[1] - a[1];
  });
  console.log(candidates);

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
