//Object for Range of Numbers
const rangeOfNumbers = {
 maximumNumber: 10,
 minimumNumber: 1,
 generateRandomNumbers: function() {
  const result = Math.floor(Math.random()*(this.maximumNumber-this.minimumNumber))+this.minimumNumber;
  return result;
 }
}

//Trying to call the function directlty
console.log(generateRandomNumbers());
/**calling the function generateRandomNumbers threw an error "generateRandomNumbers is not defined". This is because generateRandomNumbers is a property of the object "rangeOfNumbers" and we didnt notify this object before attempting to acces its property, this is illegal.  */

//Accessing the function, generateRandomNumbers by passing through its owner, the rangeOfNumbers onject.
console.log(rangeOfNumbers.generateRandomNumbers())
/** A random number is generated whenever we call the method in the above manner(as in line 16), This worked because We are pointing to the object that is holding the function and telling the object that we want to access one of its properties, which is the generateRandomNumbers method. We did this using the object notation method of accessing object properties. */