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

//   let recommendationList = [];
//   for (let i = 0; i < friends.length; i++) {
//       let tmp = "";
//       for (let j = 0; j < 2; j++) {
//         tmp = friends[i][j];
//         for (let x of friendsList) {
//           if (x === user) {
//             continue;
//           } else if (x === tmp && friends[i].indexOf(user) === -1) {
//             recommendationList.push(friends[i])
//           }
//         }
//       }
//     }
//   let newRecommendationList = recommendationList.filter(value => {

//   })
//   console.log(friendsList)
//   return answer;
// }
// const user = "mrko";
// const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
// const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]
// problem7(user, friends, visitors)

//다시 돌아와서 처음부터 친구 리스트를 추출할 때 내 이름을 빼고 추출해야한다.

function problem7(user, friends, visitors) {
  let answer;
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
  console.log(recommendationList)
  console.log(scoreFriendsList)

  //이름과 점수 가지고 점수를 비교해서 등수로 정렬하기
  return answer;
}
const user = "mrko";
const friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]

problem7(user, friends, visitors)