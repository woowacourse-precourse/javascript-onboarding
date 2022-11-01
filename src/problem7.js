function problem7(user, friends, visitors) {
  let answer;
  let userFriends = new Set();
  let others = new Set();

  friends.forEach((friend) => {
    userFriends.add(friend[0]);
    if (friend[1] !== user) {
      others.add(friend[1]);
    }
  });
  visitors.forEach((visitor) => {
    if (userFriends.has(visitor) === false) {
      others.add(visitor);
    }
  });

  others = new Array(...others).sort();

  let othersMap = new Map();
  others.forEach((friend) => othersMap.set(friend, 0));

  friends.forEach((friend) => {
    if (othersMap.has(friend[1])) {
      othersMap.set(friend[1], othersMap.get(friend[1]) + 10);
    }
  });

  visitors.forEach((friend) => {
    if (othersMap.has(friend)) {
      othersMap.set(friend, othersMap.get(friend) + 1);
    }
  });

  let othersList = new Array(...othersMap).sort((x, y) => y[1] - x[1]);

  othersList = othersList.filter((friend) => friend[1] !== 0);

  answer = othersList.map((friend) => friend[0]);
  answer = answer.slice(0, 5);

  return answer;
}

module.exports = problem7;
