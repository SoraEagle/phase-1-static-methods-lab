class Formatter {
  //add static methods here
  static capitalize(string){ //Capitalizes first letter of the string.
    let stringArr = string.split('');
    stringArr[0] = string.charAt(0).toUpperCase();
    string = stringArr.join('');
    return string;
  }

  static sanitize(string){ //Function to remove all non-alphanumeric characters, except for "-", " ' ", and " "
    let stringArr = string.split('');
    console.log(stringArr);
  }

  static titleize(string){ //Function to capitalize the first character of most words
    console.log(string);
    let stringArr = string.split(' ');
    console.log(stringArr);

    //Always capitalize first letter of first word
    let stringFragArr = stringArr[0].split(''); //Split first word into letters.
      stringFragArr[0] = string.charAt(0).toUpperCase();
      stringArr[0] = stringFragArr.join('');

    for(let word = 0; word < stringArr.length; word++){ //Loop through every word once.

      if(!(stringArr[word] === "the" || stringArr[word] === "a" || stringArr[word] === "an" || 
      stringArr[word] === "but" || stringArr[word] === "of" || stringArr[word] === "and" || 
      stringArr[word] === "for" || stringArr[word] === "at" || stringArr[word] === "by" || 
      stringArr[word] === "from")){
        stringFragArr = stringArr[word].split('');
        stringFragArr[0] = stringArr[word].charAt(0).toUpperCase();
        console.log(stringFragArr);
        stringArr[word] = stringFragArr.join('');
        console.log(stringArr[word]);
      }
      
    }
    string = stringArr.join(' ');
    console.log(string);
    return string;
  }
}