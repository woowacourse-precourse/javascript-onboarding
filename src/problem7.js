function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function errorHandler(user, friends, visitors) {
  if (user.length >= 30)  return true;
  if (friends.length > 10000 | visitors > 10000)  return true;

  return false;
}

module.exports = problem7;
