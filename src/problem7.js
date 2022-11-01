function problem7(user, friends, visitors) {
  var answer;
  let userFriends = [];
  let newUserFriends = [];
  let userFriendMap = new Map()

  //유저친구들구하기

  for (let friend of friends) {
    if (friend.includes(user)) {
      if (friend[0] === user) {
        userFriends.push(friend[1])
      } else {
        userFriends.push(friend[0])
      }
    } else {
      userFriendMap.set(friend[0], 0);
      userFriendMap.set(friend[1], 0);
    }
  }

  for(let friend of userFriends) {
    userFriendMap.delete(friend)
  }

  for(let friend of friends) {
    userFriends.forEach((userFriend) => {
      if(friend.includes(userFriend)) {
        const FOfF = friend.find((name) => name != user && name != userFriend)
        if(FOfF) {
          newUserFriends.push(FOfF)
        }
      }
    })
  }


  return answer;
}



let user = "mrko";
let friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"]
]
let visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]

problem7(user, friends, visitors)

module.exports = problem7;