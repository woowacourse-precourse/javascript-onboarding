function problem7(user, friends, visitors) {
  let answer = [];
  const users = new Map();
  const user_friends = [];

  visitors.forEach(visitor => {
    if (users.has(visitor)) {
      users.set(visitor, users.get(visitor) + 1);
    } else {
      users.set(visitor, 1);
    }
  });

  for (let i = 0; i < friends.length; i++) {
    const [id_a, id_b] = friends[i];
    if (!users.has(id_a)) users.set(id_a, 0);
    if (!users.has(id_b)) users.set(id_b, 0);

    if (id_a === user) {
      user_friends.push(id_b);
    } else if (id_b === user) {
      user_friends.push(id_a);
    }
  }

  users.delete(user);
  user_friends.forEach((friend) => {
    users.delete(friend);
  })

  for (let i = 0; i < friends.length; i++) {
    const [id_a, id_b] = friends[i];
    if (user_friends.includes(id_a)) {
      if (users.has(id_b)) users.set(id_b, users.get(id_b) + 10);
    } else if (user_friends.includes(id_b)) {
      if (users.has(id_a)) users.set(id_a, users.get(id_a) + 10);
    }
  }

  for (let key of users.keys()) {
    if (users.get(key) === 0) users.delete(key);
  }

  const arr = [...users.entries()].sort((a, b) => b[1] - a[1]);
  answer = arr.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    };
  }).map(x => x[0])
  return answer.slice(0, 5);
}

module.exports = problem7;
