function problem7(user, friends, visitors) {
  var answer = [];
  const friendsGraph = new Map();
  const recommend = new Map();

  for (let friend of friends) {
    friendsGraph.set(friend[0], []);
    friendsGraph.set(friend[1], []);
  }
  for (let friend of friends) {
    friendsGraph.get(friend[0]).push(friend[1]);
    friendsGraph.get(friend[1]).push(friend[0]);
  }

  friendsGraph.forEach((val, key) => {
    if (key === user) return;
    if (val.indexOf(user) === -1) {
      friendsGraph.get(user).map((friend) => {
        if (val.includes(friend) && !recommend.has(key)) {
          recommend.set(key, 10);
        } else if (val.includes(friend) && recommend.has(key)) {
          recommend.set(key, recommend.get(key) + 10);
        }
      });
    }
  });

  for (let visitor of visitors) {
    if (!recommend.has(visitor) && !friendsGraph.get(user).includes(visitor)) {
      recommend.set(visitor, 1);
    } else if (
      recommend.has(visitor) &&
      !friendsGraph.get(user).includes(visitor)
    ) {
      recommend.set(visitor, recommend.get(visitor) + 1);
    }
  }

  let sortedRecommend = new Map(
    [...recommend].sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
      }
    })
  );
  sortedRecommend.forEach((val, key) => answer.push(key));

  return answer;
}

module.exports = problem7;
