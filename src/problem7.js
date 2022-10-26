function problem7(user, friends, visitors) {
  let userFriends = [];
  let recommends = new Map();
  friends.forEach(relationship => {
    if(isfriend(user, relationship)) userFriends.push(isfriend(user, relationship));
  });
  userFriends.forEach(recommendUser => {
    friends.forEach(relationship => {
      const friend = isfriend(recommendUser, relationship)
      if(friend) {
        if(friend === user) return;
        if(recommends.has(friend)) recommends.set(friend, recommends.get(friend) + 10);
        else recommends.set(friend, 10);
      }
    });
  });
  visitors.forEach(visitor => {
    if(userFriends.includes(visitor)) return;
    if(recommends.has(visitor)) recommends.set(visitor, recommends.get(visitor) + 1);
    else recommends.set(visitor, 1);
  });
  recommends = [...recommends];
  recommends.sort((a, b) => {
    return b[1] - a[1];
  });
}
function isfriend(user, relationship) {
  if(relationship[0] === user) return relationship[1];
  if(relationship[1] === user) return relationship[0];
  return false;
}

module.exports = problem7;
