let dictionary = [
    ['A','Z'],['B','Y'],['C','X'],['D','W'],['E','V'],['F','U'],
    ['G','T'],['H','S'],['I','R'],['J','Q'],['K','P'],['L','O'],
    ['M','N'],['N','M'],['O','L'],['P','K'],['Q','J'],['R','I'],
    ['S','H'],['T','G'],['U','F'],['V','E'],['W','D'],['X','C'],
    ['Y','B'],['Z','A'],
    ['a','z'],['b','y'],['c','x'],['d','w'],['e','v'],['f','u'],
    ['g','t'],['h','s'],['i','r'],['j','q'],['k','p'],['l','o'],
    ['m','n'],['n','m'],['o','l'],['p','k'],['q','j'],['r','i'],
    ['s','h'],['t','g'],['u','f'],['v','e'],['w','d'],['x','c'],
    ['y','b'],['z','a']
]
function changeString(word){
  let word_arr='';
  for(let i=0;i<word.length;i++){
    for(let j=0;j<dictionary.length;j++){
      if(word[i]==dictionary[j][0]){
        word_arr+=dictionary[j][1];
      }
      if(word[i]===' '){
        word_arr+=' ';
        break;
      }
    }
  }return word_arr;
}
function problem4(word) {
  let answer;
  answer=changeString(word);
  return answer;
}
module.exports = problem4;