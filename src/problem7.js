class ScoreData {
  constructor(user, friends, visitors, userFriends) {
    this.scoreDictionary = {};
    this.user = user;
    this.friends = friends;
    this.visitors = visitors;
    this.userFriends = userFriends;
  }
}

function getUserFriends(user, friends) {
  const userFriends = [];

  friends.forEach(([firstPerson, secondPerson]) => {
    if(firstPerson === user) userFriends.push(secondPerson);
    if(secondPerson === user) userFriends.push(firstPerson);
  });

  return userFriends;
}

function problem7(user, friends, visitors) {
  var answer;
  const userFriends = getUserFriends(user, friends);
  const ScoreData = new ScoreData(user, friends, visitors, userFriends);
  return answer;
}

module.exports = problem7;
