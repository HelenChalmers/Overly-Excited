console.log ("Hey girl, you looking good")


//let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon..."];


    //for (let i = 0; i < sentence.length; i++){
        //console.log(sentence[i]);
//}
// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp = buildMeUp += theWordArray[i];
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}


//Adding an ! after every third word.  
// Invoke the function and pass in the array
addExcitement(sentence);



/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp = buildMeUp += theWordArray[i];
        // Print buildMeUp to the console
        console.log(buildMeUp);

        if((i+1) % 3 === 0) {
            buildMeUp = buildMeUp + "!";

        }
    }

}
// Invoke the function and pass in the array
addExcitement(sentence);

