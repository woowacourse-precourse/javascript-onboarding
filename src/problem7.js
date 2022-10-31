function problem7(user, friends, visitors) {
  const userFriend = getFriendUser(user, friends);
  const visitorObject = getVisitorUser(visitors);

  getGrade(user, userFriend, visitorObject);
}

function getGrade(user, userFriend, visitorObject) {
  // console.log(userFriend);
  let grade = [];
  for (let i = 0; i < visitorObject.length; i++) {
    if (visitorObject[0][i] === user) {
      delete visitorObject[0][i];
      delete visitorObject[1][i];
    }
  }

  // console.log(visitorObject);
}

function getVisitorUser(visitors) {
  const unique = visitors.filter((element, index) => {
    return visitors.indexOf(element) === index;
  });
  let uniqueGrade = [];
  for (let i = 0; i < unique.length; i++) {
    const countVisitor = visitors.reduce(
      (count, data) => (data === unique[i] ? count + 1 : count),
      0
    );
    uniqueGrade[i] = countVisitor;
  }

  return [unique, uniqueGrade]; // 출력 : [[명단], [카운트]]
}

function getFriendUser(user, friends) {
  let friend = [];
  const friendGrade = [];
  for (let i = 0; i < friends.length; i++) {
    const includeUser = friends[i].includes(user);
    if (includeUser) {
      const temp = String(friends[i]).replace(",", "");
      const crossFriend = String(temp).replace(user, "");

      for (let j = 0; j < friends.length; j++) {
        const cross = friends[j].includes(crossFriend);
        if (cross) {
          const crossTemp = String(friends[j]).replace(",", "");
          friend.push(String(crossTemp).replace(crossFriend, ""));
        }
      }
    }
  }

  for (let i = 0; i < friend.length; i++) {
    if (friend[i] === user) {
      friend.splice(i, 1);
      i--;
    }
  }

  // for (let i = 0; i < friend.length; i++) {
  //   friendGrade[i] = 1 * 10;
  // }
  console.log(friend);
  // console.log(friendGrade);
  // return [friend, friendGrade];
}

function testCode() {
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
}
testCode();
module.exports = problem7;
