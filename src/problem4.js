function problem4(word) {
  const [ASCII_A, ASCII_Z] = [65, 90];
  const [ASCII_a, ASCII_z] = [97, 122];

  function frogDict(num) {
    let frogDictKey = 0;
    if (num >= ASCII_A && num <= ASCII_Z)
      frogDictKey = ASCII_Z - (num - ASCII_A);
    else if (num >= ASCII_a && num <= ASCII_z)
      frogDictKey = ASCII_z - (num - ASCII_a);

    return String.fromCharCode(frogDictKey);
  }

  let result = "";
  word.split("").forEach((str) => {
    result += str !== " " ? frogDict(str.charCodeAt(0)) : " ";
  });

  return result;
}

module.exports = problem4;
