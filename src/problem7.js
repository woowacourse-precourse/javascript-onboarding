function initializing(recommendScore, friendsList, friends) {
  for (let friend of friends) {
    for (let x of friend) {
      recommendScore.set(x, 0);
      friendsList.set(x, []);
    }
  }
}
function makeFriendsList(friendsList, friends) {
  for (let friend of friends) {
    friendsList.get(friend[0]).push(friend[1]);
    friendsList.get(friend[1]).push(friend[0]);
  }
}
function problem7(user, friends, visitors) {
  var answer = [];

  let recommendScore = new Map();
  let friendsList = new Map();
  initializing(recommendScore, friendsList, friends);
  makeFriendsList(friendsList, friends);
  return answer;
}

module.exports = problem7;
