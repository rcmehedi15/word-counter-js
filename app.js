function countWordsAndChars() {
    // Get the input textarea element and the wordCount and charCount elements
    let inputTextarea = document.getElementById("inputTextarea");
    let wordCount = document.getElementById("wordCount");
    let charCount = document.getElementById("charCount");
    
    // Split the input text on whitespace characters to count words
    let words = inputTextarea.value.trim().split(/\s+/); // split on whitespace characters
    // Handle empty input by setting numWords to 0
    let numWords = words.length > 0 && words[0] !== "" ? words.length : 0; // handle empty input
    
    // Count the total number of characters in the input text
    let numChars = inputTextarea.value.length;
    
    // Update the word count and character count elements with the calculated values
    wordCount.textContent = numWords;
    charCount.textContent = numChars;
}
