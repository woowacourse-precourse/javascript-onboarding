function problem7(user, friends, visitors) {
  var answer;

  const userFriends = friends.reduce((acc, friend)=>{
    const [userA, userB] = friend
    if(userA === user) acc.add(userB)
    if(userB === user) acc.add(userA)
    return acc
  },new Set())


  return answer;
}

module.exports = problem7;
