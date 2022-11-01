function problem7(user, friends, visitors) {
  const obj = {};

  const notFriendsArr = friends.filter(([A, B]) => A !== user && B !== user);
  const friendArr = friends
    .filter(([A, B]) => !(A !== user && B !== user))
    .flat(Infinity)
    .filter((v) => v !== user);

  for (const friend of notFriendsArr) {
    const [A, B] = friend;
    if (friendArr.includes(A)) {
      obj[B] = (obj[B] || 0) + 10;
    } else if (friendArr.includes(B)) {
      obj[A] = (obj[A] || 0) + 10;
    }
  }

  for (const visit of visitors) {
    if (!friendArr.includes(visit)) {
      obj[visit] = (obj[visit] || 0) + 1;
    }
  }

  const answer = objectSortFn(obj)
    .filter(([A, B]) => !friendArr.includes(A) && !friendArr.includes(B))
    .map((v) => v[0])
    .slice(0, 5);

  return answer;
}

function objectSortFn(obj) {
  return Object.entries(obj).sort(([keyA, valueA], [keyB, valueB]) =>
    valueA === valueB ? keyA.localeCompare(keyB) : valueB - valueA
  );
}

module.exports = problem7;
