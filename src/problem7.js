function problem7(user, friends, visitors) {
  const known_friends = user_friends(user, friends);
  const unknown_friends = [];
  let recommend_friends_score;
  let answer;

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

  const unknown_friends_arr = Object.entries(friends_score(unknown_friends));
  const visited_friends_arr = Object.entries(visited_friends(visitors));

  for (let m = 0; m < unknown_friends_arr.length; m++) {
    for (let n = 0; n < visited_friends_arr.length; n++) {
      if (unknown_friends_arr[m][0] === visited_friends_arr[n][0]) {
        unknown_friends_arr[m][1] += visited_friends_arr[n][1];
        visited_friends_arr.splice(n, 1);
      }
    }
  }

  for (let p = 0; p < visited_friends_arr.length; p++) {
    unknown_friends_arr.push(visited_friends_arr[p]);
  }

  recommend_friends_score = Object.fromEntries(unknown_friends_arr);

  recommend_friends_score = Object.fromEntries(
    Object.entries(recommend_friends_score).sort(([a], [b]) => (a < b ? -1 : 1))
  );

  recommend_friends_score = Object.fromEntries(
    Object.entries(recommend_friends_score).sort(([, a], [, b]) => (a > b ? -1 : 1))
  );

  answer = Object.keys(recommend_friends_score);

  if (answer.length > 5) answer.length = 5;

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
