# javascriptTests
Javascript Interview Tests

## Instructions
Please fork this repo, and clone the fork.  Once you are done, push your changes
to github, and send a pull request.  I may give you some code comments and ask
you to make some changes.


To get started on the problems in the javascriptTests directory run

```
npm install
```

You'll need node.js installed in your environment.


## Test 1: Transform

run

```
./node_modules/mocha/bin/mocha --ui tdd test/transform.mocha.js
```

to see the failing unit tests.  Fill in the function in transform.js.
This test is about understanding passing functions as arguments.  This is not a
trick question, so a simple implementation will work.

## Test 2: Events (part 1)

run

```
./node_modules/mocha/bin/mocha --ui tdd test/event.mocha.js
```

All the unit tests pass, but there is a bug.  Calling getData in the "change"
event callback handler returns the old data, but set has already been called, so
getData should return the recently set data.

Write a failing unit test to validate the bug exists.


## Test 3: Events (part 2)

run

```
./node_modules/mocha/bin/mocha --ui tdd test/event.mocha.js
```

to see the failing unit test you made in Test 2.  Fix the code in event.js to
get all the unit tests passing.  Please do not change the signature of public
methods.


