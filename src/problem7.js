// 사람을 중복없이 한번에 모아주는 함수(user, friend 포함)
function people(friends, visitors) {
  const people = [];
  people.push(...visitors);
  friends.forEach((element) => people.push(element[0], element[1]));
  const setPeople = new Set(people);

  return setPeople;
}

// user와 친구인 사람을 찾는 함수 b
function findFriend(user, friends) {
  let userFriend = [];
  friends.forEach((element) => {
    if (element.includes(user)) {
      if (element[0] === user) {
        userFriend.push(element[1]);
      } else if (element[1] === user) {
        userFriend.push(element[0]);
      }
    }
  });
  return userFriend;
}

// user와 user의 friend를 제외한 사람 배열 b
function realPeople(user) {
  const friendList = [user, ...findFriend()];
  const peopleList = [...setPeople];

  let arrPeople = [];

  friendList.forEach((value) => {
    peopleList.forEach((element) => {
      if (element !== value) {
        arrPeople.push(element);
      }
    });
  });
  return arrPeople;
}

// 사람에 따른 점수배열
function score() {
  const arrScore = new Array(farPeople().length).fill(0);
  return arrScore;
}

// visitors: 방문횟수에 따라 1점 부여하는 함수
function grantScore(visitors, friends) {
  const arrScore = score();
  const arrPeople = realPeople();

  arrPeople.forEach((value, index) => {
    visitors.forEach((element => {
      if(element == value) {
        arrScore[index] += 1;
      }
    }))
  })
  
}

function problem7(user, friends, visitors) {
  let answer;
  return answer;
}

module.exports = problem7;
