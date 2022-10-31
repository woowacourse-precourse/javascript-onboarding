function problem7(user, friends, visitors) {
  let answer = [];

  let friendsList = [];
  for (let i = 0; i < friends.length; i++) {
    let sliceFriends = friends[i].slice();
    sliceFriends.forEach((ele) => {
      friendsList.push(ele);
    });
  }
  const visitorFriends = friendsList.concat(visitors);
  let justFriends = new Set(visitorFriends);
  console.log(justFriends);
  return answer;
}
user = "mrko";
friends = [
  ["mrko", "jun"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["jun", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

console.log(problem7(user, friends, visitors));
module.exports = problem7;
