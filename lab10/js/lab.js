/*
 * Author: Emma Radihckova <eradichk@ucsc.edu>
 * Created: 2 November 2022
 * License: Public Domain
*/


// Declaring function nameSorter (borrowed from Lab 7)
function nameSorter(name) {
  // Turns parameter "name" into an array so we can sort it
  var nameArray = name.split("");
  // Takes the array version of the "name" parameter and sorts it
  var nameArraySorted = nameArray.sort();
  // Combines the newly sorted name back into a string
  var nameSorted = nameArraySorted.join("");
  // Returns the final sorted name
  return nameSorted
};


// To manipulate the DOM, you must first find the HTML element!!!
var outputEl = document.getElementById("output");

// Find the button element
var buttonEl = document.getElementById("my-button");
// Find the form element
var usersInputEl = document.getElementById("user-name");
// Find output element
var outputEl = document.getElementById("output");

// Add an event listener to button
buttonEl.addEventListener("click", function() {
  // 1. Gets the value of your input field
  var usersInput = usersInputEl.value;
  // 2. Runs that value through your sort() or anagram() function and saves the results.
  var sortedUsersInput = nameSorter(usersInput);
  // 3. Replaces the html in <div id=output> with the results.
  outputEl.innerHTML = "Your new name: " + sortedUsersInput
});
