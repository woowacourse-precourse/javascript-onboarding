function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function friendsList(friends) {
  let friendsList = new Map();
  friends.map(([friendOne, friendTwo], idx) => {
    friendsList.set(
      friendOne,
      (friendsList.get(friendOne) || []).concat(friendTwo)
    );
    friendsList.set(
      friendTwo,
      (friendsList.get(friendTwo) || []).concat(friendOne)
    );
  });

  console.log(friendsList);
}
console.log(
  friendsList([
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ])
);

// console.log(
//   problem7(
//     "mrko",
//     [
//       ["donut", "andole"],
//       ["donut", "jun"],
//       ["donut", "mrko"],
//       ["shakevan", "andole"],
//       ["shakevan", "jun"],
//       ["shakevan", "mrko"],
//     ],
//     ["bedi", "bedi", "donut", "bedi", "shakevan"]
//   )
// );

module.exports = problem7;
