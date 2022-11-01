const findUserFriends = (user, friends) => {
  return friends
    .filter(([nameA, nameB]) => nameA === user || nameB === user)
    .map(([nameA, nameB]) => (nameA === user ? nameB : nameA));
};

function problem7(user, friends, visitors) {
  const SCORE = {
    FRIENDS: 10,
    VISITOR: 1,
  };

  let recommendScore = {};

  const userFriends = findUserFriends(user, friends);

  userFriends.forEach((name) => {
    const friendOfFriends = findUserFriends(name, friends).filter(
      (element) => element != user
    );
    friendOfFriends.forEach((name) => {
      if (!userFriends.includes(name)) {
        recommendScore[name]
          ? (recommendScore[name] += SCORE.FRIENDS)
          : (recommendScore[name] = SCORE.FRIENDS);
      }
    });
  });

  visitors
    .filter((visitor) => !userFriends.includes(visitor))
    .forEach((visitor) => {
      recommendScore[visitor]
        ? (recommendScore[visitor] += SCORE.VISITOR)
        : (recommendScore[visitor] = SCORE.VISITOR);
    });

  let scoreArray = Object.entries(recommendScore);

  return scoreArray
    .sort(([nameA, scoreA], [nameB, scoreB]) => {
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    })
    .sort(([nameA, scoreA], [nameB, scoreB]) => scoreB - scoreA)
    .map(([name, _]) => name)
    .splice(0, 5);
}

module.exports = problem7;
