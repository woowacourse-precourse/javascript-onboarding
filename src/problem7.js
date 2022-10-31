// **기능 요구 사항**
// 1. user와 친구인 사람들의 배열을 작성한다.
// 2. user와 친구인 사람들 중에 서로 친구인 사람들을 카운트한다.
// 3. visitors를 카운트한다.
// 4. 최종적으로 점수를 결산하여 정답 양식에 맞게 return한다.


function problem7(user, friends, visitors) {
  let userFriendArray = [];
  let friendArray = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0].includes(user)) {
      userFriendArray.push(friends[i][1])
    } else if (friends[i][1].includes(user)) {
      userFriendArray.push(friends[i][0])
    }

    console.log(userFriendArray)

    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < userFriendArray.length; j++) {
        if (friends[i][0].includes(userFriendArray[j]) && friends[i][1] !== user) {
          friendArray.push(friends[i][1])
        } else if (friends[i][1].includes(userFriendArray[j]) && friends[i][0] !== user) {
          friendArray.push(friends[i][0])
        }
      }
    }
  }
  console.log(friendArray)
}

module.exports = problem7;

problem7("mrko",[ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"])