function problem7(user, friends, visitors) {
  let userFriends = [];
  let point = {};

  checkUserFriends(user, friends, userFriends);
  addFriends(user, friends, userFriends, point);
  addTenPoint(user, friends, userFriends, point);
  addOnePoint(userFriends, point, visitors);
  return sortByValue(point);
}
function checkUserFriends(user, friends, userFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      userFriends.push(String(friends[i].filter((e) => e !== user)));
    }
  }
}
function addFriends(user, friends, userFriends, point) {
  for (let i = 0; i < friends.length; i++) {
    for (let k = 0; k < 2; k++) {
      if (!userFriends.includes(friends[i][k]) && friends[i][k] !== user) {
        point[friends[i][k]] = 0;
      }
    }
  }
}
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
}
function addOnePoint(userFriends, point, visitors) {
  for (let i = 0; i < visitors.length; i++) {
    if (Object.keys(point).includes(visitors[i])) {
      point[visitors[i]] += 1;
    } else if (!userFriends.includes(visitors[i])) {
      point[visitors[i]] = 1;
    }
  }
}
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
}
module.exports = problem7;
