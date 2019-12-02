# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.
The console will show "outside"


1b. Test the function. Explain why the function returned what it did.

  Your answer:
  The text variable had not been defined inside of the function until after the console.log, which resulted in the function logging "undefined".

  Researched answer:


2. What is JSON?

  Your answer:
  JavaScript Object Notation

  Researched answer:
  A way to format and store information.
  Information is stored in name/value pairs.


3. What does CRUD stand for?

  Your answer:

  Researched answer:
  Create, Read, Update and Delete.
  These are basic functions that can be used to manipulate data in your database


4. What does are the 5 HTTP verbs?

  Your answer:

  Researched answer:
  1) Get: Requests a representation of the specified resource
  2) Head: Asks for a response identical to that of a GET request, but without the response body 
  3) Post: Used to submit an entity to the specified resource
  4) Put: Replaces all current representations of the target resource with the request payload
  5) Delete: Deletes the specified resource


5. What is a higher-order function?

  Your answer:

  Researched answer:
  A function that accepts other functions as parameters and/or use a function as the return value.

6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer:

  Researched answer:
  A closure is the combination of a function bundled together with references to its surrounding state.
  They control what is and isn’t in scope in a particular function, along with which variables are shared between sibling functions in the same containing scope.
  

7. STRETCH: What is an API?

  Your answer:

  Researched answer:
  Application Programming Interface
  APIs allow applications to communicate with one another.


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?
Favorite movie quote


2. What was your favorite topic this week?
I wasn't a fan of React because I didn't understand it at first.


3. What was your "A-ha!" moment this week?
Sarah going over React from the beginning.