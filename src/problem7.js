function alreadyFriend(user, friends) {
  let result = [];
  for (let i = 0; i < friends.length; i++) {
      if (user == friends[i][0]) {
          result.push(friends[i][1]);
      }
      if (user == friends[i][1]) {
          result.push(friends[i][0]);
      }
  }
  return result;
}
function problem7(user, friends, visitors) {
  let answer;
  return answer;
}
module.exports = problem7;
