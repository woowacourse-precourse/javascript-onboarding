function getNetwork(friends) {
  let network = new Map();
  for (let friend of friends) {
    if (!network.has(friend[0])) {
      network.set(friend[0], []);
    }
    if (!network.has(friend[1])) {
      network.set(friend[1], []);
    }
    network.get(friend[0]).push(friend[1]);
    network.get(friend[1]).push(friend[0]);
  }
  return network;
}
function problem7(user, friends, visitors) {
  var answer;
  return answer;
}
module.exports = problem7;
