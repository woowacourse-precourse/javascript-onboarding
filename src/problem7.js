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
  return answer;
}

module.exports = problem7;
