function problem7(user, friends, visitors) {

  let userFriends = new Array;

  let recommendPoint = new Object

  //사용자의 친구를 구하는 기능
  for (let i = 0; i < friends.length; i++){
    if (friends[i].includes(user)) {
      userFriends.push(friends[i][0]);
    }
  }

  //함께 아는 친구의 수만큼 점수를 부여하는 기능
  friends.forEach(friend => {
    if (userFriends.includes(friend[0]) && friend[1] !== user) {
      if (friend[1] in recommendPoint) {
       recommendPoint[friend[1]] += 10;
      } else recommendPoint[friend[1]] = 10;
    }
  })
}

problem7(
  "mrko", 
  [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
)
// module.exports = problem7;
