function problem1(pobi, crong) {
  //각 자리 숫자 더하기
  function sum(value) {
    var answer1 = 0;
    var str1 = String(value[0]);
    for (var i=0; i < str1.length ; i++) {
      answer1 += parseInt(str1[i]);
    }
    first_num = answer1;

    var answer2 = 0;
    var str2 = String(value[1]);
    for (var i=0; i < str2.length ; i++) {
      answer2 += parseInt(str2[i]);
    }
    second_num = answer2;

    // 방법2
    // first_num = String(value[0]).split("").reduce((val_1, val_2) => val_1 + val_2*1);
    // second_num = String(value[1]).split("").reduce((val_1, val_2) => val_1 + val_2*1);
    return maxScore(first_num, second_num);
  }

  // 각 자리 숫자 곱하기
  

  // 최고 점수 구하기


  // 예외상황 - 왼쪽 페이지와 오른쪽 페이지 차이가 1 나야함


  // 포비 점수 내기
 
  // 크롱 점수 내기
 

  //포비가 이기면 1, 크롱이 이기면 2, 무승부는 0, 예외사항은 -1로 리턴  
 
}

module.exports = problem1;