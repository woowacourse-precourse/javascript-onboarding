// function problem7(user, friends, visitors) {
//   let answer;
//   return answer;
// }



// const user = "mrko";
// const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
// const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]



// problem7(user, friends, visitors)







// module.exports = problem7;

//step 1
// 친구 추출하기

// function problem7(user, friends, visitors) {
//   let answer;
//   let userFriends = [];
//   for (let i = 0; i < friends.length; i++) {
//     let tmp = "";
//     for (let j = 0; j < 2; j++) {
//       tmp = friends[i][j];
//       if (tmp === user) {
//         userFriends.push(friends[i])
//       }
//     }
//   }

//   console.log(userFriends)
//   return answer;
// }



// const user = "mrko";
// const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
// const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]



// problem7(user, friends, visitors)

// //setp 2 친구의 친구 추출하기

// function problem7(user, friends, visitors) {
//   let answer;
//   let userFriends = [];
//   for (let i = 0; i < friends.length; i++) {
//     let tmp = "";
//     for (let j = 0; j < 2; j++) {
//       tmp = friends[i][j];
//       if (tmp === user) {
//         userFriends.push(friends[i])
//       }
//     }
//   }
//   let friendsList = [];

//   userFriends.map(item => {
//     friendsList = [...friendsList, ...item]
//   })

//   console.log(friendsList)
//   return answer;
// }



// const user = "mrko";
// const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
// const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]



// problem7(user, friends, visitors)

//setp 3 친구의 친구를 활용하여 나에게 추천할 점수 부여 하기

function problem7(user, friends, visitors) {
  let answer;
  let userFriends = [];

  for (let i = 0; i < friends.length; i++) {
    let tmp = "";
    for (let j = 0; j < 2; j++) {
      tmp = friends[i][j];
      if (tmp === user) {
        userFriends.push(friends[i])
      }
    }
  }
  let friendsList = [];
  userFriends.map(item => {
    friendsList = [...friendsList, ...item]
  })

  let recommendationList = [];
  for (let i = 0; i < friends.length; i++) {
      let tmp = "";
      for (let j = 0; j < 2; j++) {
        tmp = friends[i][j];
        for (let x of friendsList) {
          if (x === user) {
            continue;
          } else if (x === tmp && friends[i].indexOf(user) === -1) {
            recommendationList.push(friends[i])
          }
        }
      }
    }
  let newRecommendationList = recommendationList.filter(value => {

  })
  console.log(friendsList)
  return answer;
}
const user = "mrko";
const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]
problem7(user, friends, visitors)