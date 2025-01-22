// ---- Directions
// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

// ---- Examples
// capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
// capitalize('what is titlecase?') --> 'What Is Titlecase?'
// capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

function capitalize(str) {
  // Implement your code here

  const words = str.split(" ");
  // return words.map((word) => word[0].toUpperCase + word.slice(1))
  const res = []
  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1);
    res.push(word)
  }
  return res.join(" ")
}
 console.log(capitalize('this is mukhtar from coding money'));
