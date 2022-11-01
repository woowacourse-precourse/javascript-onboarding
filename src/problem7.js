function problem7(user, friends, visitors) {
  var answer = [];
  var user_arr = [];
  var user_friends = [];
  var other_friends = [];
  var other_friends_set = [];
  var visitors_set = [];
  var friends_pt_count;
  var visitors_pt_count;
  var friends_pt = [];
  var visitors_pt = [];

  user_arr.push(user);

  for (var i = 0; i < friends.length; i++) {
    if (friends[i].indexOf(user_arr[0]) !== -1) {
      user_friends.push(friends[i][0].toString());
      user_friends.push(friends[i][1].toString());
    }
  }

  for (var i = 0; i < user_friends.length; i++) {
    if (user_friends[i] === user_arr[0]) {
      user_friends.splice(i, 1);
      i--;
    }
  }

  for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < user_friends.length; j++) {
      if (friends[i].indexOf(user_friends[j]) !== -1) {
        other_friends.push(friends[i][0].toString());
        other_friends.push(friends[i][1].toString());
      }
    }
  }

  for (var i = 0; i < other_friends.length; i++) {
    for (var j = 0; j < user_friends.length; j++) {
      if (
        other_friends[i] === user_arr[0] ||
        other_friends[i] === user_friends[j]
      ) {
        other_friends.splice(i, 1);
        i--;
      }
    }
  }

  other_friends_set = Array.from(new Set(other_friends));

  friends_pt_count = (arr) =>
    arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 10 }), {});

  friends_pt = Object.entries(friends_pt_count(other_friends)).sort(
    ([, a], [, b]) => b - a
  );

  for (var i = 0; i < friends_pt.length; i++) {
    answer.push(friends_pt[i][0]);
  }

  for (var i = 0; i < visitors.length; i++) {
    for (var j = 0; j < user_friends.length; j++) {
      if (visitors[i] === user_arr[0] || visitors[i] === user_friends[j]) {
        visitors.splice(i, 1);
        i--;
      }
    }
  }

  visitors_set = Array.from(new Set(visitors));

  visitors_pt_count = (arr) =>
    arr.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});

  visitors_pt = Object.entries(visitors_pt_count(visitors)).sort(
    ([, a], [, b]) => b - a
  );

  for (var i = 0; i < visitors_pt.length; i++) {
    answer.push(visitors_pt[i][0]);
  }
  return answer;
}

module.exports = problem7;
