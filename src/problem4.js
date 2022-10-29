function problem4(word) {
  const dict = new Map();
  makeDictionary(dict);
  const answer = handleString(word,dict);

  return answer;
}

function makeDictionary(dict){
  const alpha = new Array(26).fill(null).map((_,i) => String.fromCharCode(i+65));
  const reverseAlpha = [...alpha].reverse();
  for(let i=0; i<alpha.length;i++){
    const [key,value] = [alpha[i], reverseAlpha[i]];
    dict.set(key, value);
    dict.set(key.toLowerCase(), value.toLowerCase());
  }
}

function handleString(word,dict){
  const temp = [];

  for(let i=0; i<word.length;i++){
    const char = word[i];
    if(!dict.has(char)){
      temp.push(char);
    }
    else{
      temp.push(dict.get(char));
    }
  }

  return temp.join('');
}



module.exports = problem4;
