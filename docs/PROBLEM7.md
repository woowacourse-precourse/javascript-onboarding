## 🚀 기능 요구 사항

레벨 2의 팀 프로젝트 미션으로 SNS(Social Networking Service)를 만들고자 하는 팀이 있다. 팀에 속한 크루 중 평소 알고리즘에 관심이 많은 미스터코는 친구 추천 알고리즘을 구현하고자 아래와 같은 규칙을 세웠다.

- 사용자와 함께 아는 친구의 수 = 10점
- 사용자의 타임 라인에 방문한 횟수 = 1점

사용자 아이디 user와 친구 관계를 담은 이차원 배열 friends, 사용자 타임 라인 방문 기록 visitors가 매개변수로 주어질 때, 미스터코의 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 최대 5명을 return 하도록 solution 메서드를 완성하라. 이때 추천 점수가 0점인 경우 추천하지 않으며, 추천 점수가 같은 경우는 이름순으로 정렬한다.

### 제한사항

- user는 길이가 1 이상 30 이하인 문자열이다.
- friends는 길이가 1 이상 10,000 이하인 배열이다.
- friends의 각 원소는 길이가 2인 배열로 [아이디 A, 아이디 B] 순으로 들어있다.
  - A와 B는 친구라는 의미이다.
  - 아이디는 길이가 1 이상 30 이하인 문자열이다.
- visitors는 길이가 0 이상 10,000 이하인 배열이다.
- 사용자 아이디는 알파벳 소문자로만 이루어져 있다.
- 동일한 친구 관계가 중복해서 주어지지 않는다.
- 추천할 친구가 없는 경우는 주어지지 않는다.

### 실행 결과 예시

| user   | friends                                                                                                                         | visitors                                      | result                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------- |
| "mrko" | [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ] | ["bedi", "bedi", "donut", "bedi", "shakevan"] | ["andole", "jun", "bedi"] |

# problem7 구현 코드

## 메인 함수

```
function problem7(user, friends, visitors) {
  var answer = [];
  let map = new Map();
  let mapIndex = 0;
  let userList = [];
  mapIndex = setMap(map, mapIndex, user, friends, visitors, userList);
  let relation = new Array(mapIndex);
  let userScores = new Array(mapIndex);
  setRelation(relation, friends, map);
  setUserScores(userScores, relation, visitors, userList, map);
  delScore(userScores, relation);
  sortUserScore(userScores);
  getAnswer(userScores, answer);
  return answer;
}
```

## 해시맵에 사용자를 저장하고 userList를 작성하는 함수

```
function setMap(map, mapIndex, user, friends, visitors, userList){
  map.set(user, mapIndex);
  userList.push(user);
  mapIndex++;
  mapIndex = setMapFriends(map, mapIndex, friends, userList);
  mapIndex = setMapVisitors(map, mapIndex, visitors, userList);
  return mapIndex;
}
```

## 해시맵에 friends배열에 등장하는 모든 사용자를 저장하고 userList에 사용자를 추가하는 함수(중복 제거)

```
function setMapFriends(map, mapIndex, friends, userList){
  for(let i = 0; i < friends.length; i++){
    for(let j = 0; j < 2; j++){
      if(!map.has(friends[i][j])){
        map.set(friends[i][j], mapIndex);
        userList.push(friends[i][j]);
        mapIndex++;
      }
    }
  }
  return mapIndex;
}
```

## 해시맵에 visitors에 등장하는 모든 사용자를 저장하고 userList에 사용자를 추가하는 함수(중복제거)

```
function setMapVisitors(map, mapIndex, visitors, userList){
  for(let i = 0; i < visitors.length; i++){
    if(!map.has(visitors[i])){
      map.set(visitors[i], mapIndex);
      userList.push(visitors[i]);
      mapIndex++;
    }
  }
  return mapIndex;
}
```

## firends를 토대로 사용자들간의 관계를 relation에 저장하는 함수

```
function setRelation(relation, friends, map){
  for(let i = 0; i < relation.length; i++){
    relation[i] = new Array();
  }
  for(let i = 0; i < friends.length; i++){
    let leftNode = friends[i][0];
    let rightNode = friends[i][1];
    relation[map.get(leftNode)].push(rightNode);
    relation[map.get(rightNode)].push(leftNode);
  }
}
```

## 사용자들의 점수를 구하는 함수

```
function setUserScores(userScores, relation, visitors, userList, map){
  initUserScores(userScores, userList);
  addFriendScore(userScores, relation, map);
  addVisitScore(userScores, visitors, map);
}
```

## 사용자들의 점수를 초기화하는 함수

```
function initUserScores(userScores, userList){
  for(let i = 0; i < userList.length; i++){
    userScores[i] = {
      name: "",
      score: 0,
    };
    userScores[i].name = userList[i];
  }
}
```

## 사용자들의 점수에 친구관계에 따라 10씩 추가하는 함수

```
function addFriendScore(userScores, relation, map){
  for(let i = 0; i < relation[0].length; i++){
    let friendIndex = map.get(relation[0][i]);
    for(let j = 0; j < relation[friendIndex].length; j++){
      let finalIndex = map.get(relation[friendIndex][j]);
      userScores[finalIndex].score += 10;
    }
  }
}
```

## 사용자들의 점수에 방문에 따라 1씩 추가하는 함수

```
function addVisitScore(userScores, visitors, map){
  for(let i = 0; i < visitors.length; i++){
    let userIndex = map.get(visitors[i]);
    userScores[userIndex].score += 1;
  }
}
```

## 조건에 따라 userScores 리스트의 요소를 삭제하는 함수

### user는 본인임으로 userScores에서 제외

```
function delScore(userScores, relation){
  userScores.shift();
  delZero(userScores);
  delFriend(userScores, relation);
}
```

## 점수가 0점인 사람을 제외하는 함수

```
function delZero(userScores){
  for(let i = 0; i < userScores.length; i++){
    if(userScores[i].score == 0){
      userScores.splice(i, 1);
      i--;
    }
  }
}
```

## 이미 user와 친구인 사람을 제외하는 함수

```
function delFriend(userScores, relation){
  let isFriendMap = new Map();
  for(let i = 0; i < relation[0].length; i++){
    isFriendMap.set(relation[0][i], 1);
  }
  for(let i = 0; i < userScores.length; i++){
    if(isFriendMap.has(userScores[i].name)){
      userScores.splice(i, 1);
      i--;
    }
  }
}
```

## userScores를 점수 내림차순, 동일값일 시 이름 오름차순으로 정렬하는 함수

```
function sortUserScore(userScores){
  userScores.sort(function (user1, user2){
    if(user1.score === user2.score){
      if(user1.name < user2.name){
        return user1;
      }
      return user2;
    }
    else{
      if(user1.score > user2.score){
        return user1;
      }
      return user2;
    }
  });
}
```

## 정답 배열에 최대 5명의 사용자를 추가하는 함수

```
function getAnswer(userScores, answer){
  if(userScores.length <= 5){
    for(let i = 0; i < userScores.length; i++){
      answer.push(userScores[i].name);
    }
  }
  else{
    for(let i = 0; i < 5; i++){
      answer.push(userScores[i].name);
    }
  }
}
```
