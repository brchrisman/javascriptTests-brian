# javascriptTests
Scale Computing Javascript Interview Tests

## Instructions
Please fork this repo, and clone the fork.  Once you are done, push your changes
to github, and send a pull request.  I may give you some code comments and ask
you to make some changes.


You'll need node.js installed in your environment.  To setup to run the unit
tests run:

```
npm install
```
Now, if you run:
```
npm test
```
You should see 6 passing and 3 failing unit tests, and you're ready to get
started with the problems.

## Problem 1: Transform

To see the failing unit tests run:

```
./node_modules/mocha/bin/mocha --ui tdd test/transform.mocha.js
```

Fill in the function in transform.js. This test is about understanding passing
functions as arguments.  This is not a trick question, so a simple for loop
implementation will work.

## Problem 2: Events (part 1)

Run:

```
./node_modules/mocha/bin/mocha --ui tdd test/event.mocha.js
```

All the unit tests pass, but there is a bug.  Calling getData in the "change"
event callback handler returns the old data, but set has already been called, so
getData should return the recently set data.

Write a failing unit test to validate the bug exists.


## Problem 3: Events (part 2)

Now that you have a failing unit tests, fix the code in event.js to get all the
unit tests passing.  Please do not change the signature of public methods.


