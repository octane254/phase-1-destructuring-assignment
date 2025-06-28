// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, , v] = colors;

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [, , , , , indg] = colors;

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
// DO NOT overwrite `partner` before this!
const muppet = {
  muppetName: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy' //
};

// THIS LINE IS REQUIRED
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedMuppet = {
  song1: "Moving Right Along",
  song2: "Rainbow Connection",
  song3: "Bein' Green",
  song4: "I Hope That Something Better Comes Along",
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};

const { song1: song2, song4 } = nestedMuppet;
const { job: nestedJob, partner: nestedPartner } = nestedMuppet;
const { song1: songTwo, song4: songFour, job: kermitJob2, partner: kermitPartner2 } = nestedMuppet;
