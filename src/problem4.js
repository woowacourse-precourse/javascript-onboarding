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
function changeString(n){
  let result='';
  for(let i=0;i<n.length;i++){
    for(let j=0;j<dictionary.length;j++){
      if(n[i]==dictionary[j][0]){
        result+=dictionary[j][1];
      }
      if(n[i]===' '){
        result+=' ';
        break;
      }
    }
  }
  
  return result;
}

function problem4(word) {
  let answer;
  answer=changeString(word);
  return answer;
}

module.exports = problem4;