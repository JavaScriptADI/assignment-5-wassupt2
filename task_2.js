const words = ["car", "sauce", "vitamine" , "apartment"]

let shortestWord = 0;

for (let i = 1; i < words.length; i++) {
    if (words[i].length < words[shortestWord].length) {
      shortestWord= i;
    }
  }

  console.log(words[shortestWord]);
  console.log(words[shortestWord].length);