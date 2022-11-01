function objSort(obj) {
  return Object.entries(obj)
    .sort(([key1, value1], [key2, value2]) => value1 === value2 ? key1.localeCompare(key2) : value2 - value1);
}

function problem7(user, friends, visitors) {
  const obj = {};

  const xFriends = friends.filter(([A, B]) => (A !== user && B !== user));
  const friendsList = friends.filter(([A, B]) => !(A !== user && B !== user))
    .flat(Infinity)
    .filter(v => v !== user);

  for (const friend of xFriends) {
    const [A, B] = friend;
    if (friendsList.includes(A)) {
      obj[B] = (obj[B] || 0) + 10;
    } else if (friendsList.includes(B)) {
      obj[A] = (obj[A] || 0) + 10;
    }
  }

  for (const visit of visitors) {
    if (!friendsList.includes(visit)) {
      obj[visit] = (obj[visit] || 0) + 1;
    }
  }

  var answer = objSort(obj)
    .filter(([A, B]) => !friendsList.includes(A) && !friendsList.includes(B))
    .map(v => v[0])
    .slice(0, 5);

  return answer;
}

module.exports = problem7;
