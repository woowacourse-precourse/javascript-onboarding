function problem3(number) {
  var answer;


arr = [];
arr2 = [];

cnt = 0;

// number는 1 이상 10,000 이하인 자연수이다.
if (number >= 1 && number <= 10000) {
  //1부터 n까지 array를 만든다.
  arr = Array.from({ length: number }, (_, i) => i + 1)

  //뭉터기 string으로 변환
  str = arr.join('')

  //1의 자리로 별개로 변환한 array
  arr2 = Array.from(str.split(''), String);

  //3,6,9를 포함하는지 체크 includes
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i].includes('3') || arr2[i].includes('6') || arr2[i].includes('9')) {
      cnt++;
    }
  }
}

answer = cnt

// console.log(answer)

  return answer;
}

module.exports = problem3;
