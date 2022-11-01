//user는 1-30인 문자열
//friends는 1-10000인 배열
//friends의 원소는 [아이디a,아이디b](길이2)

//visitors는 길이가 0-10000이하 문자열
//아이디는 알파벳 소문자로만

//친구관계 중복x
//추천 친구가 없으면 -1
//user는 1-30인 문자열
//friends는 1-10000인 배열
//friends의 원소는 [아이디a,아이디b](길이2)

//visitors는 길이가 0-10000이하 문자열
//아이디는 알파벳 소문자로만

//친구관계 중복x
//추천 친구가 없으면 -1

function exceptUser(user) {
  //문자열
  if (typeof user != 'string') {
    console.log('not string');
    return -1;
  }
  //1-30
  if (1 > user.length || 30 < user.length) {
    console.log('id가 1미만 30초과');
    return -1;
  }
  //알파벳 소문자
  let reg = /[a-z]/g;
  if (user.match(reg) == null) {
    console.log('id는 알파벳 소문자');
    return -1;
  }

  return 0;
}
//visitor 예외
function exceptVisitors(visitors = []) {
  //1-10000
  if (10000 < visitors) {
    console.log('visitor 만 이상상');
    return -1;
  }

  //visitor의 아이디 예외사항
  for (let value of visitors) {
    if (exceptUser(value) == -1) {
      console.log('visitor의 id 오류');
      return -1;
    }
  }
  return 0;
}
//친구 예외사항
function exceptFriends(friends = [[]]) {
  if (10000 < friends) {
    console.log('친구가 만 이상');
    return -1;
  }

  for (let value of friends) {
    //friends의 원소 길이는 2
    if (value.length != 2) {
      console.log('friends의 원소길이가 2가 아님님');
      return -1;
    }
    //friends의 아이디 예외사항
    for (let id of value) {
      if (exceptUser(id) == -1) {
        console.log('friends의 id 오류');
        return -1;
      }
    }
  }

  return 0;
}

//프렌드 리스트 만들기
function makeFriendList(user = '', friends = [[]]) {
  let friendList = [];
  let reg = new RegExp(user);
  for (let f of friends) {
    //f = [아이디A,아이디B]

    if (f[0].match(reg) != null) {
      friendList.push(f[1]);
    } else if (f[1].match(reg) != null) {
      friendList.push(f[0]);
    }
  }
  return friendList.sort();
}

//유저 리스트 만들기
function makeUserList(user = '', friends = [[]], visitors = []) {
  let userList = [];
  userList.push(user);

  for (let f of friends) {
    userList.push(f[0]);
    userList.push(f[1]);
  }

  for (let v of visitors) {
    //console.log(v);
    userList.push(v);
  }

  userList = [...new Set(userList)];
  return userList;
}

//not friend 리스트 만들기
function makeNotFriendList(user, userList = [], friendList = []) {
  let notFriendList = userList;
  for (let fl of friendList) {
    //filter 조건에 맞는 원소만 골라 리스트를 만들어줌
    notFriendList = notFriendList.filter((element) => {
      //console.log(`${element}!=${fl} : ${fl != element}`);
      return fl != element && element != user;
    });
    //console.log(notFriendList);
  }

  notFriendList = [...new Set(notFriendList)];
  return notFriendList;
}

function setRecommandPoint(
  notFriendList = [],
  userFriendList = [],
  friends = [[]],
  visitors = []
) {
  //0으로 채움
  let recommandPoint = new Array(notFriendList.length).fill(0);
  //친구가 아닌사람의 친구가 내 친구일 때(친구의 친구)
  for (let i = 0; i < notFriendList.length; i++) {
    let othersFriendList = makeFriendList(notFriendList[i], friends);
    //중복되는 친구들 리스트(필터링=> othersFriendList에도 포함되는 것들을
    //fl리스트로 모음)
    let fl = userFriendList.filter((f) => othersFriendList.includes(f));
    recommandPoint[i] += 10 * fl.length;

    //visitors
    let visit = visitors.filter((v) => v == notFriendList[i]);
    recommandPoint[i] += 1 * visit.length;
  }

  return recommandPoint;
}

function action(user = '', friends = [[]], visitors = []) {
  let userList = makeUserList(user, friends, visitors);
  let userFriendList = makeFriendList(user, friends);

  const notFriendList = makeNotFriendList(user, userList, userFriendList);
  let recommandPoint = setRecommandPoint(
    notFriendList,
    userFriendList,
    friends,
    visitors
  );

  let recommand = [];
  //console.log(userList, userFriendList, notFriendList, recommandPoint);

  for (let i = 0; i < notFriendList.length; i++) {
    console.log(recommandPoint[i]);
    //0이면 추천인이 안됨
    if (recommandPoint[i] != 0) {
      recommand.push([notFriendList[i], recommandPoint[i]]);
      console.log(recommand);
    }
  }

  recommand.sort((a, b) => {
    //a,b는 [추천인이 될 사람, 점수]
    if (a[1] > b[1]) {
      return 0;
    } else if (a[1] < b[1]) {
      return 1;
    } else if (a[1] == b[1]) {
      return a[0] - b[0];
    }
  });

  //추천인은 5명까지
  if (recommand.length > 5) {
    recommand.splice(5, recommand.length);
  }

  let answer = [];
  for (let r of recommand) {
    answer.push(r[0]);
  }
  return answer;
}

function problem7(user = '', friends = [[]], visitors = []) {
  var answer;

  let eUser = exceptUser(user);
  let eFriends = exceptFriends(friends);
  let eVisitors = exceptVisitors(visitors);

  if (eUser == -1 || eFriends == -1 || eVisitors == -1) {
    return -1;
  }

  answer = action(user, friends, visitors);

  return answer;
}

module.exports = problem7;
