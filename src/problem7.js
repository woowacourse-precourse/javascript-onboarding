function problem7(user, friends, visitors) {
  let answer = [];
  let friendLists = new Map();
  let recommendation = new Map();

  for (let friend of friends) {
    friendLists.set(
      friend[0],
      friendLists.get(friend[0])
        ? friendLists.get(friend[0]) + ',' + friend[1]
        : friend[1]
    );
    friendLists.set(
      friend[1],
      friendLists.get(friend[1])
        ? friendLists.get(friend[1]) + ',' + friend[0]
        : friend[0]
    );
  }

  let userFriend = friendLists.get(user).split(',');

  for (let friend of userFriend) {
    let recommended = friendLists.get(friend).split(',');
    for (let person of recommended) {
      if (person === user) continue;
      recommendation.set(
        person,
        recommendation.get(person) ? recommendation.get(person) + 5 : 5
      );
    }
  }

  for (let visitor of visitors) {
    if (userFriend.includes(visitor)) continue;
    recommendation.set(
      visitor,
      recommendation.get(visitor) ? recommendation.get(visitor) + 1 : 1
    );
  }

  recommendation = new Map(
    [...recommendation.entries()].sort((a, b) => b[1] - a[1])
  );
  answer = Array.from(recommendation.keys()).slice(0, 5);

  return answer;
}

module.exports = problem7;
