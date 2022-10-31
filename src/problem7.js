function problem7(user, friends, visitors) {
  let answer;
  answer = start(user, friends, visitors);
  return answer;
}

//시작
function start(user, friends, visitors) {
  let result;
  check(user, friends, visitors); //오류 핸들링
  result = findRecommandFriends(user, friends, visitors);
  return result;
}

function check(user, friends, visitors) {
  //예외처리의 경우
  //1. user의 길이가 1 미만 30 초과 일 때
  //2. friends의 size가 1 미만 10,000 초과 일 때
  //3. friends 배열 안 id의 길이가 1 미만 30 초과 일 때
  //4. visitors의 size가 0 미만 10,000 초과 일 때
  //5. 사용자 아이디가 알파벳 소문자가 아닐때

  try {
    isUserLengthOver(user);
    isFriendsSizeOver(friends);
    isIdLengthOver(friends);
    isVisitorSizeOver(visitors);
    isIdLowerCase(user, friends);
  }catch(e) {
    console.log(e);
  }
}

//user 닉네임 길이 판별
function isUserLengthOver(user) {
  if(user.length < 1 || user.length > 30)
    throw new Error('user는 1자 이상 30자 이하여야 합니다 !');
}

//친구 관계 크기 판별
function isFriendsSizeOver(friends) {
  if(friends.size < 1 || friends.size > 10000)
    throw new Error('friends의 크기는 1 이상 10,000 이하여야 합니다 !');
}

//id 길이 판별
function isIdLengthOver(friends) {
  for(let i = 0; i < friends.length; i++) {
    for(let j = 0; j < 2; j++) {
      if(friends[i][j].length < 1 || friends[i][j].length > 30)
        throw new Error('아이디는 1자 이상 30자 이하여야 합니다 !');
    }
  }
}

//visitor 크기 판별
function isVisitorSizeOver(visitors) {
  if(visitors.size < 0 || visitors.size > 10000)
    throw new Error('visitor의 크기는 0 이상 10,000 이하여야 합니다 !');
}

//id 소문자인지 판별
function isIdLowerCase(user, friends) {
  let regExp = /^[a-z]+$/i; 

  if(regExp.test(user) === false)
    throw new Error('user id는 소문자로 이루어져야 합니다 !');

  for(let i = 0; i < friends.length; i++) {
    for(let j = 0; j < friends[i].length; j++) {
      if(regExp.test(friends[i][j]) === false)
        throw new Error('id는 소문자로 이루어져야 합니다 !');
    }
  }
}

//추천 친구를 찾음
function findRecommandFriends(user, friends, visitors) {
  let recommandFriendList = [];
  let score = [];
  let userFriendList = findUserFriends(user, friends);
  let newVisitors = checkVisitors(userFriendList, visitors);

  //친구의 친구들을 받아옴 (이미 친구인 애들 제외)
  for(let i = 0; i < userFriendList.length; i++) {
    recommandFriendList = findFriends(
      user, friends, userFriendList[i], recommandFriendList
    );
  }

  //점수계산
  score = scoreCheck(recommandFriendList, newVisitors, score);

  //상위 5명 return
  return scoreReturn(score);
}

//user와 친구인 사람들을 찾음
function findUserFriends(user, friends) {
  let friend = [];

  for(let i = 0; i < friends.length; i++) {
    if(friends[i][0] === user)
      friend.push(friends[i][1]);
    else if(friends[i][1] === user)
      friend.push(friends[i][0]);
  }

  return friend;
}

//방문자 중 이미 친구인 사람들을 거름
function checkVisitors(userFriendList, visitors) {
  let newVisitors = [];
  let check;

  for(let i = 0; i < visitors.length; i++) {
    check = 1;
    for(let j = 0; j < userFriendList.length; j++) {
      if(visitors[i] === userFriendList[j]) {
        check = 0;
        break;
      }
    }
    if(check)
      newVisitors.push(visitors[i]);
  }

  return newVisitors;
}

//user와 친구인 사람들의 친구들을 찾음
function findFriends(user, friends, friendName, recommandFriendList) {
  for(let i = 0; i < friends.length; i++) {
    if(friends[i][0] === friendName && friends[i][1] !== user)
      recommandFriendList.push(friends[i][1]);
    else if(friends[i][1] === friendName && friends[i][0] !== user)
      recommandFriendList.push(friends[i][0]);
  }

  return recommandFriendList;
}

//점수 측정
function scoreCheck(recommandFriendList, visitors, score) {
  let friendObject;
  let found;

  for(let i = 0; i < recommandFriendList.length; i++) {
    friendObject = {
      name: recommandFriendList[i],
      value: 10, 
    }

    found = score.findIndex(e => e.name === recommandFriendList[i]);

    if(found === -1)
      score.push(friendObject);
    else
      score[found].value += 10;
  }

  for(let i = 0; i < visitors.length; i++) {
    friendObject = {
      name: visitors[i],
      value: 1, 
    }

    found = score.findIndex(e => e.name === visitors[i]);

    if(found === -1)
      score.push(friendObject);
    else
      score[found].value += 1;
  }

  return score;
}


//점수 탑 5 리턴
function scoreReturn(score) {
  let topName = [];
  let size = 0;

  score = score.sort((a, b) => b.value - a.value);

  if(score.length > 5)
    size = 5;
  else
    size = score.length;

  for(let i = 0; i < size; i++)
    topName.push(score[i].name);

  console.log(topName);
  return topName;
}

module.exports = problem7;
