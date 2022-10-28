// function problem7(user, friends, visitors) {
//   var answer;
//   return answer;
// }

// module.exports = problem7;

const friendsList = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];

const visiterList = ["bedi", "bedi", "donut", "bedi", "shakevan"];

const userId = "mrko";

//유저아이디가 포함된 친구 목록을 반환.
function myFriendsList(userId, friendsList) {
  return friendsList.filter((list) => list.includes(userId));
}

//반환된 친구 목록에서 유저아이디를 제거
function removeMyUsername(userId, filteredList) {
  const changeList = [...filteredList];
  changeList.map((list) => list.splice(list.indexOf(userId), 1));
  return changeList;
}

function test(userId, list) {
  let filteredList = myFriendsList(userId, list);
  let friends = removeMyUsername(userId, filteredList);
  console.log(friends);
}

test(userId, friendsList);

const newmap = new Map();
newmap.set("사과", "삼성");
newmap.set("애플", "생숭");

console.log([...newmap].flat());
