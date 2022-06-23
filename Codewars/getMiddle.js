// Get the Middle Character?
// 7 kyu

// Description:
// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    return s.slice((s.length - 1) / 2, s.length / 2 + 1);
  }
