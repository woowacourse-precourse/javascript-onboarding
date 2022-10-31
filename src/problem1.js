/* 책 조건
  - 1~400p
  - 왼쪽-홀수(1p) 오른쪽-짝수(2p)

  [페이지 번호 게임 조건]
  1. 책을 임의로 펼친다.
    -> 1번과 400은 나오면 안되게 설정
    -> 그리고 임의로 값이 설정되야함.
    -> 연속된 숫자 2개가 랜덤으로 나와야함.
  2. 왼쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
  3. 오른쪽 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다.
    -> ⓐ 왼쪽 페이지인 경우 (ex.97)
    -> 배열 2개 생성 (덧셈값 / 곱셈값)
      -> 덧셈값 구하기 (9+7) 배열1에 저장.
      -> 곱셈값 구하기 (9*7) 배열2에 저장.
      -> 각 배열의 값 비교해서 큰 값을 새로운 배열로 저장.
    -> ⓑ 오른쪽 페이지(ex.98)도 동일하게 진행
    -> ⓒ 최종적으로 좌우페이지의 값을 비교해서 최댓값을 선정
  4. 포비와 크롱의 값을 비교
    -> 포비 > 크롱 => 1
    -> 포비 < 크롱 => 2
    -> 포비 = 크롱 => 0
    -> 에러인 경우 => -1
 */

// problem1 함수 정의
function problem1(pobi, crong) { //매개변수 : pobi, crong
  // 변수 선언
  /* var : 중복 선언이 가능, 재할당 가능
     let : 중복 선언 불가능, 재할당 가능
     const : 중복 선언 불가능, 재할당 불가능 */
  /* 테스트 데이터가 있기 때문에 이 부분은 없어도 됨.
  // 책 배열
  var bookpage = [];    // 책 페이지가 들어갈 배열
  var bookpage_L = 200; // 왼쪽 페이지 번호
  var bookpage_R = 2;   // 오른쪽 페이지 번호
  // 책 페이지 2차원 배열 생성
  for(var i=0; i<bookpage_L; i++){ // 200열
    bookpage[i] = [];
    for(var j=0; j<bookpage_R; j++){ // 2행
      bookpage[i][j] = null;
    }
  }
  // 책 페이지 숫자 넣기
  var num = 1; // 1p부분을 의미
  for(var i=0; i<bookpage_L; i++){
    for(var j=0; j<bookpage_R; j++){
      bookpage[i][j] = num;
      num++; // 1p부터 순차적으로 넣기
    }
  }
  // console.log(bookpage);
  
  // 임의의 책 값이 저장될 배열 생성
  var bookRandom = new Array();
  // 2명이 서로 차례대로 책을 펴야함.
  for(var count=1; count<=2; count++){
    // 책을 임의로 펼칠 페이지 고르기
    var bookNumber = Math.floor((Math.random() * 199) + 2);
    // Math.random 0~1 사이의 난수 생성
    // Math.floor 소수점을 내림시켜 정수로 만듬
    // 조건 설정 (1p, 400p는 나오면 안됨.)
    // 그래서 범위를 2~199까지 설정하게 함. (1 -> 1p,2p / 200 -> 399,400p)
    bookRandom.push(bookNumber);
    // 랜덤으로 생성된 값을 배열에 넣어준다.
    // 이값은 책 배열에서 페이지를 찾는 값으로 사용
  }
  // console.log(bookRandom[0]);
  // console.log(bookRandom[1]);

  // 포비, 크롱이 펼친 책 페이지 확인
  const pobiOpenBookPage = bookRandom[0]; // 첫번째로 펼쳐진 책 페이지 -> 포비꺼
  const crongOpenBookPage = bookRandom[1]; // 첫번째로 펼쳐진 책 페이지 -> 크롱꺼
  pobi = bookpage[pobiOpenBookPage];
  crong = bookpage[crongOpenBookPage];
  //console.log(pobi, crong);
   */

  var answer; // 승부값 출력할 변수
  
  // 포비 페이지 값
  var pobi_LR_num = [2]; // 좌우 덧셈과 곱셈값을 넣을 배열 생성
  var pobi_err = Number(pobi[0])+Number(pobi[1]); // 좌우페이지 합
  var testP_err = Number(pobi[0])+(Number(pobi[0])+1); // 좌우페이지 합산 값이 에러 체크 변수
  // console.log(pobi_err,testP_err);
  
  // 크롱 페이지값
  var crong_LR_num = [2]; // 포비와 형식은 동일함.
  var crong_err = Number(crong[0])+Number(crong[1]); // 좌우페이지 합
  var testC_err = Number(crong[0])+(Number(crong[0])+1); // 좌우페이지 합산 값이 에러 체크 변수
  // console.log(crong_err,testC_err);

  for(var i=0; i<2; i++){ // 배열 길이만큼 반복
    if (pobi_err == testP_err && crong_err == testC_err){ // 연속된 페이지인 경우

      const sum1 = String(pobi[i]).split('').reduce((a,b)=> a+=Number(b),0);
      const sum2 = String(crong[i]).split('').reduce((a,b)=> a+=Number(b),0); // 덧셈
      // 배열에서 String으로 문자를 추출하고 split으로 자릿수를 변환 (ex. 12 -> 1,2)
      // 이후 덧셈을 위해 Number로 형변환 후 reduce로 각 자릿수 덧셈해줌
      // reduce((누산값, 현재요소값) => 덧셈식, 초기누산값); 형태임

      const mul1 = String(pobi[i]).split('').reduce((a,b)=> (a*b));
      const mul2 = String(crong[i]).split('').reduce((a,b)=> (a*b));
      // 곱셈도 동일하게 진행함.

      // 배열에 왼쪽 페이지에 대한 덧셈과 곱셈 값을 넣음.
      pobi_LR_num.push(sum1,mul1);
      crong_LR_num.push(sum2,mul2); // 배열에 값 넣기

      console.log('포비 : '+ sum1,mul1 + '<br>' + '크롱 : ' + sum2,mul2);

      // 가장 큰 값 구하기
      // Math.max.apply(null, array)
      var pobi_max = Math.max.apply(null, pobi_LR_num);
      var crong_max = Math.max.apply(null, crong_LR_num);
      console.log(pobi_max,crong_max);
      
      
      // 포비, 크롱 값 비교하기
      if(pobi_max > crong_max){ // 포비가 이길 경우
        answer = 1;
      } else if(pobi_max < crong_max){ // 크롱이 이길 경우
        answer = 2;
      } else if (pobi_max == crong_max){ // 포비, 크롱이 비길경우
        answer = 0;
      } else { // 에러가 나온 경우
        answer = (-1);
      }
      
    } else { answer = -1; } // 값이 다르면 무조건 에러처리함.
  } // for문으로 오른쪽 페이지 값도 계산 후 총 4개의 값이 들어가게 됨.
  console.log(answer);

  return answer; // return문 : 함수에 의해 반환되는 값을 지정
}

module.exports = problem1;
