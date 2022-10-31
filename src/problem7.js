function problem7(user, friends, visitors) {
  const userFriend = getFriendUser(user, friends);
  const visitorObject = getVisitorUser(visitors);

  getGrade(user, userFriend, visitorObject);
  // console.log(userFriend);
}

function getGrade(user, userFriend, visitorObject) {
  //console.log(visitorObject[0][0]);
  let temp = [];
  for (let i = 0; i < visitorObject.length; i++) {
    if (visitorObject[0][i] === "bedi") {
      // console.log(visitorObject[0][i]);
      // console.log(visitorObject[1][i]);

      delete visitorObject[0][i];
      delete visitorObject[1][i];

      // console.log(visitorObject[0][i]);

      // temp = visitorObject.filter((item) => item !== visitorObject[0][i]);
      // console.log(visitorObject.filter((item) => item !== visitorObject[0][i]));
      // for (let j = 0; j < visitorObject.length; j++) {
      //   console.log(visitorObject[j][i]);
      //   // console.log(visitorObject.splice(visitorObject[j][i], 1));
      // }
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

  // console.log(unique);
  // console.log(uniqueGrade);
  return [unique, uniqueGrade]; // 출력 : [[명단], [카운트]]
}

function getFriendUser(user, friends) {
  const friend = [];

  for (let i = 0; i < friends.length; i++) {
    const includeUser = friends[i].includes(user);
    if (includeUser) {
      const temp = String(friends[i]).replace(",", "");
      friend.push(String(temp).replace(user, ""));
    }
  }

  return friend;
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
