// Returns whatever value is passed as the argument.
//
// EX: identity(6) --> 6
let identity = (x) => {
    return x;
};

// Return an array of the first n elements of an array. If n is undefined,
// return just the first element.
//
// EX: first([1, 2, 3, 4, 5, 6], 2) --> [1, 2]
// EX: first([10, 34, 68, 19]) --> 10
let first = (array, n) => {

var numArray1 = array;

var secondNumber = n;

if (n==undefined){
return numArray1[0];
}


else { return numArray1.splice(0,n);}


};


// Like first, but for the last elements. If n is undefined, return just the
// last element.
//
// EX: last([1, 2, 3, 4, 5], 2) --> [4, 5]
// EX: last([10, 34, 68, 19]) --> 19
let last = (array, n) => {

if (n==undefined){
return array.slice(-1);
}

else { return array.slice(array.length - n;}

};
//last([10, 34, 68, 19])
// Call iterator(value, key, collection) for each element of collection.
// Accepts both arrays and objects.
//
// each() does not have a return value, but rather simply runs the
// iterator function over each item in the input collection.
let each = (collection, iterator) => {
collection.forEach(function(iterator)) {
console.log(collection);
}
};

// Returns the index at which value can be found in the array, or -1 if value
// is not present in the array.
// TIP: You can use a standard for loop, or you can reuse the each function from above as a helper function.
//
// EX: indexOf([1, 2, 3], 2) --> 1
// EX: indexOf([10, 20, 30], 5) --> 0
let indexOf = (array, target) => {
console.log(array.findIndex(k => k==target));
};indexOf([1,2,3],5)


// Return all elements of an array that pass a truth test.
//
// filter([1, 2, 3], (val) => {
//    val > 2
// }) --> 3
let filter = (currentValue, test) => {

  const result = currentValue.filter(currentValue => currentValue > test);
console.log(result)
};filter([1,2,3,4,5], 2)


// Return all elements of an array that don't pass a truth test.
//
// reject([1, 2, 3, 4, 5], () => {
//    val < 3
// }) --> 4, 5
let reject = (collection, test) => {
const result = collection.filter(collection => collection > test);
if(result != test){
  console.log(result)
   }else{ return false}
};reject([1,2,3,4,5], 3)

// Produce a duplicate-free version of the array.
//
// EX: uniq([1, 1, 2, 2, 3, 4, 5]) --> [1, 2, 3, 4, 5]
let uniq = (array) => {
  console.log(array.slice());
};uniq([1, 1, 2, 2, 3, 4, 5])


// Return the results of applying an iterator to each element.
// map() works a lot like each(), but in addition to running the operation on all
// the members, it also maintains an array of results.
//
// map({firstName: 'Kayla', lastName: 'Handy', age: 29}, (item) => {
//    return item[key]
// }) --> ['Kayla', 'Handy', 29]
let map = (collection, iterator) => {
  const map1 = collection.map(collection => collection);
map1.forEach(myFunction);

function myFunction (item, index) {

  for( var key in item ) {
    console.log(item[key])
  }
}
};map([{firstName: 'Kayla', lastName: 'Handy', age: 29}])

// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as it's second argument.
//
// EX:
//   var numbers = [1,2,3];
//   var sum = reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6

let reduce = (collection, iterator, accumulator) => {
  const numbers = [1, 2, 3];
const reducer = (total, numbers) => total + numbers;
console.log(numbers.reduce(reducer, 0));
};reduce()

// Determine if the array or object contains a given value (using `===`).
//
// contains([1, 2, 3, 4], 3) --> true
let contains = (collection, target) => {
const set3 = new Set(collection);
set3.forEach(function(element) {
  if(element === target){
    console.log('true')
     }else{return false}
}); 
};contains([1, 2, 3, 4, 5],1)

// Determine whether all of the elements pass a truth test.
//
// EX: every([1, 2, 3], (item) => {
//    item < 5
// }) --> true
let every = (collection, iterator) => {
 function isNegative(element, index, array) {
  return element < 0;
} 
const int8 = new Int8Array(collection); 
return int8.every(isNegative);
};console.log(every([-10, -20, -30, -40, -50]))
// Determine whether any of the elements pass a truth test.
//
// EX: some([1, 2, 3], (item) => {
//    item < 2
// }) --> true
let some = (array, iterator) => {
var even = function(element) {
  return element < iterator;
};
  console.log(array.some(even));
}
some([1],2)
