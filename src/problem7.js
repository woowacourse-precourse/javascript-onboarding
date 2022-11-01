const getUsers = (friends, visitors) => {
  let arr = [];
  friends.forEach(([frined1, frined2]) => {
    if(!arr.includes(frined1)) arr.push(frined1);
    if(!arr.includes(frined2)) arr.push(frined2);
  })
  visitors.forEach((user) => {
    if(!arr.includes(user)) arr.push(user);
  });
  return arr;
}

const getUserFriends = (user, friends) => {
  let arr = [];
  friends.forEach(([frined1, frined2]) => {
    if(user === frined1) arr.push(frined2);
    if(user === frined2) arr.push(frined1);
  });
  return arr;
}

const getRecommendedFriends = (user, friends, visitors, users, userFriends) => {
  let arr = [];
  arr = users.filter((user) => !userFriends.includes(user));
  arr = arr.filter((item) => item !== user);
  return arr.map((user) => {
    let score = 0;
    friends.forEach(([friend1, friend2]) => {
      if((user === friend1 && userFriends.includes(friend2)) || (user === friend2 && userFriends.includes(friend1))){
        score += 10;
      }
    });
    visitors.forEach(visitor => {
      if(user === visitor) score++;
    })
    return {user: user, score: score}
  });
}

function problem7(user, friends, visitors) {
  const users = getUsers(friends, visitors);
  const userFriends = getUserFriends(user, friends);
  const recommendedFriends = getRecommendedFriends(user, friends, visitors, users, userFriends);

  recommendedFriends.sort((a, b) => {
    if(a.score === b.score) {
      const x = a.user.toLowerCase(), y = b.user.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    }
    return b.score - a.score;
  });

  let answer = recommendedFriends.map(({user, _}) => user);
  answer = answer.filter((_, index) => index < 5);
  return answer;
}

module.exports = problem7;
