// function problem7(user, friends, visitors) {
//   var answer;
//   return answer;
// }

// module.exports = problem7;

const AllFriends = [
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
function myFriendsList(userId, AllFriends) {
  // let temp = JSON.stringify();
  // let tempList = JSON.parse(temp);
  return AllFriends.filter((list) => list.includes(userId));
}

//반환된 친구 목록에서 유저아이디를 제거
function removeMyUsername(userId, filteredList) {
  const temp = JSON.stringify(filteredList);
  const changeList = JSON.parse(temp);
  changeList.map((list) => list.splice(list.indexOf(userId), 1));
  return changeList.flat();
}

//전체 목록에서 친구의 친구를 검색.
function friendsFilter(friendsList, AllFriends, userId) {
  let friFriends = [];
  AllFriends.map((each) => {
    const nFriends = isFriends(friendsList, each, userId);
    if (nFriends) friFriends.push(each);
  });
  return friFriends;
}

//친구의 친구인지 평가하여 boolean을 반환
function isFriends(friendsList, each, userId) {
  return friendsList.some(
    (friend) => each.includes(friend) && !each.includes(userId)
  );
}

function test(userId, list) {
  let filteredList = myFriendsList(userId, list);
  let friendsList = removeMyUsername(userId, filteredList);
  let friendsFriendList = friendsFilter(friendsList, list, userId);
  console.log(friendsFriendList);
}

test(userId, AllFriends);

const names = new Map().set("이룸", "상돈").set("이름", "종찬");
names.forEach((key) => {
  console.log([...names.keys()]);
  console.log(key);
});

