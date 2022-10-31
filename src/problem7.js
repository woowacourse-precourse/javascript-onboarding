function problem7(user, friends, visitors) {
  const friendsOfUsersList = findFriendOfUser(user, friends);
  const usersList = getListOfUsers(friends, visitors, friendsOfUsersList, user);
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
  const scoreOfUsersVisitedTimeline = countUsersVisitedTimeline(
    scoreOfFriendsUserknowWithUserFriend,
    visitors
  );
  const result = arrangeInAscendingOrder(scoreOfUsersVisitedTimeline);

  return result;
}

function getListOfUsers(userFriends, userVisitors, friendsList, currentUser) {
  let member = new Array().fill(0);
  let scoreTable = [member];

  userFriends.forEach((twoFriends) => {
    twoFriends.forEach((friend) => {
      if (
        Object.values(friendsList).includes(friend) === false &&
        friend !== currentUser
      ) {
        addInformationIntoScoreTable(scoreTable, friend);
      }
    });
  });

  userVisitors.forEach((visitor) => {
    if (Object.values(friendsList).includes(visitor) === false) {
      addInformationIntoScoreTable(scoreTable, visitor);
    }
  });

  scoreTable.shift();

  return scoreTable;
}

function addInformationIntoScoreTable(table, user) {
  let member = {};
  let declaredMember = false;

  table.forEach((scoreList) => {
    if (Object.values(scoreList).includes(user)) {
      declaredMember = true;
    }
  });

  if (declaredMember === false) {
    member.name = user;
    member.score = 0;
    table.push(member);
  }
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

function countUsersVisitedTimeline(scoreTable, users) {
  users.forEach((user) => {
    const result = scoreTable.find((item) => item.name === user);

    if (result !== undefined) {
      result.score += 1;
    }
  });

  return scoreTable;
}

function arrangeInAscendingOrder(table) {
  const result = table.sort(
    (firstInformation, secondInformation) =>
      secondInformation.score - firstInformation.score
  );
  const topFiveList = result.splice(0, 5);
  const nameList = new Array();

  topFiveList.forEach((topItem) => {
    nameList.push(topItem.name);
  });

  return nameList;
}

module.exports = problem7;
