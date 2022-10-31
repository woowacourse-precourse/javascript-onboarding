function problem7(user, friends, visitors) {

  // 반복문용 변수
  var i = 0;
  var j = 0;
  // 결과값용
  var answer=[];

  // user(사용자 아이디) 제한사항 걸기
  // 길이제한 : 1 ~ 30
  if(1 <= user.lenght <= 30){
     // 아이디는 소문자만 사용
    user = user.toLowerCase(); // 만약 소문자가 아닌 경우 소문자로 변환해줌.
  }


  // friends(친구 관계 배열) 제한사항 걸기
  // 배열 길이제한 : 1 ~ 10000
  if(1 <= friends.length <= 10000){

    // 배열에서 각 원소의 아이디의 길이를 확인해야함.
    // 2중 for문으로 반복 friends[0][0]부터 friends[5][1]까지 검사함. (test예제 기준)
    for(i=0; i<friends.length; i++){        // 배열 전체 길이만큼 (6)
      for(j=0; j<friends[i].length; j++){   // 배열 원소 길이만큼 (2)
        
        // 아이디 길이제한 : 1 ~ 30
        if(1 <= friends[i][j].length && friends[i][j].length <=30){
          // 위의 조건처럼 아이디는 소문자여야함.
          friends[i][j] = friends[i][j].toLowerCase(); 
        }else{ 
          // 아이디의 길이 제한을 넘는다면 삭제하기
          friends.pop(friends[i][j]);
        }

      }// for문 - 2
    }// for문 - 1
  }// if문 ==> 여기까지 길이 및 문자 제한은 정리됨.
  
  var myF = [];     // 내친구
  var myF_F = [];   // 내친구의 친구
  var count = [];  // 점수 넣을 곳

  // user의 친구 구하기
  for(i=0; i<friends.length; i++){
    myF.push(friends[i][0]);  // friends의 아이디A를 저장함.
  }
  // 같은 값이 들어오지 않게 함.
  myF = [...new Set(myF)];
  console.log(myF);

  // user 친구의 지인 구하기
  // 조건 중 '동일한 친구 관계가 중복해서 주어지지 않는다'를 만족하기 위해 비교함.
  for(var i=0; i<friends.length; i++){  // 친구 명단에서 
    for(var j=0; j<myF.length; j++){    // 내 친구랑 친구인 사람 뽑기
      if( myF[j] == friends[i][0] ){    // 내 친구 = 너친구 일때
        myF_F.push(friends[i][1]);      // 너 친구 저장
      }
    }
  }

  // 중복 없애기
  myF_F = [...new Set(myF_F)];

  // 그리고 user 이름이 저장되면 삭제하기
  for(i=0; i<myF_F.length; i++){        // 친구의 지인 리스트 길이 만큼
    if( myF_F[i] == user){              // 각요소가 user와 동일한지 확인함
      myF_F.pop(myF_F[i]);              // 같다면 빼버림
    }
  }
  for(i=0; i<myF_F.length; i++){
    count.push([myF_F[i], 10*myF_F.length]);       // 아는 친구의 수에 맞춰 10점씩 계산
  }

  
  // 타임라인 방문한 횟수 포인트 넣기
  var tlCount = [];
  var tlCount2 = [];

  visitors.forEach((x) => { 
    // tlCount[x] : x의 들어온 문자를 1로 저장
    // +1 : x의 값과 같은 값이 있을때 카운트해줌.
    tlCount[x] = (tlCount[x] || 0)+1;
    // 값 담아주기
    tlCount2.push([x,tlCount[x]]);
  });

  // 내림차순 정렬 -> 가장 값이 높은 순으로 내려옴
  tlCount2.sort();
  tlCount2.sort((a, b) => {
    // 배열 [0]이 같으면 [1]에서 비교함
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return b[0] - a[0]
    }
  });

  // 친구는 제거하기
  for(var a=0; a<myF.length; a++){
    // pop을 하면 배열에 빈 곳이 있어서 제대로 전부 삭제가 안됨.
    // 다중 for문 쓰게 됨.
    for(var i=0; i<myF.length; i++){  // 방문자 아이디 중에서
      for(var j=0; j<tlCount2.length; j++){     // 내 친구일때
        if( myF[i] == tlCount2[j][0] ){     
            tlCount2.pop(tlCount2[j][0]); // 없앰
        }
      }
    }
  }

  // 친구가 제거된 방문자 중에서 가장 큰값 구하기
  var v_max = [];
  for(i=0; i<tlCount2.length; i++){
    for (j=0; j<tlCount2.length; j++){
      if(tlCount2[i][0] == tlCount2[i][j]){   // 만약 사용자 아이디가 같다면
        v_max.push(tlCount2[i][1]);           // 그 사용자의 점수를 다 뽑아낸다.
      }
    }
  }
  v_max = Math.max.apply(null, v_max);        // 그리고 최고 점수를 찾아주고
  var tlCount3 = [...new Set(tlCount2[0])];   // 중복없이 합쳐준다.
  count.push(tlCount3);

  // 방문자 수 제한하기
  if(0<= visitors.length <= 10000){
    var visitors = [...new Set(visitors)]; // 중복 방문자 없애기
  } // 중복 방문자를 없애줬기 때문에 위로 위치를 바꾸면 값이 달라짐.


  // 내림차순 정렬 -> 가장 값이 높은 순으로 내려옴
  count.sort((a, b) => {
    // 배열 [0]이 같으면 [1]에서 비교함
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return b[0] - a[0]
    }
  });

  // 결과값 내기
  for(i=0; i<5; i++){ // 값은 이미 내림차순으로 정렬되어 있어서 5개만 순차적으로 뽑으면됨.
    if(count[i] == null || 0){  // 만약 값이 없는 경우에는 콘솔창띄워주기
      console.log('값이 없습니다.')
    } else { // 만약 값이 있다면 1위~5위까지 anwser에 담아주기
      answer.push(count[i][0]);
    }
  }
  return answer;
}

module.exports = problem7;
