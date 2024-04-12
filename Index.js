function hello() {
  return `HELLO WORLD`;
}

const helloWord = hello();
console.log(helloWord);

// About Graph of Big o
// x axis represents the data of n
// y axis represents the operation

// First Big O Notation is Big 0(N)
// So Basically O(N) refers to It Will Run Length Of a n

// For Example If You Want To iterate an array like
// Finding the o is a best case it mean's omega
// Finding the 5 is a Average case it mean's theta
// Worst Case is finding the 7 it is big o(n) its omicron or o
// The Number of Operation is going to be directional propotional to the n

function oOfN(n) {
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      console.log("It's Omiga");
    } else if (i == 5) {
      console.log("It's Theta");
    } else if (i > 5 && i < 7) {
      console.log("It's Omicron");
    }
  }
}

// Drop Constant

function oOfN(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
  // So Our Code Run N + N Times = 0(2n) operation
  // But It's a Constant because it run Seperately Because it is not a nested loop
  // So Remove The Constant finally it o(N)
}
// oOfN(3);

// O(N2) It's a Nested Loop

function oNSquare(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      console.log(i, j);
    }
  }
}
// First Loop Second Loop
// 0      0
// 0      1
// 0      2
// 1      0
// 1      1
// 1      2
// 2      0
// 2      1
// 2      2

// The Number of Items that were output in this case is n * n its O(n2)

// oNSquare(3);

// ------Drop Non-Dominantes
function oNSquare(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k < N; k++) {
    console.log(k);
  }
  //Above Loop is The Drop Non-Dominates
}

// The First Nested Loop Run's N * N = NSquare so it o(n2);
//                 +
// The Second Loop Runs length of The n = 0(n)
//                 =
//             O(n2 + n);
// First loop runs n * n its dominante term
// Second loop runs o(n) seperately so it is non dominante term so we remove the n form the 89 line
// Finally the Bio O is o(nSquare)

// Now I Am Going To Learn o(1)
// It's The Efficient One In The Whole Big o
// There is no Big O Fasted And Efficient than o(1)

function BioOfOne(n = 1000000000000) {
  // No Matter What the N is i=even If it is 1 Million still it o(1)
  // Because it has only Doing one operation
  return n + n;
}
// console.log(BioOfOne());

// Remove Constant
function BioOfOne(n = 1000000000000) {
  // It's O(2) because n + n = 2n it other word it 1 + 1 = 2 = o(2)
  // still it's a constant so i am going to remove 1 from o(2) in the end its 0(1)
  return n + n + n;
}
// console.log(BioOfOne());

//  O(LOG N)
//  is is basically divide and Conqurrer
//  how this work

// Alright! Imagine you have a bunch of books on a shelf, all arranged in a certain order. Now, let's play a guessing game.

// You want to find a particular book, but you don't know where it is. So, you decide to play a game where you can ask if the book you're looking for is on the left side of the shelf or the right side.

// Here's how the game works:

// You start by asking if the book is on the left or the right side of the shelf.
// Based on the answer, you eliminate one half of the shelf. Let's say you're told the book is on the left side.
// Now, you focus only on the left side of the shelf and repeat the process. You ask again if the book is on the left or right side of this smaller section.
// Again, you eliminate one half based on the answer.
// You keep doing this until you find the book.

// My Very Own Example
// const OLogN = (getArray = [], findMe = 88) => {
//   let leftSide = 0;
//   let rightSide = getArray.length - 1;
//   let middle = Math.round((leftSide + rightSide) / 2);

//   for (let i = 0; i < getArray.length; i++) {
//     if (findMe === getArray[i]) return i;
//     if(findMe < sentArray[middle]) {

//     }
//   }
// };

// const sentArray = [88, 120, 200, 800, 1200, 5000, 9000, 100000];
// OLogN(sentArray, 120);

// Diffrent Term of inputs
// It's a Interview Question
// So What happen when we have a 2 loop not a nested loop it run a and b time
// like this
// What will be the big o of this
// for my point of view it is o(2n) drop the constant so its 0(n)
// That's Totally wrong

// a Runs 1 time's it mean first loop going to run 2 time
// b Runs 1 time's it mean second loop going to run 5 time
//  Both are diffrent
//  So Its 0(a) and 0(b)

function diffrentTerm(a = 10, b = 20) {
  for (let index = 0; index < a; index++) {
    const element = index;
    console.log(element);
  }
  for (let i = 0; i < b; i++) {
    const element = i;
    console.log(element);
  }
}

// diffrentTerm(3, 6);

// Big O of Arrays is
const bigOOfArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Its 0(1)
bigOOfArray.push(9);

// Its 0(1)
bigOOfArray.pop();

// its o(n)
bigOOfArray.shift(9);

// its o(n)
bigOOfArray.unshift(1);
