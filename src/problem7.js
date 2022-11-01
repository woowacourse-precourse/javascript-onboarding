function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

// 처음 돌면서 모든사람, 내친구set 만들기
// 두번쨰로 돌면서 내친구X set만들기
// 친구 : 친구들 오브젝트 만들고 set은 포함여부가 o1임
// a[0] 내친구인가? 맞다면 a[1]가 내친구가 아닌가? 그러면 a[1]에게 1점추가 그외면 스킵 
// a[0] 이 내친구 아니 라면 a[1] 이 내친구인가 보고 맞으면 a[0]에게 1점추가 그외면 스킵 (딕셔너리 생성후 밸류값 증가시키기)

// 밑의 sort를 통해서 정리

// var a = [{name:'a', value:3},{name:'b', value:1},{name:'c', value:1},{name:'d', value:2}]

// a.sort(function(v1,v2){
//     if (v1.value > v2.value){
//         return 1;
//     }
//     if (v1.value < v2.value){
//         return -1;
//     }
//     if (v1.value == v2.value){
//         if (v1.name > v2.name){
//             return 1;
//         }
//         if (v1.name < v2.name){
//             return -1;
//         }
//     }
    
//     return 0;
// });
// for (let cc of a){
//     console.log(cc['name']);
// }
 