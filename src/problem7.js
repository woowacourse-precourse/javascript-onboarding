function problem7(user, friends, visitors) {
  let userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      for (let z = 0; z < friends[i].length; z++) {
        if (friends[i][z] != user) {
          userFriend.push(friends[i][z]);
        }
      }
    }
  }

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      friends.splice(i, 1);
      i -= 1;
    }
  }
}
module.exports = problem7;
