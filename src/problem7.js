function problem7(user, friends, visitors) {
  var answer;

  let friend = [];
  let nearFriend = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1] === user) {
      friend.push(friends[i][0]);
    } else {
      nearFriend.push(friends[i][1]);
    }
  }

  const visitTimeline = visitors.filter((who) => !friend.includes(who));

  let score = {};

  nearFriend.forEach((who) => {
    if (score[who]) {
      score[who] = score[who] + 10;
    } else {
      score[who] = 10;
    }
  });

  visitTimeline.forEach((who) => {
    if (score[who]) {
      score[who] = score[who] + 1;
    } else {
      score[who] = 1;
    }
  });

  score = Object.entries(score)
    .slice(0, 5)
    .sort(function (a, b) {
      if (a[1] < b[1]) {
        return 1;
      } else if (a[1] > b[1]) {
        return -1;
      } else if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      }
    });

  let answer = [];
  for (let i = 0; i < score.length; i++) {
    answer.push(score[i][0]);
  }

  return answer;
}

module.exports = problem7;
