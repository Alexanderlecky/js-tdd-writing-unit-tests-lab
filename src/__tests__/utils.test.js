// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  it('should return true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  it('should return true for a palindrome word with mixed case', () => {
    expect(isPalindrome('Mom')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  it('should throw an error if the word contains non-alphabetic characters', () => {
    expect(() => isPalindrome('Racecar!')).toThrow('Invalid input: Only alphabetic characters are allowed');
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Invalid input: A string is expected');
  });
});