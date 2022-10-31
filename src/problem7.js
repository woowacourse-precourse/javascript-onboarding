/**
 * @param {string} user
 * @param {string[][]} friends
 * @param {string[]} visitors
 * @returns {string[]}
 */
function problem7(user, friends, visitors) {
  const bestFriends = [];

  friends.forEach((friend) => {
    if (friend.find((id) => id === user)) {
      bestFriends.push(user === friend[1] ? friend[0] : friend[1]);
    }
  });
}

module.exports = problem7;
