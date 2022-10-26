function problem7(user, friends, visitors) {
  let userFriends = [];
  friends.forEach(relationship => {
    if(isfriend(user, relationship)) userFriends.push(isfriend(user, relationship));
  });
}
function isfriend(user, relationship) {
  if(relationship[0] === user) return relationship[1];
  if(relationship[1] === user) return relationship[0];
  return false;
}

module.exports = problem7;
