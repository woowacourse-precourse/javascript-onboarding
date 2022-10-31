const getUsersFriends = (user, relationship) => {
  let friends = relationship.reduce((acc, [personA, personB]) => {
    if (personA === user) {
      acc.push(personB);
    } else if (personB === user) {
      acc.push(personA);
    }
    return acc;
  }, []);
  return [...new Set(friends)];
};

function problem7(user, friends, visitors) {
  var answer;

  // 유저의 친구들(내친구들)
  const usersFriends = getUsersFriends(user, friends);

  return answer;
}

module.exports = problem7;
