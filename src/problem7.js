function problem7(user, friends, visitors) {
  var result = [];
  let users;
  let score;

  users = listing(friends);
  score = listingScore(friends);
  result = recommendScore(user, visitors, users, score);

  return result;
}


function listing(friends) {
  let users = {};
  let score = {};

  for (let val of friends) {
    if (!users.hasOwnProperty(val[0]))
      users[val[0]] = [val[1]];
    else if (users.hasOwnProperty(val[0]))
      users[val[0]].push(val[1]);

    if (!users.hasOwnProperty(val[1]))
      users[val[1]] = [val[0]];
    else if (users.hasOwnProperty(val[1]))
      users[val[1]].push(val[0]);
  }

  return users;
}


function listingScore(friends) {
  let score = {};

  for (let val of friends) {
    if (!score.hasOwnProperty(val[0]))
      score[val[0]] = 0;
    if (!score.hasOwnProperty(val[1]))
      score[(val[1])] = 0;
  }

  return score;
}


function recommendScore(user, visitors, users, score) {
  let friend = [];
  let answer = [];

  for (let usr in users) {
    if (users[usr].includes(user)) {
      friend.push(usr);
      for (let recomFriend of users[usr])
        score[recomFriend] += 10;
    }
  }
  for (let recomVisitors of visitors) {
    if (!score.hasOwnProperty(recomVisitors))
      score[recomVisitors] = 1;
    else
      score[recomVisitors] += 1;
  }

  // excluding user and user's friends
  for (let fri of friend) {
    if (score.hasOwnProperty(fri))
      delete score[fri];
  }
  if (score.hasOwnProperty(user))
    delete score[user];

  
  let sorted = Object.entries(score).sort((a,b) => 
  {
    b[1] - a[1]; if (b[1]===a[1]) b[0]-a[0];
  });
  for (let ele of sorted) {
    answer.push(ele[0])
  }
  return answer.slice(0,5);
}

module.exports = problem7;