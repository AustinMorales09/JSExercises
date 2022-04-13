// function testFun(param1, param2) {
//     console.log(param1, param2);
//   }
//   testFun('Hello','World');
//   testFun('Hello', 'Class');
//   testFun(3,9)
//   testFun([1,2,3], [4,5,6]);
//   testFun(true,false);
//   testFun('true','false');

// function declaration
// function functionWithArgs(param1, param2) {
//     console.log(param1 + param2);
//   }

//   functionWithArgs(10,100);
//   functionWithArgs(10378,534);
  
  
// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

// function declaration below
function myLocalScope() {
    // Only change code below this line
    var myVar = 'Hello'
    
    console.log('inside myLocalScope', myVar);
}

// function call below
  myLocalScope();
  console.log(myVar);