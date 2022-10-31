function problem4(word) {
 
  const array = word.split("");
  const reverse = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let answer=[];

  for(let i=0; i<array.length; i++){
    if (array[i] == " ") answer += " ";
    else if (array[i] == array[i].toUpperCase()) answer += reverse[array[i].charCodeAt() - 65];
    else if (array[i] == array[i].toLowerCase()) answer += reverse[array[i].charCodeAt() - 97].toLowerCase();
  };


}

module.exports = problem4;
