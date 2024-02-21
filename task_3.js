const someArray = ["String", "string", "String"];

function upperCaseWords(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() !== array[i]) {
      count++;
    }
  }
  return count;
}

console.log(upperCaseWords(someArray)); 