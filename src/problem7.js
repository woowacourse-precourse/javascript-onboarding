function problem7(user, friends, visitors) {
  const userFriend = getFriendUser(user, friends);
  const visitorObject = getVisitorUser(visitors);

  getGrade(user, userFriend, visitorObject);
}

function getGrade(user, userFriend, visitorObject) {
  console.log(userFriend);
  for (let i = 0; i < visitorObject.length; i++) {
    if (visitorObject[0][i] === user) {
      delete visitorObject[0][i];
      delete visitorObject[1][i];
    }
  }

  console.log(visitorObject);
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
  const friend = [];
  const friendGrade = [];
  for (let i = 0; i < friends.length; i++) {
    const includeUser = friends[i].includes(user);
    if (includeUser) {
      const temp = String(friends[i]).replace(",", "");
      friend.push(String(temp).replace(user, ""));
    }
  }
  for (let i = 0; i < friend.length; i++) {
    friendGrade[i] = 1 * 10;
  }

  return [friend, friendGrade];
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
