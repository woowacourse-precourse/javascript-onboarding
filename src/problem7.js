/**
 * make user list from given freinds list and visitor list.
 * @param {[string, string][]} friends friends lists in [string, string] array
 * * @param {string[]} visitors visitors lit in string array
 * @returns {string[]} user list in string array
 */
function findUserList(friends, visitors) {
  const userList = [];
  friends.forEach((relation) => {
    const friend1 = relation[0];
    const friend2 = relation[1];
    userList.push(friend1);
    userList.push(friend2);
  });
  visitors.forEach((visitor) => userList.push(visitor));
  return new Array(...new Set(userList));
}

/**
 * find friends of given user from friends list.
 * @param {string} user user name in string to find friends
 * @param {[string, string][]} friends friends lists in [string, string] array
 * @returns {string[]} freinds of given user in string array
 */
function findFriendsOfUser(user, friends) {
  const friendsOfUser = [];
  friends.forEach((relation) => {
    const friend1 = relation[0];
    const friend2 = relation[1];
    if (friend1 === user) friendsOfUser.push(friend2);
    if (friend2 === user) friendsOfUser.push(friend1);
  });
  return friendsOfUser;
}

/**
 * add friend score to each user
 * @param {Map<string, number>} scoreOfUsers current score of users in <string, number> map
 * @param {Set<string>} friendsOfUser friends of given user in string set
 * @param {[string, string][]} friends friends lists in [string, string] array
 * @returns {Map<string, number>} score of users in <string, number> map
 */
function addFriendScore(scoreOfUsers, friendsOfUser, friends) {
  const newScoreOfUsers = new Map(scoreOfUsers);
  friends.forEach((relation) => {
    const friend1 = relation[0];
    const friend2 = relation[1];
    if (friendsOfUser.has(friend1))
      newScoreOfUsers.set(friend2, newScoreOfUsers.get(friend2) + 10);
    if (friendsOfUser.has(friend2))
      newScoreOfUsers.set(friend1, newScoreOfUsers.get(friend1) + 10);
  });
  return newScoreOfUsers;
}

/**
 * add visitor score to each user
 * @param {Map<string, number>} scoreOfUsers current score of users in <string, number> map
 * @param {string[]} visitors visitor list in string array
 * @returns {Map<string, number>} score of users in <string, number> map
 */
function addVisitorScore(scoreOfUsers, visitors) {
  const newScoreOfUsers = new Map(scoreOfUsers);
  visitors.forEach((visitor) => {
    newScoreOfUsers.set(visitor, newScoreOfUsers.get(visitor) + 1);
  });
  return newScoreOfUsers;
}

function problem7(user, friends, visitors) {
  var answer;

  const userList = findUserList(friends, visitors);
  const friendsOfUser = findFriendsOfUser(user, friends);

  let scoreOfUsers = addFriendScore(
    new Map(userList.map((u) => [u, 0])),
    new Set(friendsOfUser),
    friends
  );
  scoreOfUsers = addVisitorScore(scoreOfUsers, visitors);

  return answer;
}

module.exports = problem7;
