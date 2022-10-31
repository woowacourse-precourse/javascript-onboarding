function problem7(user, friends, visitors) {
  let users = []
  let usersFriend = []
  let recommendFriends = []
  friends.forEach((element) => {
    // user 목록
    element.forEach((friend) => {
      if (user === friend) {
        return
      } else if (users.includes(friend) === false) {
        users.push(friend)
      }
    })

    // user와 친구인 사람
    if (element.includes(user) === true) {
      if (element[0] === user) {
        usersFriend.push(element[1])
      } else {
        usersFriend.push(element[0])
      }
    }
  })

  // visitors로 user 목록 추가
  visitors.forEach((element) => {
    if (users.includes(element) === false) {
      users.push(element)
    }
  })

  // 추천 친구 Object 명단
  users.forEach((element) => {
    if (usersFriend.includes(element) === false) {
      recommendFriends.push({'name': element, 'score': 0})
    }
  })

  recommendFriends.forEach((recommendFriend) => {
    //visitors로 추천 점수 추가
    visitors.forEach((visitor) => {
      if (recommendFriend.name === visitor) {
        recommendFriend.score += 1
      }
    })
    friends.forEach((friend) => {
      // console.log(friend)
      if (recommendFriend.name === friend[1]) {
        recommendFriend.score += 10
      }
    })

  })

  // 함께 아는 친구의 수로 추천 점수 추가
  // recommendFriends.forEach((element) => {
  //   console.log(element)
  // })

  recommendFriends.sort((x, y) => y.score - x.score)


  answer = []
  for (let i = 0; i < recommendFriends.length; i++) {
    if (i >= 5) {
      break
    }
    if (recommendFriends[i].score > 0) {
      answer.push(recommendFriends[i].name)
    }
  }

  return answer

  // object 추천 점수로 정렬
  // const recommendFriendSort = Object.fromEntries(
  //   Object.entries(recommendFriend).sort()
  // )

}

module.exports = problem7;
