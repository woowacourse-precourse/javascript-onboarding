function problem7(user, friends, visitors) {
  let removeMrko = friends.map((v) => v.filter((v) => v !== user));

  const findFriends = removeMrko
    .filter((v) => v.length === 1)
    .flatMap((v) => v);

  for (const value of findFriends) {
    removeMrko = removeMrko
      .flatMap((v) => v)
      .filter((v) => v !== value)
      .sort();
    visitors = visitors
      .flatMap((v) => v)
      .filter((v) => v !== value)
      .sort();
  }

  const selectFriends = [...new Set(removeMrko)];
  const selectVisitors = [...new Set(visitors)];

  const object = {};
  for (const value of selectFriends) {
    object[value] = removeMrko.filter((v) => v === value).length * 10;
  }
  for (const value of selectVisitors) {
    object[value] !== undefined
      ? (object[value] += visitors.filter((v) => v === value).length)
      : (object[value] = visitors.filter((v) => v === value).length);
  }

  const sortableObject = Object.entries(object)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  const answer = Object.keys(sortableObject).slice(0, 5);

  return answer;
}

module.exports = problem7;
