function make_adj(a, b, adj, map) {
  if (!map.has(a)) {
    map.set(a, [adj.length, 0]);
    adj.push([b]); // a -> b
  } else {
    // map.has(a)
    adj[map.get(a)[0]].push(b); // a -> b
  }

  if (!map.has(b)) {
    map.set(b, [adj.length, 0]);
    adj.push([a]); // b -> a
  } else {
    // map.has(b)
    adj[map.get(b)[0]].push(a); // b -> a
  }
}

function increase_score1(friends_of_user, user_info, adj, user) {
  for (let curr_name of user_info.keys()) {
    // user don't have to increase the scores.
    if (curr_name === user) {
      continue;
    }

    for (let next_name of adj[user_info.get(curr_name)[0]]) {
      // Check if they have common friends...
      if (friends_of_user.includes(next_name)) {
        const [index, score] = user_info.get(curr_name);
        user_info.set(curr_name, [index, score + 10]);
      }
    }
  }
}

function increase_score2(friends_of_user, user_info, visitors) {
  for (let a of visitors) {
    // If he/she is already a friend with the user, don't recommend him/her.
    if (friends_of_user.includes(a)) {
      continue;
    }
    if (!user_info.has(a)) {
      user_info.set(a, [0, 1]);
    } else {
      // user_info.has(a)
      const [index, score] = user_info.get(a);
      user_info.set(a, [index, score + 1]);
    }
  }
}

function problem7(user, friends, visitors) {
  // adjacency list
  let adj = [];

  // Informations of users
  let user_info = new Map(); // name, [index, score]

  // Make an adjacency list.
  for (let [a, b] of friends) {
    make_adj(a, b, adj, user_info);
  }

  // Save the user's friends
  const friends_of_user = adj[user_info.get(user)[0]];

  // If they have common friends, increse the score
  increase_score1(friends_of_user, user_info, adj, user);
  increase_score2(friends_of_user, user_info, visitors);
}

module.exports = problem7;
