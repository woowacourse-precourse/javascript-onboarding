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

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
