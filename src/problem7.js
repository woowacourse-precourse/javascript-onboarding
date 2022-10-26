
function problem7(user, friends, visitors) {
  let answer = [];
  let friendListMap = new Map();
  let recommendScoreMap = new Map();

  // init friendListMap
  for(let i = 0; i < friends.length; i++) {

    let key = friends[i][0]; // 친구 A
    let value = friends[i][1]; // 친구 B

    if(!friendListMap.has(key)) {
      // map에 없는 경우 추가
      friendListMap.set(key, [value]);
      
      addOpponent(value, key, friendListMap);
      continue;
    }
    
    // map에 key 값이 있는 경우
    friendListMap.set(key, addFriendData(key, value, friendListMap)); // value 추가
    
    addOpponent(value, key, friendListMap);
  } // end for loop

  // init scroeMap
  let acquaintances = friendListMap.get(user);

  // 사용자와 함께 아는 친구 => 10점 추가
  for(let i = 0; i < acquaintances.length; i++) {
    let people = friendListMap.get(acquaintances[i]);
    let filtered = people.filter((item) => item != user); // 자기자신 filter

    for(let person of filtered) {
      setRecommendMap(person, 10, recommendScoreMap);
    }
  }

  // 친구 추가 안된 visitors 즉 친구가 아닌 사람 => 1점 추가
  let myFirends = friendListMap.get(user);
  for(let i = 0; i < visitors.length; i++) {
    if(!myFirends.includes(visitors[i])) setRecommendMap(visitors[i], 1, recommendScoreMap);

  }

  let ordered = [...recommendScoreMap].sort((a,b) => {
    if(a[1] === b[1]) {
      return (a[0] < b[0]) ? -1 : 1;
    }
    else {
      return (a[1] > b[1]) ? -1 : 1;
    }
  });

  for(const [key, value] of ordered) answer.push(key);
 
  return answer;
}

function addFriendData(key, value, map) {
  let values = map.get(key);
  values.push(value);
  return values;
}

function addOpponent(key, value, map) {
  
  // 상호 추가가 되어야 하므로 상대방 데이터 확인
  if(!map.has(key)) {
    // 없으면 새로 추가
    map.set(key, [value]);
  } else {
    // 있는 경우 get해서 새로 추가
    map.set(key, addFriendData(key, value, map));
  }
}

function setRecommendMap(key, value, map) {
  if(!map.has(key)) {
    map.set(key, value);
    return;
  }

  let score = map.get(key);
  map.set(key, score + value);
}

console.log(
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
  )
);


module.exports = problem7;
