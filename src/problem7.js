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
      this.userFriends.forEach((friend) => {
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

  get getData() {
    this.scoreFriendOfFriend();
    this.scoreVisitors();
    this.deleteUserAndFriend();

    return this.scoreDictionary;
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

function compare([friendA, scoreA], [friendB, scoreB]) {
  const scoreDifference = scoreA - scoreB;
  switch(true) {
    case scoreDifference > 0:
      return -1;
    case scoreDifference < 0:
      return 1;
    case scoreDifference === 0:
      if(friendA > friendB) return 1;
      if(friendA <= friendB) return -1; 
  }
}

function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
  const scoreData = new ScoreData(user, friends, visitors, userFriends).getData;
  const recommandFriendLsit = Object.entries(scoreData)
  .sort(compare)
  .map(([friend]) => friend)
  .slice(0, 5);
  const answer = recommandFriendLsit;

  return answer;
}

module.exports = problem7;
