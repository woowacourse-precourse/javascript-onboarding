class Counter {
  constructor(items = []) {
    this._countMap = new Map();
    items.forEach((item) => this.add(item));
  }

  get(item) {
    return this._countMap.get(item) ?? 0;
  }

  add(item, count = 1) {
    const lastCount = this.get(item);
    const currentCount = lastCount + count;
    this._countMap.set(item, currentCount);
  }

  entries() {
    return this._countMap.entries();
  }
}

function getSetOfDirectFriends(user, friendPairs) {
  const directFriends = new Set();
  for (const [u1, u2] of friendPairs) {
    if (u1 === user) {
      directFriends.add(u2);
      continue;
    }

    if (u2 === user) {
      directFriends.add(u1);
      continue;
    }
  }

  return directFriends;
}

function problem7(mainUser, friends, visitors) {
  const friendPairs = friends.filter(([x, y]) => x !== y);
  const allUsers = [
    ...new Set([...friendPairs.flat(), ...visitors, mainUser]).values(),
  ];

  const directFriendsByUser = new Map(
    allUsers.map((u) => [u, getSetOfDirectFriends(u, friendPairs)])
  );

  const directFriendsOfMainUser =
    directFriendsByUser.get(mainUser) ?? new Set();

  const visitCountByUser = new Counter(visitors);

  const intersection = (setA, setB) =>
    new Set([...setA.values()].filter((e) => setB.has(e)));

  const userAndScoreList = allUsers.map((u) => {
    const numCommonFriends = intersection(
      directFriendsByUser.get(u),
      directFriendsOfMainUser
    ).size;
    const numVisits = visitCountByUser.get(u);
    const score = numCommonFriends * 10 + numVisits * 1;
    return [u, score];
  });

  const compareUserAndScore = (lhs, rhs) => {
    const [LHS_GOES_FIRST, RHS_GOES_FIRST] = [-1, 1];
    const [leftUser, leftScore] = lhs;
    const [rightUser, rightScore] = rhs;

    if (leftScore > rightScore) {
      return LHS_GOES_FIRST;
    }

    if (leftScore < rightScore) {
      return RHS_GOES_FIRST;
    }

    // Score tie
    if (leftUser < rightUser) {
      return LHS_GOES_FIRST;
    } else {
      return RHS_GOES_FIRST;
    }
  };

  const answer = userAndScoreList
    .filter(([_user, score]) => score > 0)
    .filter(
      ([user, _score]) =>
        !directFriendsOfMainUser.has(user) && user !== mainUser
    )
    .sort(compareUserAndScore)
    .slice(0, 5)
    .map(([user, _score]) => user);
  return answer;
}

module.exports = problem7;
