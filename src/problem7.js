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

// 밑의 코드를 통해서 딕셔너리를 키벨류오브젝트가 있는 리스트 or 이중리스트로 정리 
// 혹은 키만 추출해서 딕셔너리에 접근해도될듯

// var a = {a:3 , b:2, c:2, d:1}
// var ll = []
// for (let number in a) {
//     ll.push({"key": number, "value": a[number], });

// }
// console.log(ll)
// aa = ll

// aa.sort(function(v1,v2){
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
 
// console.log(aa)
 