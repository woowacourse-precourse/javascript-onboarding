function problem7(user, friends, visitors) {
  const known_friends = user_friends(user, friends);
  const unknown_friends = [];

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < known_friends.length; j++) {
      if (friends[i].includes(known_friends[j][0])) {
        unknown_friends.push(
          ...friends[i].filter((el) => el !== known_friends[j][0] && el !== user)
        );
      }
    }
  }

  for (let k = 0; k < visitors.length; k++) {
    for (let l = 0; l < known_friends.length; l++) {
      if (visitors[k] === known_friends[l][0]) visitors.splice(k, 1);
    }
  }
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
