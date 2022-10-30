function problem7(user, friends, visitors) {
  const userFriends = []
  const friendOfFriends = {}

  friends.forEach((relation) => {
    const friend = getFriend(relation, user)
    if(friend){
      userFriends.push(friend)
    }
  })

  friends.forEach((relation) =>{
    const friendOfFriend = getFriendOfFriend(relation, userFriends, user)
    if(friendOfFriend){
      if(friendOfFriends[friendOfFriend] === undefined){
        friendOfFriends[friendOfFriend] = 10
      } else {
        friendOfFriends[friendOfFriend] += 10
      }
    }
  })

  visitors.forEach((visitor) => {
    if(Object.keys(friendOfFriends).includes(visitor)){
      friendOfFriends[visitor] = friendOfFriends[visitor] + 1
    } else if(!userFriends.includes(visitor)){
      friendOfFriends[visitor] = 1
    }
  })
  
  return changeObjToArray(friendOfFriends).slice(0, 5)
}

function getFriend(relation, user){
  if(relation[0] === user) return relation[1]
  else if(relation[1] === user) return relation[0]
  else return null
}

function getFriendOfFriend(relation, friendsArray, user){
  if(friendsArray.includes(relation[0]) && relation[1] !== user) return relation[1]
  else if(friendsArray.includes(relation[1]) && relation[0] !== user) return relation[0]
  else return null
}

function changeObjToArray(friendOfFriendsObj){
  const result =  Object.keys(friendOfFriendsObj)
  result.sort((a, b) => {
    if(friendOfFriendsObj[a] < friendOfFriendsObj[b]) return 1
    else if(friendOfFriendsObj[a] === friendOfFriendsObj[b]){
      if(a>b) return 1
      else if(a===b) return 0
      else return -1
    } 
    else return -1
  })
  return result
}

module.exports = problem7;
