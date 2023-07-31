function letterFinder(word, match) {
    var condition1=typeof(word) == 'string' && word.length >= 2; //make sure the string isnt just a letter or space and its a actual sentence
    var condition2=typeof(match) == 'string' && match.length == 1; //making sure the match key is a letter only
    if(condition1==true&&condition2==true){                //if both conditions are true, then it goes into the search loop
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else{
        console.log("Please pass correct arguments to the function.")                    //error handling in case the two parameters passed isnt of recommended datattype
    }
}
//function call
letterFinder("fghkjfl","f")
