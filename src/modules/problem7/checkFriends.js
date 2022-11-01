const addToList = require("./addToList.js");

function checkFriends(friends, usersList, friendsMap) {
  for (const [a, b] of friends) {
    addToList(a, b, usersList, friendsMap);
    addToList(b, a, usersList, friendsMap);
  }
}

module.exports = checkFriends;
