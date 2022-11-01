const friendArr = [];
const friendOfFriendArr = [];
let score = new Map();

function findFriends(user, friends) {
    friends.map((friend) => {
    if(friend.includes(user)){
      const deliteUserName = friend.filter((el) => el !== user);
      friendArr.push(deliteUserName)
    }
  })
  return friendArr;
}


function findFriendsOfFriend(user, friends, friendArr) {
  friends.map((friend) => {
    friendArr.map((userFriend) => {
      if(friend.includes(userFriend) && !friend.includes(user)) {
        const friendsOfFriendArr = friend.filter((el) => el !== userFriend);
        if (!friendsOfFriendArr.includes(friendsOfFriendArr[0])) {
          friendOfFriendArr.push(friendsOfFriendArr[0])
        }
      }
    })
  })
  return friendOfFriendArr;
}


function getScoreFriendOfFriend(friendOfFriendArr) {
  friendOfFriendArr.map((friendOfFriend) => {
    score.has(friendOfFriend) 
    ? score.set(friendOfFriend, score.get(friendOfFriend) + 10)
    : score.set(friendOfFriend, 10);
  })
  return score;
}


function getScoreVisitors(visitors) {
  visitors.map((visitor) => {
    if (!friendArr.includes(visitor)) {
      score.has(visitor)
      ? score.set(visitor, score.get(visitor) + 1)
      : score.set(visitor, 1);
    }
  })
  return score;
}


function problem7(user, friends, visitors) {
  findFriends(user, friends);
  findFriendsOfFriend(user, friends, friendArr);
  getScoreFriendOfFriend(friendOfFriendArr);
  getScoreVisitors(visitors);

  let scoreArr = [...score].sort((a, b) => b[1] - a[1]);
  let answer = scoreArr.slice(0, 5).map((score) => score[0]);

  return answer;
}

module.exports = problem7;
