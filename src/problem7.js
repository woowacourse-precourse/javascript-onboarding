function problem7(user, friends, visitors) {
  var answer;
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
    if (!users.has(id_a)) {
      users.set(id_a, 0);
    } else if (!users.has(id_b)) {
      users.set(id_b, 0);
    }

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
  
  return answer;
}

module.exports = problem7;
