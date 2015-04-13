# The JavaScript Practice Suite

## Set up

Make sure you install node.js. You can read more about how to do this with NVM
[here](https://github.com/creationix/nvm#install-script). Clone this repository,
then run `npm install`.

## Testing

To run the tests, use `npm test`.

There are 8 problems: one in each file in the `test/` directory. They each
correspond to a single module in the `lib/` directory. For example, the first
problem is `test/1-count.js` and attempts to load the library in
`lib/1-count.js`. If there is no library present, the test will not load. The
tests expect the library file to export a single function.

The first library file has been provided as an example, but you must create the
rest. Start by completeing the first problem and getting all tests to pass
before continuing on to the next. You can use the first file as a template for
the rest.

If you want to test your function specifically, you can use the node console.
I've included a script to help you get started. Just type `npm run sandbox`.

## Problems

You can find a description of each problem [here](./problems.md).
