function titleCase(str) {
    let wordArray = str.split(" ");
    let letterArray = [];
    let resultArray = [[]];
    for (let counter in wordArray){
      letterArray[counter] = wordArray[counter].split("")
    }


    function caseLetter(letter, key){

          if (key <= 0){

            return letter.toUpperCase()
          }
          else if (key > 0) {

            return letter.toLowerCase()
          }
    }


    for (let counter in letterArray) {
      for (let counter2 in letterArray[counter]){
       console.log(caseLetter(letterArray[counter][counter2], counter2))
      }
     
    }
    
      
    
    return str;
  }

  console.log(titleCase("I'm a little tea pot"));