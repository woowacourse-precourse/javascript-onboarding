function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getMyFriend(user,friends){
  const foundFriends = [];
  friends.forEach(friend => {
    if(friend.includes(user)){
      const friendName = friend.filter(friend => friend !== user);
      foundFriends.push(...friendName);
    }
  })

  return foundFriends;
}

function recomendFriendList(user,myFriends,friends){
  const recomendFriends = []
  myFriends.forEach(myFriend=>{
    for (let friend of friends){
      if (friend.includes(myFriend) && friend.includes(user) === false){
        const recomendFriendName = friend.filter(friend=> friend !== myFriend);
        recomendFriends.push(...recomendFriendName)
      }
    }
  })

  return recomendFriends
}

function getnewVisitorList(myFriends,visitors){
  let totalVisitorsList = visitors;
  for (let name of myFriends){
      totalVisitorsList = totalVisitorsList.filter(visitor => visitor !== name);
  }

  return totalVisitorsList;
}

module.exports = problem7;
