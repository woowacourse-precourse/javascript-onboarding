function problem7(user, friends, visitors) {
  let userFriends = [];
  let point = {};
  let result = [];
  checkUserFriends(user, friends, userFriends);
  addFriends(user, friends, userFriends, point);
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
module.exports = problem7;
