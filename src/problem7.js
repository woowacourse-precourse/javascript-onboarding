function problem7(user, friends, visitors) {
  const userFriend = getFriendUser(user, friends);
  const uni = getVisitorUser(user, visitors);

  getGrade(userFriend);
  // console.log(userFriend);
}

function getGrade(userFriend) {}

function getVisitorUser(user, visitors) {
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
    // console.log(countVisitor);
  }

  // console.log(unique);
  // console.log(uniqueGrade);
  return [unique, uniqueGrade];
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
