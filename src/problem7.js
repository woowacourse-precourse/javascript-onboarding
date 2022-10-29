function problem7(user, friends, visitors) {
  var answer;
  let friendWithMe = [];
  friends.map((u) => {
    if (u[0] === user) friendWithMe.push(u[1]);
    else if (u[1] === user) friendWithMe.push(u[0]);
  });
  return answer;
}
console.log(
  problem7(
    "mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);

module.exports = problem7;
