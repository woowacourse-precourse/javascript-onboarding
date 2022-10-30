class ScoreData {
  constructor(user, friends, visitors, userFriends) {
    this.scoreDictionary = {};
    this.user = user;
    this.friends = friends;
    this.visitors = visitors;
    this.userFriends = userFriends;
  }
  isFriend(target, friend) {
    return target === friend ? true : false;
  }
  giveScore(target, score) {
    if(!this.scoreDictionary[target]) this.scoreDictionary[target] = score;
    if(this.scoreDictionary[target]) this.scoreDictionary[target] += score;
  }
  scoreFriendOfFriend() {
    this.friends.forEach(([firstPerson, secondPerson]) => {
      this.userFriends((friend) => {
        if(this.isFriend(firstPerson, friend)) this.giveScore(secondPerson, 10);
        if(this.isFriend(secondPerson, friend)) this.giveScore(firstPerson, 10);
      });
    })
  }
  scoreVisitors() { this.visitors.forEach((visitor) => this.giveScore(visitor, 1)); }
  deleteUserAndFriend() {
    if(this.scoreDictionary[this.user]) delete this.scoreDictionary[this.user];
    this.userFriends.forEach((friend) => {
      if(this.scoreDictionary[friend]) delete this.scoreDictionary[friend];
    });
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
