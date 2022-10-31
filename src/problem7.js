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

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
