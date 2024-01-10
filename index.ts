let x = "{kkrt";

function isLetter(ch: string): boolean {
  let code = ch.charCodeAt(0);
  if ((code >= 97 && code <= 122) || (code <= 65 && code <= 90)) {
    return true;
  } else {
    return false;
  }
}

console.log(isLetter("a"));
console.log(isLetter("A"));
console.log(isLetter("{"));
console.log(isLetter("["));
console.log(isLetter("b"));
