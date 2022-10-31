function problem7(user, friends, visitors) {
  let friendsOfUser = [];

  friends.map(friend => {
    for(let i = 0; i < friend.length; i++){
      if(friend[i] === user){
        i === 0? friendsOfUser.push(friend[1]) : friendsOfUser.push(friend[0]);
      }
    }
  })
  let suggestFriends = new Map();

  friends.map(friend => {
    for(let i = 0; i < friend.length; i++){
      for(let j = 0; j < friendsOfUser.length; j++){
        if(friend[i] === friendsOfUser[j]){
          i === 0? suggestFriends.set(friend[1],10) : suggestFriends.set(friend[0],10);
        }
      }
    }
    suggestFriends.delete(user);
  })

  visitors.map(visitor => {
    if(friendsOfUser.includes(visitor) === false){
      suggestFriends.set(visitor, (suggestFriends.get(visitor)||0)+1);
    }
  })

  return [...suggestFriends].sort((a,b) => b[1]-a[1])
  .map(friend => friend[0])
  .slice(0,5);
}

module.exports = problem7;
