# Problems

## 1. Count

We're starting out simple. Write a function `count(arr)` that takes a single
array and returns the number of elements in the array.

```js
count([1, 2, 3]);
// => 3
```

## 2. Count occurrences

Now that we can count each item in an array, let's be picky about what we want
to count. We'll expand on the last problem by writing a new function
`countEq(arr, val)`, which takes an extra argument that is a single value and
returns the number of times that value occurs in the array.  Remember,
JavaScript can be tricky about what "equals" means. For example, we don't want
to consier `0` the number to be the same as `"0"` the string.

```js
countEq([1, 2, 2, 3], 2);
// => 2
```

## 3. Count with a predicate

We can generalize this a little bit more. Instead of taking a specific value as
the second argument, we can take a **function** that will tell us whether or not
we should count each item. This function will take a single element from the
array and return `true` if it should be counted. Write a function
`countPred(arr, fn)` that returns the number of items counted in this way.

```js
var isEven = function(i) {
  return i % 2 == 0;
};

countPred([1, 2, 3, 4], isEven);
// => 2
```

## 4. Count by groups

Let's get fancy. Instead of using this function to only count elements for which
it is `true`, we can have the function return a "group" name. Then, we can
attribute each element in the array to a group and count how many elements each
group has. Write a function `countBy(arr, fn)` that returns an **object** where
each key is a group name and each value is the number of elements belonging to
that group. If the grouper function returns `undefined`, the element should be
skipped.

```js
var parity = function(i) {
  if (i % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
};

countBy([1, 2, 3, 4, 5], parity);
// => {
//      odd: 3,
//      even: 2
//    }
```

## 5. Group by groups

This is a slight modification of our last problem. We still take an array and a
function that gives us a group, but this time, we don't want to count the number
of elements in that group, we want to list them. Write a function `groupBy(arr,
fn)` that returns an object where each key is a group and each value is an array
of elements belonging to that group. If the grouper function returns
`undefined`, the element should be skipped.

```js
var parity = function(i) {
  if (i % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
};

groupBy([1, 2, 3, 4, 5], parity);
// => {
//      odd: [1, 3, 5],
//      even: [2, 4]
//    }
```

This ends the first part! If you want a challenge, try rewriting problems 1
through 4 using a function in another problem's solution. So, try to rewrite
problem 1 by using one of the functions you wrote in problems 2-5. You can use
another function like this:

```js
// In lib/1-count.js
var countPred = require('./3-countPred.js');

module.exports = function(arr) {
  countPred(...);
};
```

## 6. Unique

Let's switch gears. We're going to write functions that operate on **sets**. If
you're not familiar with JavaScript, there is no set implementation
widely-available yet, so we will have to use arrays and make do. Let's start by
writing a function `uniq(arr)` that takes an array and returns a **new array**
with only the unique elements from the given array. Get rid of the duplicates!
The elements in the result should be in the same order as you saw them in the
input array.

```js
uniq([1, 2, 1, 3, 1, 4]);
// => [1, 2, 3, 4]
```

## 7. Union

Now we want to take two sets and combine them into one. We'll take the union of
the sets so that any element that is in both arrays is only included once. Write
a function `union(arr1, arr2)` that takes two arrays and returns a single array
as a set that is the union of the two inputs.

```js
union([1, 2, 3], [2, 3, 4]);
// => [1, 2, 3, 4]
```

## 8. Intersection

We're going to combine two sets again, but instead of taking the union, we want
to take the intersection. That is, the set that we return only contains elements
that exist in both sets. Write a function `intersection(arr1, arr2)` that takes
two arrays and returns a single array as a set that is the intersection of the
two inputs.

```js
intersection([1, 2, 3], [2, 3, 4]);
// => [2, 3]
```
