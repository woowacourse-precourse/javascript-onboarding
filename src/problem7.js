function problem7(user, friends, visitors) {
  let map = new Map();
  let set = new Set();
  let answer = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      if (friends[i][0] === user) set.add(friends[i][1]);
      else set.add(friends[i][0]);
    }
  }
  let direct = Array.from(set);
  for (let friend of friends) {
    const [A, B] = friend;
    if (direct.includes(A) && B !== user) map.set(B, map.get(B) + 10 || 10);
    else if (direct.includes(B) && A !== user)
      map.set(A, map.get(A) + 10 || 10);
  }

  visitors.forEach((v) => {
    if (!direct.includes(v) && v !== user) map.set(v, map.get(v) + 1 || 1);
  });
  let sorted = [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .sort((a, b) => {
      if (a[1] == b[1]) return a[0].localeCompare(b[0]);
    });

  for (let [k, _] of sorted) {
    if (answer.length >= 5) break;
    answer.push(k);
  }
  return answer;
}

module.exports = problem7;
