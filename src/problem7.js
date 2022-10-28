function make_adj(a, b, adj, user_info) {
  if (!user_info.has(a)) {
    user_info.set(a, [adj.length, 0]);
    adj.push([b]); // a -> b
  } else {
    // map.has(a)
    adj[user_info.get(a)[0]].push(b); // a -> b
  }

  if (!user_info.has(b)) {
    user_info.set(b, [adj.length, 0]);
    adj.push([a]); // b -> a
  } else {
    // map.has(b)
    adj[user_info.get(b)[0]].push(a); // b -> a
  }
}

function increase_score1(friends_of_user, user_info, adj, user) {
  // If they have common friends, give 10 points.
  for (let curr_name of user_info.keys()) {
    // user don't have to increase the scores.
    if (curr_name === user) {
      continue;
    }

    // `user_info.get(curr_name)[0]` is the index of curr_name in adj.
    // Search curr_name's entire friends(next_name).
    for (let next_name of adj[user_info.get(curr_name)[0]]) {
      // Check if user and next_name are friends
      if (friends_of_user.includes(next_name)) {
        const [index, score] = user_info.get(curr_name);
        user_info.set(curr_name, [index, score + 10]);
      }
    }
  }
}

function increase_score2(friends_of_user, user_info, visitors) {
  for (let person of visitors) {
    // If he/she is already a friend with the user, don't recommend him/her.
    if (friends_of_user.includes(person)) {
      continue;
    }
    // Give a point to a visitor
    if (!user_info.has(person)) {
      user_info.set(person, [0, 1]);
    } else {
      // user_info.has(a)
      const [index, score] = user_info.get(person);
      user_info.set(person, [index, score + 1]);
    }
  }
}

function select_friends(user_info, user) {
  let recommendation = new Map();
  let count = 0;
  for (let [name, [, score]] of user_info) {
    if (name === user || score === 0) {
      continue;
    }
    if (count === 5) {
      break;
    }
    if (!recommendation.has(score)) {
      recommendation.set(score, [name]);
    } else {
      // recommendation.has(score)
      let names = recommendation.get(score);
      names.push(name);
      recommendation.set(score, names);
    }
    count++;
  }
  return recommendation;
}

function recommend_friends(user_info, user) {
  let recommendation = select_friends(user_info, user);
  let answer = [];
  let scores = [];
  for (let score of recommendation.keys()) {
    scores.push(score);
  }
  // Sort the scores with descending order
  scores.sort((a, b) => b - a);

  for (let score of scores) {
    // If they have the same score, sort them by alphabetically.
    let arr = [...recommendation.get(score)];
    arr.sort();
    answer.push(...arr);
  }

  return answer;
}

function problem7(user, friends, visitors) {
  // adjacency list
  let adj = [];

  // Informations of users
  // Translate the name to index, and save the score.
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

  return recommend_friends(user_info, user);
}

module.exports = problem7;
