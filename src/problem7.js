function problem7(user, friends, visitors) {
  let answer;
  let alreadyFriends = findFriends(user, friends);
  let recommendations = [];

  for (i = 0; i < friends.length; i++) {
    let firstName = friends[i][0];
    let secondName = friends[i][1];

    if (firstName !== user && secondName !== user) {
      if (
        isFriend(firstName, alreadyFriends) &&
        !isFriend(secondName, alreadyFriends)
      ) {
        recommendations = updateRecommendations(
          recommendations,
          secondName,
          10
        );
      } else if (
        !isFriend(firstName, alreadyFriends) &&
        isFriend(secondName, alreadyFriends)
      ) {
        recommendations = updateRecommendations(recommendations, firstName, 10);
      }
    }
  }

  for (i = 0; i < visitors.length; i++) {
    if (!isFriend(visitors[i], alreadyFriends)) {
      recommendations = updateRecommendations(recommendations, visitors[i], 1);
    }
  }

  return answer;
}

function findFriends(user, friends) {
  let alreadyFriends = [];

  for (i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      if (friends[i][0] === user) alreadyFriends.push(friends[i][1]);
      else alreadyFriends.push(friends[i][0]);
    }
  }

  return alreadyFriends;
}

function isFriend(name, alreadyFriends) {
  if (alreadyFriends.includes(name)) return true;
  else return false;
}

function updateRecommendations(recommendations, name, score) {
  let flag = 0;

  for (j = 0; j < recommendations.length; j++) {
    if (recommendations[j][0] === name) {
      recommendations[j][1] += score;
      flag = 1;
      break;
    }
  }

  if (flag === 0) recommendations.push([name, score]);

  return recommendations;
}
module.exports = problem7;
