function findFriendsOfUser(user, friends) {
  let friendsArray = [];

  friends.map((friend) => {
    if (friend.includes(user)) {
      let newArray = friend.filter((element) => element !== user);
      friendsArray.push(newArray[0]);
    }
  });
  return friendsArray;
}

function findFriendsOfFriend(user, friendsOfUser, friends) {
  let friendsOfFriend = [];

  friends.map((friend) => {
    friendsOfUser.map((myFriend) => {
      if (friend.includes(myFriend) && !friend.includes(user)) {
        let newArray = friend.filter((element) => element !== myFriend);
        if (!friendsOfFriend.includes(newArray[0])) {
          friendsOfFriend.push(newArray[0]);
        }
      }
    });
  });
  return friendsOfFriend;
}

function makeCandidate(name, score) {
  let candidate = [];

  candidate.push(name);
  candidate.push(score);
  return candidate;
}

function scoreCandidates(friends, visitors, friendsOfUser) {
  let candidatesArray = [];

  friends.map((friend) => {
    candidatesArray.push(makeCandidate(friend, 20));
  });

  visitors.map((visitor) => {
    let isDone = false;
    candidatesArray.map((candidate, index) => {
      if (candidate.includes(visitor)) {
        candidatesArray[index][1]++;
        isDone = true;
      }
    });
    if (!isDone && !friendsOfUser.includes(visitor)) {
      candidatesArray.push(makeCandidate(visitor, 1));
    }
  });

  return candidatesArray;
}

module.exports = problem7;
