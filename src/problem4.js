//1. A-Z, a-z 아스키코드값 활용해서 뒤집기
//2. 대문자 <-> 소문자 바꾸기
function problem4(word){
  var answer;
  const [code_A, code_Z, code_a, code_z] =
        ['A'.charCodeAt(0), 'Z'.charCodeAt(0),'a'.charCodeAt(0), 'z'.charCodeAt(0)];
  const [high, low] = [code_A+code_Z, code_a+code_z];
  word = [...word].map((i)=>{
      if(/[a-zA-Z]/.test(i)){
          if(i==i.toUpperCase()){
              return String.fromCharCode(high-i.charCodeAt(0));
          }
          else{
              return String.fromCharCode(low-i.charCodeAt(0));
          }
      }
      else{
          return i;
      }
  })
  answer = word.join('');
  return answer;
}

module.exports = problem4;
