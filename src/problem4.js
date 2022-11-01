const makeDictionary = (input, output) => {
  // 청개구리 사전을 만드는 함수
  const dict = {};
  input = input.split(' ');
  output = output.split(' ');

  for (let i = 0; i < input.length; i++) {
    dict[input[i].toUpperCase()] = output[i].toUpperCase();
    dict[input[i].toLowerCase()] = output[i].toLowerCase();
  }
  return dict;
};

const isAlpha = (c) => {
  // 입력받은 문자가 알파벳인지 확인하는 함수
  return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
};

function problem4(word) {
  var answer = '';
  const dictionary = makeDictionary(
    'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    'Z Y X W V U T S R Q P O N M L K J I H G F E D C B A'
  );

  for (let i = 0; i < word.length; i++) {
    // 알파벳일 때 청개구리 사전을 통해 변환하여 더하고 이외의 문자는 변환 없이 더해준다.
    if (isAlpha(word[i])) answer += dictionary[word[i]];
    else answer += word[i];
  }
  return answer;
}

module.exports = problem4;
