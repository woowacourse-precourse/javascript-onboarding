function problem7(user, friends, visitors) {
  var answer = setPeople(user, friends, visitors);
  return answer;
}
const userArr = [];
const friendsArr = [];
const visitorsArr = [];
const scored = [];
const zero = [];
const zero2 = [];

function setPeople(user, friends, visitors){
  userArr.push(user);
    for(i = 0; i < friends.length; i++) {
      friendsArr.push(friends[i]);
    }
    for(i = 0; i < visitors.length; i++){
      visitorsArr.push(visitors[i])
    }
    setScore(user, friends, visitors);
    return Object.keys(setScore(user, friends, visitors))
  }

function setScore(user, friends, visitors) {
  for(j = 0; j < 10; j++){    //10점 얻는 user 친구의 친구들을 배열에 정리
    for(i = 0; i < friends.length; i++){  
      if(friendsArr[i][1] !== user){
        scored.push(friendsArr[i][1]);
      }
    }
  }
  for(i = 0; i < friends.length; i++){  //이미 user의 친구
    if(friendsArr[i][1] === user){
      zero.push(friendsArr[i][0]);
    }
  }

  for(j = 0; j < zero.length-1; j++) {  //1점 얻는 user의 타임라인에 방문한 사람을 배열에 정리
    for(i = 0; i < visitors.length; i++){
      if(visitorsArr[i] !== zero[j] && visitorsArr[i] !== zero[j+1]){
        scored.push(visitorsArr[i])
      } else if(visitorsArr[i] === zero[j] || visitorsArr[i] === zero[j+1]){  //이미 user의 친구
        zero2.push(visitorsArr[i])
      }
    }
  }
  
  const result = {};
  scored.forEach((element) => { 
    result[element] = (result[element] || 0)+1; 
  });
  return result;
}

module.exports = problem7;
