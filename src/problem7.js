function problem7(user, friends, visitors) {
  var answer;
  
  let people = {}
  let score = 0
  let peple = []
  for (p = 0; p < friends.length ; p++) { 
    for (q = 0 ; q < friends[p].length; q++){
      peple.push(friends[p][q])
    }
  } 
  peple = peple.concat(visitors)  
  console.log("사람수", peple)


  for (i = 0;  i < peple.length ; i ++) {
    people[peple[i]] = score
  }
  console.log ("사람 딕셔너리", people)
  //사람 딕셔너리 만들기(0으로 초기화)

  let friend = {}

  for (i = 0;  i < peple.length ; i ++) {
    friend[peple[i]] = []
  }
  console.log("친구 딕셔너리", friend)
  //친구 딕셔너리 만들기([]으로 초가화)

  for ( i = 0 ; i <friends.length ; i ++) {
    let curr = friends[i];
    friend[curr[0]].push(curr[1])
    friend[curr[1]].push(curr[0])
  }
  console.log("친구목록",friend)
  //친구 목록 채우기

  let overfriends = []
  let userfriend = friend[user]
  for ( i = 0 ; i < userfriend.length ; i++) {
    let friend_2 = friend[userfriend[i]]
    overfriends = overfriends.concat(friend_2) 
    }
  console.log("2차 친구 목록",overfriends)

  let setfriends = new Set(overfriends);

  overfriends = [...setfriends]

  console.log("중복제거 확인", overfriends)
  //유저 2차친구 목록 만들기 (중복제외)

  for ( i = 0 ; i < overfriends.length ; i++) {
    people[overfriends[i]] += 10
  }
  //추천점수 넣기(+10)
  for ( i = 0 ; i < visitors.length ; i++) {
    people[visitors[i]] += 1
  }

  console.log("점수확인",people)
  //방문점수 넣기(+1)

  for ( i = 0 ; i < userfriend.length ; i++) {
    people[userfriend[i]] = 0
  }

  people[user] = 0

  console.log("최종점수확인",people)
  //유저 1차지인 삭제

  let last_people = Object.entries(people)

  console.log("배열로 바꾸기",last_people)

  last_people.sort(
    (a, b) => {
    if (a[1] === b[1]) {
      if(a[0] > b[0]) {
        return 1
      } else if (a[0] < b[0]) {
        return -1
      } else {
        return 0
      }
    } else {
      return b[1] - a[1]
    }
  })

  console.log("점수별 정렬", last_people)

  answer = []

  for (i = 0 ; i < last_people.length ; i++) {
    if (last_people[i][1] < 1) {
      break
    }
    answer.push(last_people[i][0])
  }
  //점수별 정렬 && 동일점수 이름별 정렬
  return answer
}


module.exports = problem7;
