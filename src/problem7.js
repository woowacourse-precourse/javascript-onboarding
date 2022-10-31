function problem7(user, friends, visitors) {
  const userFriend = getFriendUser(user, friends);
  const visitorObject = getVisitorUser(visitors);

  getGrade(user, userFriend, visitorObject);
  //getgrade에서 리턴받은것 점수같으면 오름차순으로 sort후 리턴
}

function getGrade(user, userFriend, visitorObject) {
  let grade = [];
  for (let i = 0; i < visitorObject.length; i++) {
    if (visitorObject[0][i] === user) {
      delete visitorObject[0][i];
      delete visitorObject[1][i];
    }
  }
  console.log(userFriend);
  console.log(visitorObject);

  // userfrined에서 겹치는 것 갯수 세서 카운트세고 카운트 x 10처리

  // visitorObject는 1점씩만 오르면되니까 userfriend랑 같은객체 합쳐주면됨

  // return 은 객체 합쳐서 점수도 합쳐서
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
  const userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    const includeUser = friends[i].includes(user);
    if (includeUser) {
      const temp = String(friends[i]).replace(",", "");
      const crossFriend = String(temp).replace(user, "");
      userFriend.push(crossFriend);
      // console.log(crossFriend);

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

  for (let i = 0; i < friend.length; i++) {
    friendGrade[i] = 1 * 10;
  }
  console.log(userFriend);
  return [friend, friendGrade, userFriend];
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
