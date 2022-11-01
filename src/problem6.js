function findPieces(name) {
  var result = [];
  const name_arr = [...name];
  const len = name_arr.length;
  var piece = "";

  for (let i=0; i < len-1; i++){
    piece = name_arr[i] + name_arr[i+1];
    result.push(piece);
  }

  return result;
}

function countElement(arr, piece) {
  var count = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === piece) {
      count++;
    }
  }
  return count;
}

function problem6(forms) {
  var answer = [];
  var pieces = [];
  var current_pieces = [];
  var name = "";
  var email = "";

  for (let i=0; i < forms.length; i++)
  {
    name = forms[i][1];
    current_pieces = findPieces(name);
    pieces = pieces.concat(current_pieces);
  }

  for (let i=0; i < forms.length; i++)
  {
    email = forms[i][0];
    name = forms[i][1];
    current_pieces = findPieces(name);
    
    for (let j=0; j < current_pieces.length; j++){
      if (countElement(pieces, current_pieces[j]) > 1) {
        answer.push(email);
        break;
      }
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
