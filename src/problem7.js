const findRelation = (user, friends) => {
  let friendRelation = [];
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      friendRelation.push(friend);
    }
  })
  return friendRelation;
}
function problem7(user, friends, visitors) {
  const friendRelation = findRelation(user, friends);
  let answer;
  return answer;
}

module.exports = problem7;
