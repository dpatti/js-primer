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

## 9. Pick

It's time to revisit objects a bit more in depth. We're going to start with a
function that lets us take an object and narrow it down to only a few
properties that we care about. We'll call the function `pick(obj, arr)` that
takes an object as its first argument and an array of keys as the second
argument. We want to return a new object containing only the keys in the list
arr and their respective values from obj. The order of the keys on the object is
not important.

```js
var me = {
  name: "Doug",
  age: 26,
  gender: "male",
  cool: false
};

pick(me, ['name', 'age']);
// => {
//      name: "Doug",
//      age: 26
//    }
```

## A. Merge

We've done a lot of iteration over arrays, but we haven't tried iterating over
an object yet. Let's do that by writing a function that takes two objects and
combines them into one. Specifically, `merge(obj1, obj2)` will return the same
`obj1`, but all of the keys and values from `obj2` should be added to it. If the
same key appears in both objects, use the value from `obj2`.

```js
var inventory = {
  peaches: true,
  plums: false,
  pears: true
};
var shipment = {
  plums: true,
  harps: false
};

merge(inventory, shipment);
// => {
//      peaches: true,
//      plums: true,
//      pears: true,
//      harps: false,
//    }
```

## B. Invert

Our last problem is a simple one by concept: given an object, turn all of the
values into keys and all of the keys into values. We'll call this `invert(obj)`,
and it will return a new object with the inverted keys and values from `obj`.
There are some interesting cases, though. If the value is null or undefined, we
can skip it entirely. If there are two keys with the same value, when we invert,
we're going to have two of the same key. In this case, use the first key we
find.

```js
var websites = {
  "trello.com": "trello",
  "basilica.horse": "basilica",
  "barnacles.blackfriday": "barnacles",
  "trellis.coffee": "trello",
  "trello.horse": null
};

invert(websites);
// => {
//      trello: "trello.com",
//      basilica: "basilica.horse",
//      barnacles: "barnacles.blackfriday",
//    }
```

## C. Counter

This is a little different. Here, we're going to write a function `counter()`
that takes no arguments and returns `0` when you call it the first time. But,
the next time we call it, we want it to return `1`. And then `2`. Every time the
program restarts, it will restart at 0.

```js
counter();
// => 0
counter();
// => 1
counter();
// => 2
counter();
// => 3
```

## D. Counter with tags

We'll expand on the last question by adding the ability to give some string
"tag" to our counter function. Each tag has its own counter that starts at 0.
We'll call this `counterFor(str)`. When you re-use the same tag, you get an
incrementing counter for that tag. If you call the function with a new tag, that
should start at 0. If you switch back to a previously-used tag, it should start
where it left off.

```js
counterFor("JavaScript");
// => 0
counterFor("CoffeeScript");
// => 0
counterFor("CoffeeScript");
// => 1
counterFor("JavaScript");
// => 1
counterFor("CoffeeScript");
// => 2
counterFor("TypeScript");
// => 0
```

## F. Spawning counters

This counter with tags is handy, but sometimes we don't want to make up a string
for every counter we want. Instead, let's write a function `spawnCounter()` that
**returns a function**. Woah, yeah, we can do that. Functions are just stored in
variables like everything else. Each function that it returns will have its own
counter that it keeps track of, and when we call that function, it will return
the number and increment it.

```js
var javaScript = spawnCounter();
var coffeeScript = spawnCounter();
var typeScript = spawnCounter();

javaScript();
// => 0
coffeeScript();
// => 0
coffeeScript();
// => 1
javaScript();
// => 1
coffeeScript();
// => 2
typeScript();
// => 0
```

## E. "Asynchronous" counters

We can take this just one step further by introducing an **asynchronous**
component to the counter. In the async world, we create a **callback function**
that we give to an asynchronous function. That function will call our callback
when it has a result to return instead of returning it. In this case, it's going
to call our callback function multiple times. This problem may feel a bit
contrived, but the sentiment is the same as most asynchronous functions.  We'll
write a function `asyncCounter(fn)` that takes a callback function and, like
before, returns a counter function. Each time that counter is called, the
callback is called and passed the counter value. The counter function itself
will return nothing.

```js
var callback = function(val){
  console.log(val);
};

var counter = asyncCounter(callback);
counter();
// calls callback(0)
counter();
// calls callback(1)

var other = asyncCounter(callback);
other();
// calls callback(0)
```
