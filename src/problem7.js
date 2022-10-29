function problem7(user, friends, visitors) {

  //각각 친구명에 친구들 리스트 뽑기
  var map = new Map();
  for (var friend of friends) {
    var f1 = friend[0];
    var f2 = friend[1];
    settingFirend(f1, f2, map);
    settingFirend(f2, f1, map);
  }

  /**
   * user의 친구의 친구인 경우 10점 씩 부여하는 MAP 만들기
   * MAP은 키 값으로 기존 데이터 가져오기 위해 사용
   */
  var userFriends = map.get(user);
  var nameMap = new Map();
  for(var userFriend of userFriends) {
    var friendArr = map.get(userFriend);
    for (var fName of friendArr) {
      var friend;
      if (nameMap.has(fName)) {
        friend = nameMap.get(fName);
        friend.addScore(10);
      } else{
        friend = new Friend(fName);
        friend.addScore(10);
        nameMap.set(fName, friend);
      }
    }
  }

  // 타임 라인 방문자 점수 계산
  for (var visitor of visitors) {
    var friend;
    if (nameMap.has(visitor)) {
      friend = nameMap.get(visitor);
      friend.addScore(1);
    } else{
      friend = new Friend(visitor);
      friend.addScore(1);
      nameMap.set(visitor, friend);
    }
  }

  // 친구 추천 리스트 중 user와 현재 친구 제외하고 담는 Array 생성 
  var answer = new Array();
  for (var f of nameMap.values()) {
    if (f.name !== user && !userFriends.includes(f.name)) {
      answer.push(f);
    }
  }

  // 결과 리스트 정렬(점수 높은 순 > 점수 같으면 이름순)
  answer.sort((f1, f2) => {
    if (f1.score === f2.score) {
      if (f1.name > f2.name) {
        return 1;
      } else if (f1.name < f2.name) {
        return -1;
      } else {
        return 0;
      }
    }
    return f2.score - f1.score;
  });

  return answer.map(item => item.name);
} 

function settingFirend(f1, f2, map) {
  var list;
  if (map.has(f1)) {
    list = map.get(f1);
    list.push(f2);
  } else {
    list = new Array(f2);
  }
  map.set(f1, list);
}

class Friend {
  name;
  score;
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  addScore(score) {
    this.score += score;
  }
}

module.exports = problem7;
