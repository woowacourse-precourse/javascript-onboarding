function initializing(recommendScore, friendsList, friends) {
  for (let friend of friends) {
    for (let x of friend) {
      recommendScore.set(x, 0);
      friendsList.set(x, []);
    }
  }
}
function problem7(user, friends, visitors) {
  var answer = [];

  let recommendScore = new Map();
  let friendsList = new Map();
  initializing(recommendScore, friendsList, friends);
  return answer;
}

module.exports = problem7;
