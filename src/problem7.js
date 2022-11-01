function problem7(user, friends, visitors) {
  let userFriends = [];
  let point = {};

  checkUserFriends(user, friends, userFriends); // user의 친구 확인
  addFriends(user, friends, userFriends, point);
  addTenPoint(user, friends, userFriends, point);
  addOnePoint(userFriends, point, visitors);

  // console.log(sortByValue(point), userFriends, point);
  return sortByValue(point);
}
function checkUserFriends(user, friends, userFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      userFriends.push(String(friends[i].filter((e) => e !== user)));
    }
  }
} // user의 친구를 확인하는 함수
function addFriends(user, friends, userFriends, point) {
  for (let i = 0; i < friends.length; i++) {
    for (let k = 0; k < 2; k++) {
      if (!userFriends.includes(friends[i][k]) && friends[i][k] !== user) {
        point[friends[i][k]] = 0;
      }
    }
  }
} // 친구관계가 아닌 사람들 point의 key 값으로 추가하는 함수

function addTenPoint(user, friends, userFriends, point) {
  for (let j = 0; j < friends.length; j++) {
    for (let i = 0; i < Object.keys(point).length; i++) {
      if (friends[j].includes(Object.keys(point)[i])) {
        if (
          userFriends.includes(
            friends[j][1 - friends[j].indexOf(Object.keys(point)[i])]
          )
        ) {
          point[Object.keys(point)[i]] += 10;
        }
      }
    }
  }
} // point의 key로 있는 사람들의 친구들중 user의 친구로 있다면 value +10 하는 함수

function addOnePoint(userFriends, point, visitors) {
  for (let i = 0; i < visitors.length; i++) {
    if (Object.keys(point).includes(visitors[i])) {
      point[visitors[i]] += 1;
    } else if (!userFriends.includes(visitors[i])) {
      point[visitors[i]] = 1;
    }
  }
} // visitor는 돌면서 userFriends 에 없고 point의 키값으로 없으면 point의 키로 등록하면서 동시에 value+1 userFriends 에 없고 point의 키값으로 있으면 value + 1 userFriends 에 있으면 무시 하는 함수 구현

function sortByValue(point) {
  let sortable = [];
  let result = [];
  for (let name in point) {
    sortable.push([name, point[name]]);
  }
  sortable.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] > b[0]) return 1;
    return -1;
  });
  for (let i = 0; i < sortable.length; i++) {
    if (sortable[i][1] !== 0) result.push(sortable[i][0]);
  }
  if (result.length > 5) result = result.splice(0, 5);
  return result;
} // point 객체 value를 기반으로 정렬 , 같다면 사전순 정렬 하여 상위 5개의 값 result 에 추가하는 함수
problem7(
  "hello",
  [
    ["andole", "jun"],
    ["andole", "bedi"],
    ["jun", "shakevan"],
    ["jun", "kane"],
    ["jun", "sam"],
    ["bedi", "shakevan"],
    ["bedi", "anne"],
    ["bedi", "sam"],
    ["anne", "mrko"],
  ],
  ["donut", "anne", "mrko", "mrko", "sam"]
);

module.exports = problem7;
