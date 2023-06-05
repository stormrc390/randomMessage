// Define arrays with different pieces of data
const subjects = ['A dog', 'My cat', 'A monkey', 'The pizza', 'Your teacher'];
const actions = ['ate', 'threw', 'hid', 'danced with', 'painted'];
const objects = ['a shoe', 'a banana', 'a piano', 'a computer', 'a clown'];

// Function to generate a random index for an array
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Function to generate a random joke
function generateJoke() {
  const subject = subjects[getRandomIndex(subjects)];
  const action = actions[getRandomIndex(actions)];
  const object = objects[getRandomIndex(objects)];

  return `${subject} ${action} ${object}!`;
}

// Generate and display a random joke
const randomJoke = generateJoke();
console.log(randomJoke);