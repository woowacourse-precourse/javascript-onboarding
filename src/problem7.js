function problem7(user, friends, visitors) {
  const usersList = getListOfUserAndFriends(friends);
  const friendsOfUsersList = findFriendOfUser(user, friends);
  const friendsUserknowWithUserFriendList = findFriendsUserknowWithUserFriend(
    friends,
    friendsOfUsersList,
    user
  );
  const scoreOfFriendsUserknowWithUserFriend =
    countScoreOfFriendsUserknowWithUserFriend(
      usersList,
      friendsUserknowWithUserFriendList
    );

  return scoreOfFriendsUserknowWithUserFriend;
}

function getListOfUserAndFriends(userFriends) {
  let member = new Array().fill(0);
  let scoreTable = [member];

  userFriends.forEach((twoFriends) => {
    twoFriends.forEach((friend) => {
      member = {};

      let declaredMember = false;
      scoreTable.forEach((scoreList) => {
        if (Object.values(scoreList).includes(friend)) {
          declaredMember = true;
        }
      });

      if (declaredMember === false) {
        member.name = friend;
        member.score = 0;
        scoreTable.push(member);
      }
    });
  });

  scoreTable.shift();

  return scoreTable;
}

function findFriendOfUser(currentUser, userFriends) {
  let friendsList = new Array().fill(0);
  let twoFriendsIndex, userIndex, friendIndex;

  userFriends.forEach((twoFriends) => {
    twoFriendsIndex = userFriends.indexOf(twoFriends);

    twoFriends.forEach((friend) => {
      if (friend === currentUser) {
        userIndex = twoFriends.indexOf(friend);

        if (userIndex === 0) {
          friendIndex = 1;
        }
        friendIndex = 0;

        friendsList.push(userFriends[twoFriendsIndex][friendIndex]);
      }
    });
  });

  return friendsList;
}

function findFriendsUserknowWithUserFriend(
  userFriends,
  friendList,
  currentUser
) {
  let friendsUserknowWithUserFriend = [];
  let twoFriendsIndex, userIndex, friendIndex;
  userFriends.forEach((twoFriends) => {
    twoFriendsIndex = userFriends.indexOf(twoFriends);

    twoFriends.forEach((friend) => {
      if (friendList.includes(friend)) {
        userIndex = twoFriends.indexOf(friend);

        friendIndex = 0;
        if (userIndex === 0) {
          friendIndex = 1;
        }

        const friendName = userFriends[twoFriendsIndex][friendIndex];
        if (friendName !== currentUser) {
          friendsUserknowWithUserFriend.push(friendName);
        }
      }
    });
  });

  return friendsUserknowWithUserFriend;
}

function countScoreOfFriendsUserknowWithUserFriend(scoreTable, users) {
  users.forEach((user) => {
    const result = scoreTable.find((item) => item.name === user);
    result.score += 10;
  });

  return scoreTable;
}

module.exports = problem7;
