function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

// 처음 돌면서 모든사람, 내친구set 만들기 (user 인가? 맞으면 다음인덱스 혹은 이전 인덱스를 친구set에 추가)
// 두번쨰로 돌면서 내친구X set만들기
// 친구 : 친구들 오브젝트 만들고 set은 포함여부가 o1임
// a[0] 내친구인가? 맞다면 a[1]가 내친구가 아닌가? 그러면 a[1]에게 10점추가 그외면 스킵 
// a[0] 이 내친구 아니 라면 a[1] 이 내친구인가 보고 맞으면 a[0]에게 10점추가 그외면 스킵 (딕셔너리 생성후 밸류값 증가시키기)
// visitors 를 돌면서 추가로 딕셔너리에있는 이름 키에 1점씩 추가

// 밑의 코드를 통해서 딕셔너리를 키벨류오브젝트가 있는 리스트 or 이중리스트로 정리 for in으로 만들자

// var a = {a:3 , b:2, c:2, d:1, e:93}  

// var dr = [['a',3],['c',2],['b',2],['d',1],['e',93]]

 
// dr.sort(function(v1,v2){
//     if (v1[1] > v2[1]){
//         return -1;
//     }
//     if (v1[1] < v2[1]){
//         return 1;
//     }
//     if (v1.value == v2.value){
//         if (v1[0] > v2[0]){
//             return 1;
//         }
//         if (v1[0] < v2[0]){
//             return -1;
//         }
//     }
    
//     return 0;
// });
  
 
// console.log(dr)

// return 1(양수) 면 바꾼다 , 0이나 음수면 안바꾼다  

 
// console.log(dr)

// return 1(양수) 면 바꾼다 , 0이나 음수면 안바꾼다  
// const champ = {
//     Aatrox: 300,
//     Zoe: 60,
//     Ahri: 200,
//     Ashe: 1000,
//     Garen: 400
//   };

// const sortable = Object.entries(champ)
//   .sort(([,a], [,b]) => b-a)
//   .reduce((r, [k, v]) => ({ ...r, [k]: v }), {'fu':1}); // fu가있는건 기본값 (누산기r의 초기화 값) ...r이란 객체속의
// //   값을 말함 예 [1,2,3] 에서 1,2,3 을 의미 리듀서의 return 값은 앞서 계산될 r값, 결괏값
// // reduce를 통해서 딕셔너리 형태로도 리턴 가능하고 sort만으로 이중리스트로 끝낼수도있음
// // 굳이 리듀스 안써도 될듯
  
// console.log(sortable)