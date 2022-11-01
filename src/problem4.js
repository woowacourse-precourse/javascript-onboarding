function problem4(word) {
  var answer;

//"R olev blf"

// - word는 길이가 1 이상 1,000 이하인 문자열이다.
// - 알파벳 외의 문자는 변환하지 않는다.
// - 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.
if(word.length >=1 && word.length <=1000){
//띄어쓰기 위치
blanks = [];
arr = word.split('');

for(i=0; i<word.length; i++){
  if(arr[i] == ' '){
    blanks.push(i)
  }
}

//대문자 위치
capitals = [];

for(i=0; i<word.length; i++){
  if (arr[i] == arr[i].toUpperCase() && arr[i] != arr[i].toLowerCase()) {
    capitals.push(i)
  }
}

//엄마
alp = 'abcdefghijklmnopqrstuvwxyz'
alp = alp.split('')
//청개구리
dict = alp.reverse();

//사전 text to alphabet index number
function alphabetPosition(text) {
    return [...text].map(a => parseInt(a, 36) - 10).filter(a => a >= 0);
}

//word의 index 찾아내기
frog = alphabetPosition(word.toLowerCase())
//[8,11,14,21,4,24,14,20]

answer = [];

//청개구리 오더로 변경
for(i=0; i<frog.length; i++){
  temp = frog[i]
  //frog[0] -> 8 -> dict[8]
  answer.push(dict[temp])
}


//띄어쓰기 픽스
//at blank[i], replace 0, ' '
for(i=0; i<blanks.length; i++){
  answer.splice(blanks[i], 0, ' ');
}

//대문자 픽스
result = [];

for(i=0; i<answer.length; i++){
  if(i == capitals[i]){
    result.push(answer[i].toUpperCase())
  }else{
    result.push(answer[i]);
  }
}
}

answer = result.join(' ')

// console.log(answer)

//str 최종 출력

  return answer;
}

module.exports = problem4;
