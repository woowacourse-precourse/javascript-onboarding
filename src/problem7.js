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

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
