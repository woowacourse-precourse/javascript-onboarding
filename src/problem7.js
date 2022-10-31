function make_adj_helper(adj, a, b) {
  if (!adj.has(a)) {
    adj.set(a, [b]);
  } else {
    let temp = [...adj.get(a), b];
    adj.set(a, temp);
  }
}

function make_adj(adj, friends) {
  // Connect a and b
  for (let [a, b] of friends) {
    make_adj_helper(adj, a, b);
    make_adj_helper(adj, b, a);
  }
}

function increase_score_helper(someone, scores, base) {
  let score = base;
  if (scores.has(someone)) {
    score += scores.get(someone);
  }
  scores.set(someone, score);
}

function increase_score1(user, adj, scores) {
  // Save the user's friends
  const friends_of_user = adj.has(user) ? adj.get(user) : [];

  // Search the user's friends
  for (let friend of friends_of_user) {
    // Find the someone who are not friend with user.
    for (let someone of adj.get(friend)) {
      if (someone === user || friends_of_user.includes(someone)) {
        continue;
      }
      increase_score_helper(someone, scores, 10);
    }
  }
}

function increase_score2(user, adj, scores, visitors) {
  // Save the user's friends
  const friends_of_user = adj.has(user) ? adj.get(user) : [];

  // Search the visitors
  for (let someone of visitors) {
    // Find the someone who are not friend with user.
    if (someone === user || friends_of_user.includes(someone)) {
      continue;
    }
    increase_score_helper(someone, scores, 1);
  }
}

function recommend_friends_helper(recommendation, name, score) {
  let temp = [name];
  if (recommendation.has(score)) {
    temp.push(...recommendation.get(score));
  }
  recommendation.set(score, temp);
}

function recommend_friends(user, scores) {
  // score, [names]
  let recommendation = new Map();

  for (let name of scores.keys()) {
    if (name === user || scores.get(name) === 0) {
      continue;
    }
    let score = scores.get(name);
    recommend_friends_helper(recommendation, name, score);
  }

  return select_friends(recommendation);
}

function select_friends(recommendation) {
  let temp = [];
  for (let score of recommendation.keys()) {
    temp.push(score);
  }
  // Sort by descending order
  temp.sort((a, b) => b - a);

  let answer = [];
  for (let i = 0; i < temp.length; ++i) {
    let temp2 = [...recommendation.get(temp[i])];
    temp2.sort();
    answer.push(...temp2);
    if (answer.length >= 5) {
      break;
    }
  }

  while (answer.length > 5) {
    answer.pop();
  }
  return answer;
}

function problem7(user, friends, visitors) {
  // key(name), [friends]
  let adj = new Map();
  make_adj(adj, friends);

  // key(name), score
  let scores = new Map();

  // Search someone who are the friends with user's friends.
  increase_score1(user, adj, scores);

  // Search someone who visited user
  increase_score2(user, adj, scores, visitors);

  return recommend_friends(user, scores);
}

module.exports = problem7;
