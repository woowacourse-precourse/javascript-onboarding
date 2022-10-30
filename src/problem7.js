function problem7(user, friends, visitors) {
  var answer = [];
  var myObj = new Object();
  var check = 0;
  var realFriend = "";
  var insideFriend = "";
  var tmp = "";
  var forAnswer = [];

  // 친구 관계 확인을 위한 오브젝트 생성 friends에서의 관계.
  friends.forEach((element) => {
    if (myObj[element[0]]) {
      myObj[element[0]].push(element[1]);
    } else {
      myObj[element[0]] = [0];
      myObj[element[0]].push(element[1]);
    }

    if (myObj[element[1]]) {
      myObj[element[1]].push(element[0]);
    } else {
      myObj[element[1]] = [0];
      myObj[element[1]].push(element[0]);
    }
  });

  // 단순 방문자인 경우.
  visitors.forEach((element) => {
    if (!myObj[element]) {
      myObj[element] = [0];
    }
  });

  //유저도 포함시켜, 유저에게 잘못된 점수를 주는것을 방지합니다.
  myObj[user].push(user);

  //사용자와 함께 아는 친구의 수를 구하는 기능을 합니다.
  for (let i = 1; i < myObj[user].length - 1; i++) {
    realFriend = myObj[user][i];
    // console.log(realFriend);
    for (let j = 1; j < myObj[realFriend].length; j++) {
      insideFriend = myObj[realFriend][j];

      for (let k = 1; k < myObj[user].length; k++) {
        if (insideFriend === myObj[user][k]) {
          check = 1;
          break;
        }
      }
      if (!check) {
        myObj[insideFriend][0] += 10;
      } else {
        check = 0;
      }
    }
  }

  visitors.forEach((element) => {
    for (let i = 1; i < myObj[user].length; i++) {
      if (element === myObj[user][i]) {
        check = 1;
        break;
      }
    }
    if (!check) {
      myObj[element][0] += 1;
    } else {
      check = 0;
    }
  });
  for (let el in myObj) {
    forAnswer.push([myObj[el][0], el]);
  }

  // 숫자에 대한 정렬.
  forAnswer.sort(function (a, b) {
    return b[0] - a[0];
  });

  // 점수가 동일한 경우 이름을 사전순으로 정렬합니다.
  for (let i = 0; i < forAnswer.length - 1; i++) {
    if (forAnswer[i][0] === forAnswer[i + 1][0]) {
      for (let j = 0; j < forAnswer.length - 1 - i; j++) {
        if (
          forAnswer[j][1] > forAnswer[j + 1][1] &&
          forAnswer[j][0] === forAnswer[j + 1][0]
        ) {
          // console.log(`${forAnswer[i][1]} and ${forAnswer[j][1]} 교환`);
          tmp = forAnswer[j][1];
          forAnswer[j][1] = forAnswer[j + 1][1];
          forAnswer[j + 1][1] = tmp;
        }
      }
      tmp = "";
    }
  }

  forAnswer.forEach((element) => {
    if (element[0] != 0) {
      answer.push(element[1]);
    }
  });

  return answer;
}

module.exports = problem7;
