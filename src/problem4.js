function problem4(word) {
  const dict = new Map();
  makeDictionary(dict);
  console.log(dict);


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

function changeString(word, dict){

}




module.exports = problem4;
