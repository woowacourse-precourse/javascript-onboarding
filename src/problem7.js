function problem7(user, friends, visitors) {
  // 모든 크루 각각의 친구 관계 정의
  let friendsRelationship = {}   // 키=크루, 값=[친구들]
  let recommandationScore = {}   // 키=크루, 값=친구추천점수
  for (let relation of friends) {
    let crew1 = relation[0]
    let crew2 = relation[1]
    // 크루1의 친구 관계 정의
    if (!(crew1 in friendsRelationship)) {
      friendsRelationship[crew1] = [crew2]
      recommandationScore[crew1] = 0
    } else {
      friendsRelationship[crew1].push(crew2)
    }
    // 크루2의 친구 관계 정의
    if (!(crew2 in friendsRelationship)) {
      friendsRelationship[crew2] = [crew1]
      recommandationScore[crew2] = 0
    } else {
      friendsRelationship[crew2].push(crew1)
    }
  }

  // 사용자와 함께 아는 친구인 경우, 10점 더하기
  // (= user - 친구 - 친구인 경우)
  for (let userFriend of friendsRelationship[user]) {
    for (let crewFriend of friendsRelationship[userFriend]) {
      if (!(crewFriend === user)) {
        recommandationScore[crewFriend] += 10
      }
    }
  }

  // 사용자의 타임 라인에 방문한 횟수만큼 1점 더하기
  for (let visitor of visitors) {
    if (!friendsRelationship[user].includes(visitor)) {
      if (recommandationScore[visitor]) {
        recommandationScore[visitor] += 1
      } else {
        recommandationScore[visitor] = 1
      }
    }
  }

  // 추천 점수가 높 -> 낮은 순대로 정렬
  // 점수가 같으면 이름순으로 정렬
  let sortedScore = []
  for (let crew in recommandationScore) {
    sortedScore.push([crew, recommandationScore[crew]])   // [['donut', 0],]
  }
  sortedScore.sort(function (a, b) {
    if (b[1] > a[1]) {
      return 1
    }
    if (a[1] > b[1]) {
      return -1
    }
    if (a[0] < b[0]) {
      return -1
    }
    if (b[0] < a[0]) {
      return 1
    }
  })

  // 추천 점수가 높은 5명 중 추천 점수가 0점인 크루는 제외하고 반환 
  let result = []
  for (let i = 0; i < 5; i++) {
    if (!(sortedScore[i][1] === 0)) {
      result.push(sortedScore[i][0])
    }
  }

  return result
}

module.exports = problem7;
