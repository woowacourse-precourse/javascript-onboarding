function problem7(user, friends, visitors) {
  var answer = [];
  let friendsList = new Map();
  let score = new Map();

  for (let i = 0; i < friends.length; i++) {
    friendsList.set(
      friends[i][0],
      friendsList.get(friends[i][0])
        ? friendsList.get(friends[i][0]) + "," + friends[i][1]
        : friends[i][1]
    );
    friendsList.set(
      friends[i][1],
      friendsList.get(friends[i][1])
        ? friendsList.get(friends[i][1]) + "," + friends[i][0]
        : friends[i][0]
    );
  }

  let userFriends = friendsList.get(user).split(",");

  userFriends.forEach((friend) => {
    let acquaintance = friendsList.get(friend).split(",");
    for (let i = 0; i < acquaintance.length; i++) {
      if (acquaintance[i] !== user) {
        score.set(
          acquaintance[i],
          score.get(acquaintance[i]) ? score.get(acquaintance[i]) + 5 : 5
        );
      }
    }
  });

  visitors.forEach((visitor) => {
    if (!userFriends.includes(visitor)) {
      score.set(visitor, score.get(visitor) ? score.get(visitor) + 1 : 1);
    }
  });

  const sortedScore = [...score.entries()];
  sortedScore
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .forEach((arr) => {
      if (arr[1] > 0 && answer.length < 5) {
        answer.push(arr[0]);
      }
    });

  return answer;
}

module.exports = problem7;
