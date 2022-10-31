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

function problem7(user, friends, visitors) {
  var answer;

  const UserList = findUserList(friends, visitors);
  const friendsOfUser = findFriendsOfUser(user, friends);

  return answer;
}

module.exports = problem7;
