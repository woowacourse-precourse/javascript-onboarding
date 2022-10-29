function problem4(word) {
  const ascii_a = "a".charCodeAt(0);
  const ascii_z = "z".charCodeAt(0);
  const ascii_A = "A".charCodeAt(0);
  const ascii_Z = "Z".charCodeAt(0);
  
  return word.split('').map(char => {
    const ascii = char.charCodeAt(0);
    let convertString = "";

    if(ascii_a <= ascii && ascii <= ascii_z) {
      convertString += String.fromCharCode(219 - ascii);;
    }

    if(ascii_A <= ascii && ascii <= ascii_Z) {
      convertString += String.fromCharCode(155 - ascii);
    }

    if(ascii === 32) {
      convertString = " "
    }

    return convertString;
  }).join('');
}

module.exports = problem4;
