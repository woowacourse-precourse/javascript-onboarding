const makeFriendSet = (args) => {
  const { user, friends } = args;
  const friendSet = new Set();
  friends.forEach((friendRelationship) => {
    const [A, B] = friendRelationship;
    if (A === user) return friendSet.add(B);
    if (B === user) return friendSet.add(A);
  });

  return { ...args, friendSet };
};

const makeAcquaintanceSet = (args) => {
  const { friends, friendSet } = args;
  let acquaintanceSet = new Set();
  friends.forEach((friendRelationship) => {
    const [A, B] = friendRelationship;
    if (friendSet.has(A)) return acquaintanceSet.add(B);
    if (friendSet.has(B)) return acquaintanceSet.add(A);
  });
  return { ...args, acquaintanceSet };
};

// 알 수도 있는사람 Set에 이미 친구인 사람과 user가 포함되어있는 경우를 제거하기 위한 함수
const differenceOfSet = (args) => {
  const { acquaintanceSet: setA, friendSet: setB, user } = args;
  const differenceSet = new Set([...setA].filter((x) => !setB.has(x)));
  differenceSet.delete(user);
  return { ...args, acquaintanceSet: differenceSet };
};

const giveFriendAlgorithmPoint = (args) => {
  const { acquaintanceSet } = args;
  const pointMap = {};
  for (const acquaintance of acquaintanceSet) {
    pointMap[acquaintance] = 10;
  }

  return { ...args, pointMap };
};

const giveVisitorPoint = (args) => {
  const { visitors, pointMap, friendSet } = args;
  const copyPointMap = { ...pointMap };
  visitors.forEach((visitor) => {
    if (!friendSet.has(visitor)) {
      if (copyPointMap.hasOwnProperty(visitor)) copyPointMap[visitor] += 1;
      else copyPointMap[visitor] = 1;
    }
  });

  return { ...args, pointMap: copyPointMap };
};

const convertPointMapToSortedPointArray = (args) => {
  const { pointMap } = args;
  const pointArray = Object.entries(pointMap).sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;

    if (a[0] < b[0]) return -1;
    else return 1;
  });

  return { ...args, pointArray };
};

const selectTopFive = (args) => {
  const { pointArray } = args;
  arrayLength = Math.min(5, pointArray.length);
  const result = [];
  for (let i = 0; i < arrayLength; i += 1) {
    result.push(pointArray[i][0]);
  }

  return result;
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
