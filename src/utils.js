// Your code here
function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Invalid input: A string is expected');
    }
  
    if (word === '') {
      return false;
    }
    
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Invalid input: Only alphabetic characters are allowed');
    }
  
    const cleanedWord = word.toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
  module.exports = { isPalindrome };
  