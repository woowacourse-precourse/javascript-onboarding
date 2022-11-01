function problem2(cryptogram) {
  const message = [];
  message.push(cryptogram[0]);

  //중복 문자 제거 암호문
  for(let i = 1; i < cryptogram.length; i++) {
    const currentElement = cryptogram[i];

    if (message.length === 0) {
      message.push(currentElement);
    } else {
      const lastElement = message[message.length - 1];

      if (lastElement == currentElement) {
        message.pop();
      } else {
        message.push(currentElement);
      }
    }
  }
  return message.join("");
  }

module.exports = problem2;
