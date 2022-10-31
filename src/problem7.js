function problem7(user, friends, visitors) {
  let mrkoFriends = friends.map((v) => v.filter((v) => v !== user));

  const findFriends = mrkoFriends
    .filter((v) => v.length === 1)
    .flatMap((v) => v);

  for (const value of findFriends) {
    mrkoFriends = mrkoFriends
      .flatMap((v) => v)
      .filter((v) => v !== value)
      .sort();
    visitors = visitors
      .flatMap((v) => v)
      .filter((v) => v !== value)
      .sort();
  }

  const selectFriends = [...new Set(mrkoFriends)];
  const selectVisitors = [...new Set(visitors)];

  const object = {};
  for (const value of selectFriends) {
    object[value] = mrkoFriends.filter((v) => v === value).length * 10;
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
