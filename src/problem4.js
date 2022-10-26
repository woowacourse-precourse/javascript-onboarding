function problem4(word) {
  if(word.length<1 || word.length> 1000){
    return -1;  //예외1
  }
  let UpperDic = [...Array(26).keys()].map(el => String.fromCharCode(el + 65));
  let reUpperDic = [...UpperDic].reverse();
  let LowerDic = [...Array(26).keys()].map(el => String.fromCharCode(el + 97));
  let reLowerDic = [...LowerDic].reverse();
  let Frog = {};
  for(let i=0;i<26;i++){
    Frog[UpperDic[i]]=reUpperDic[i];
    Frog[LowerDic[i]]=reLowerDic[i];
  }
  let words = word.split("");
  var answer='';
  for (let i=0;i<words.length;i++){
    if(/[a-zA-z]/.test(words[i])){
      answer+=Frog[words[i]];
    }else{
      answer+=words[i];
    } 
  }
  return answer;
}
/* Array 생성자로 26크기의 Array를 배열의 인덱스를 키 값으로 가지는 배열에
아스키 코드를 통해 A~Z, a~z 에 해당하는 Dictionary를 만든다. 
스프레드 연산자를 통해 복사한 Dictionary를 reverse()해 Frog라는 객체에 짝 지어 넣어준다. A-Z , a-z
word를 한 문자씩 split으로 분리해서, 분리한 문자가 알파벳이면
Frog 객체의 key값에 넣어 value값을 answer에 저장한다.
분리한 문자가 알파벳이 아니라면, 그냥 변환하지 않고 그대로 저장한다.  

예외1) word는 길이가 1 미만 1,000 초과인 경우
*/
module.exports = problem4;
