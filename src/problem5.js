// 기능 목록
// 1. 객체 dictionary 만들기
// + 소문자와 대문자 사전 따로 만들기 
// 2. word 문자 하나씩 dictionary에 넣어서 변환하기

function problem4(word) {
  const upperDic = {'A':'Z', 'B':'Y', 'C':'X', 'D':'W', 'E':'V', 'F':'U', 'G':'T', 'H':'S', 'I':'R', 'J':'Q', 'K':'P', 'L':'O', 'M':'N', 'N':'M', 'O':'L', 'P':'K', 'Q':'J', 'R':'I', 'S':'H', 'T':'G', 'U':'F', 'V':'E', 'W':'D', 'X':'C', 'Y':'B', 'Z':'A'};
  const lowerDic = {'a':'z', 'b':'y', 'c':'x', 'd':'w', 'e':'v', 'f':'u', 'g':'t', 'h':'s', 'i':'r', 'j':'q', 'k':'p', 'l':'o', 'm':'n', 'n':'m', 'o':'l', 'p':'k', 'q':'j', 'r':'i', 's':'h', 't':'g', 'u':'f', 'v':'e', 'w':'d', 'x':'c', 'y':'b', 'z':'a'}

  let result = '';
  for(let i=0; i<word.length; i++) {
    if(word[i] === ' ') {
      result += ' ';
    }else if(Object.keys(upperDic).includes(word[i])) {
      result += upperDic[word[i]];
    }else if(Object.keys(lowerDic).includes(word[i])) {
      result += lowerDic[word[i]];
    }
  }

  return result;
}

module.exports = problem4;