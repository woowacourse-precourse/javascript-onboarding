function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function user_friends(user, friends) {
  const known_friends = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      known_friends.push(friends[i].filter((el) => el !== user));
    }
  }

  return known_friends;
}

function friends_score(arr) {
  return arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 10 }), {});
}

function visited_friends(arr) {
  return arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
}
module.exports = problem7;
