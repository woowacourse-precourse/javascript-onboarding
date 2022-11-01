function problem7(user, friends, visitors) {

  let friendScoreMap = new Map();

  let myFriends = [];

  for (let friend of friends) {
    if (friend.includes(user)) {
      friend.indexOf(user) == 0 ? myFriends.push(friend[1]) : myFriends.push(friend[0]);
    }
  }

  
}

module.exports = problem7;
