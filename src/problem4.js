function problem4(word) {
  let Word = word;
  let frogword = '';
  const bigAlpa = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'];
  const smallAlpa = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];
  for(let i=0; i<Word.length; i++){
    //bigalpa condition
    if(Word[i].charCodeAt() > 64 && Word[i].charCodeAt() < 91){
      frogword+=bigAlpa[Word[i].charCodeAt()-65];
    }
    //smallalpa condition
    else if(Word[i].charCodeAt() > 96 && Word[i].charCodeAt() < 123){
      frogword+=smallAlpa[Word[i].charCodeAt()-97];
    }
    else frogword+=Word[i];
  }
  var answer;
  answer = frogword;
  return answer;
}

module.exports = problem4;
