function problem7(user, friends, visitors) {
  const friendObj = {};
  const scoreMap = new Map();
  initMap(friendObj, friends, scoreMap);

  addFriendScore(friendObj, scoreMap, user, visitors);

  const answer = findAnswer(scoreMap);

  return answer;
}

function initMap(obj, friends, scoreMap) {
  friends.forEach((val) => {
    const [friendA, friendB] = val;
    if (!obj[friendA]) {
      obj[friendA] = [];
    }
    if (!obj[friendB]) {
      obj[friendB] = [];
    }
    scoreMap.set(friendA, 0)
    scoreMap.set(friendB, 0);
    obj[friendA].push(friendB);
    obj[friendB].push(friendA);
  })
}

function addFriendScore(friendObj, scoreMap, user, visitors) {
  const userFriend = friendObj[user];
  const userSet = new Set([...userFriend, user]);
  for (let i = 0; i < userFriend.length; i++) {
    const cur = userFriend[i];
    const curFriends = friendObj[cur];
    curFriends.forEach(friend => {
      if (!userSet.has(friend)) {
        scoreMap.set(friend, scoreMap.get(friend) + 10);
      }
    })
  }
  visitors.forEach(friend => {
    if (!userSet.has(friend)) {
      scoreMap.has(friend) ?
        scoreMap.set(friend, scoreMap.get(friend) + 1) : scoreMap.set(friend, 1);
    }
  })
}

function findAnswer(scoreMap){
  const keyArr = [...scoreMap.keys()].filter(key => scoreMap.get(key) > 0);

  keyArr.sort((key1, key2) =>{
    if(scoreMap.get(key1) < scoreMap.get(key2)) return 1;
    else if(scoreMap.get(key1) > scoreMap.get(key2)) return -1;
    else{
      if(key1 <key2) return -1;
      else return 1;
    }
  })

  return [...keyArr];
}



module.exports = problem7;

function test(){
const temp = problem7("mrko", [["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"])
console.log(temp);

}

test();