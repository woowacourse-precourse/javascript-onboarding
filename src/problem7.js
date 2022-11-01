function problem7(user, friends, visitors) {
  let answer = [];
  const userFriends = friends.map(i => i.filter(j => !user.includes(j))).filter(j => j.length < 2).flat();
  const recommendationList = [...new Set(friends.map(i => i.filter(j => !userFriends.includes(j))).filter(j => !user.includes(j)).filter(j => j.length < 2).flat())]
  //배열과 이름과 점수를 담아보자
  const scoreFriendsList = recommendationList.map(i => 10)
  //두 배열의 길이는 항상 같아야 함.
  //방문자 확인해서 점수 올려주기
  visitors.forEach(i => {
    if (recommendationList.indexOf(i) !== -1) {
      scoreFriendsList[recommendationList.indexOf(i)]++
    } else if (recommendationList.indexOf(i) === -1 && userFriends.indexOf(i) === -1) {
      recommendationList.push(i);
      scoreFriendsList.push(1);
    }
  })

  //이름과 점수 추출함
  // console.log(recommendationList)
  // console.log(scoreFriendsList)
  
  //이름과 점수 가지고 점수를 비교해서 등수로 정렬하기
  //두 개의 배열로 관리하면 힘들다. 하나로 묶어서 점수 기준으로 정렬하기
  const countArr = [];
  for (let i = 0; i < recommendationList.length; i++) {
    countArr.push([recommendationList[i], scoreFriendsList[i]])
  }

  countArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return (a[0] - b[0])
    } else {
      (b[1] - a[1])
    }
  })
  
  //정렬된 기준으로 정답에 푸시
  countArr.forEach(i => answer.push(i[0]))
  return answer;
}

module.exports = problem7;


//친구 추출 로직을 분리 해보자


/**
 * 기준값을 받아 배열을 순회하여 기준값과 함께 있는 친구를 찾고 기준값을 제거하여 친구 리스트를 반환
 * @param {String, Array} 기준값과 비교할 배열 입력
 * @returns 친구 리스트 반환
 */
function findFriends(user, friends) {
  return  friends.map(friendTable => friendTable.filter(friend => !user.includes(friend))).filter(arr => arr.length < 2).flat();
}

