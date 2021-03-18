# VARIABLE SCOPING
Scoping is determined by where data in code can be access during runtime. which ever data type you are working with in your, by default has a scope and this scope is determined by wherever that data(variables, functions and objects) is defined or declared.

In JavaScript, there are two types of scoping;
Global Scoping and
Local Scoping

Global Scope
In JavaScript, there is only one global scope, A variable is in the global scope if it is defined outside of a function or an object or any block.
example of a variable in the gloal scope;

var tutor = 'Don';

The above variable can be accessed any where in the javascript document and there is no limit to which function that can use it. for example;

function returnMyTutorsName() {
  return 'The name of my tutor is ' + tutor;
}

//console.log(returnMyTutorsName())
//returns: The name of my tutor is Don

Local Scope
In JavaScript, local scope entails a specific block like a function or an object. variables declared inside a function block or an object cannot be accessed out that block where it it declared, for example;

const person = {
  name: 'Peter',
  age: '34',
  greeting: function() {
    return 'Hello, there my name is' + name + 'and I am ' + age + ' years old';
  }
}

//console.log(person.greeting())
//returns: Hello, there my name is Peter and I am 34 years old

In the above example, we can see that the method, greeting was able to access the variables 'age and name'. This is because they are all in the same scope, that is the person object.

if(age === 34 && name === 'Peter') {
  return 'Hello, there my name is' + name + 'and I am ' + age + ' years old'; '
}

The above conditional statement would throw an error because we are trying to use the variables 'age' and 'name' which is not available in the global scope. 