function problem7(user, friends, visitors) {
  const friendObj = {}
  const scoreMap = new Map()
  initMap(friendObj, friends,scoreMap);

  console.log(scoreMap, friendObj);

  
}

function initMap(obj, friends,scoreMap) {
  friends.forEach((val) => {
    const [friendA, friendB] = val;
    if (!obj[friendA]) {
      obj[friendA] = [];
    }
    if (!obj[friendB]) {
      obj[friendB] = [];
    }
    scoreMap.set(friendB,0);
    scoreMap.set(friendA,0);
    obj[friendA].push(friendB);
    obj[friendB].push(friendA);
  })
}
module.exports = problem7;


problem7("mrko",[ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ],["bedi", "bedi", "donut", "bedi", "shakevan"])