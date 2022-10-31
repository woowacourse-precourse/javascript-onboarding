function problem7(user, friends, visitors) {

  let userFriends = new Array;

  //사용자의 친구를 구하는 기능
  for (let i = 0; i < friends.length; i++){
    if (friends[i].includes(user)) {
      userFriends.push(friends[i][0]);
    }
  }
}

problem7(
  "mrko", 
  [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
)
// module.exports = problem7;
