class Formatter {
  static capitalize(string){ //Capitalizes first letter of the string.
    let stringArr = string.split('');
    stringArr[0] = string.charAt(0).toUpperCase();
    string = stringArr.join('');
    return string;
  }

  static sanitize(string){ //Function to remove all non-alphanumeric characters, except for "-", " ' ", and " "
        string = string.replace( /[^A-Za-z0-9 '-]/g, '' ); //Replace all but these characters (using regex).
      console.log(string);
      return string;
  }

  static titleize(string){ //Function to capitalize the first character of most words.
    let stringArr = string.split(' ');

    //Always capitalize first letter of first word
    let stringFragArr = stringArr[0].split(''); //Split first word into letters.
      stringFragArr[0] = string.charAt(0).toUpperCase();
      stringArr[0] = stringFragArr.join('');

    for(let word = 0; word < stringArr.length; word++){ //Loop through every word once.
      if(!(stringArr[word] === "the" || stringArr[word] === "a" || stringArr[word] === "an" || 
      stringArr[word] === "but" || stringArr[word] === "of" || stringArr[word] === "and" || 
      stringArr[word] === "for" || stringArr[word] === "at" || stringArr[word] === "by" || 
      stringArr[word] === "from")){ //if word ISN'T one of these:
        stringFragArr = stringArr[word].split('');
        stringFragArr[0] = stringArr[word].charAt(0).toUpperCase();
        stringArr[word] = stringFragArr.join('');
      }
    }
    string = stringArr.join(' ');
    return string;
  }
}