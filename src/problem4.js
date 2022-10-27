function problem4(word) {

  let arr = [...word];
  
  const f = arr.map(c => {
    const code = c.charCodeAt(0);

    let upperAlpha;
    let lowerAlpha;

    if(code <= 0x5A){
      upperAlpha = 0x5A - code;
      lowerAlpha = 0x41;
    } else {
      upperAlpha = 0x7A - code;
      lowerAlpha = 0x61;
    }
    return String.fromCharCode(upperAlpha + lowerAlpha);
  }).join('');

  return f.replace(/{/g," ");
  
}

module.exports = problem4;
