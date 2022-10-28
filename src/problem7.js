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

function problem7(user, friends, visitors) {
  // adjacency list
  let adj = [];

  // Informations of users
  let user_info = new Map(); // name, [index, score]

  // Make an adjacency list.
  for (let [a, b] of friends) {
    make_adj(a, b, adj, user_info);
  }
}

module.exports = problem7;
