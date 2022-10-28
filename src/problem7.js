user = "mrko";

friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];

visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
function problem7(user, friends, visitors) {
  let a = UsernotfriendsCheck(user, friends);

  let b = visitorCheck(visitors);
  // 방문자 배열 친구일때 삭제방법생각
  function visitorCheck(visitors) {
    return visitors.reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
  }

  function UsernotfriendsCheck(user, friends) {
    let check = UserFriendsCheck(user, friends);
    let usernotfriends = [];
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < check.length; j++) {
        if (friends[i].includes(check[j]) && !friends[i].includes(user)) {
          usernotfriends.push(
            friends[i].find((user) => !user.includes(check[j]))
          );
        }
      }
    }
    //[ 'andole', 'jun', 'andole', 'jun' ]
    return usernotfriends.reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 10;
      return prev;
    }, {});
    // { andole: 20, jun: 20 }
  }
  //[ 'donut', 'shakevan' ]
  function UserFriendsCheck(user, friends) {
    let userfriends = [];
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].includes(user)) {
        userfriends.push(friends[i].find((friends) => friends !== user));
      }
    }
    return userfriends;
  }
}
console.log(problem7(user, friends, visitors));

// module.exports = problem7;
// 1. 사용자와 친구인 이름 추출 => donut,shakevan
// 2. 사용자와 친구인 사람 중에서 다른 사람이 나랑 친구이지 않으면 10점
// 3. 방문자 중에서 나랑 친구이면 제외, 아니면 +1점

// function UserFriendsCheck(user, friends) {
//   let userfriends = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].includes(user)) {
//       userfriends.push(...friends[i]);
//     }
//   }
//   return userfriends
//     .map((v) => (v !== user ? v : ""))
//     .filter((v) => v !== "");
// }

// function UserFriendsCheck(user, friends) {
//   let userfriends = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].includes(user)) {
//       userfriends.push(friends[i].find((friends) => friends !== user));
//     }
//   }
//   return userfriends;
// }
