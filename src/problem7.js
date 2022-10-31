function problem7(user, friends, visitors) {
  userFriend = new Array();
  //friends 배열에서 사용자와 친구인 닉네임 찾기
  friends.map((item) => {
    if (item.includes(user)) {
      if (item[0] === user) {
        userFriend.push(item[1]);
      } else {
        userFriend.push(item[0]);
      }
    }
  });

  console.log(userFriend);
}
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
);
module.exports = problem7;
