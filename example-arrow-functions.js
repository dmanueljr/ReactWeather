var names = ['Daniel', 'Loralaine', 'Isabella', 'Peter'];

// forEach method is available on arrays; it takes only one argument the funcation to call, which gets called once for each element of the array, and it gets passed the element value, "name".
//
// names.forEach(function(name) {
//     console.log('forEach', name);
// });
//
//
// // am i using an anonymous function? if yes, then the arrow function is for you!
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// })
//
// names.forEach((name) => console.log(name));
//
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Daniel'));
//
//
// anonymous functions vs. arrow functions
// anonymous functions have a 'this' binding, while arrow functions take on their PARENT'S 'this' binding
// in the 'person' example below, by using an anonymous function, the 'this' keyword would have already been updated within the function and will not return what you expect it would return, 'Daniel'. Instead, by using the arrow function, the 'this' keyword will not be upated and will remain its parent's binding, 'person' and will return 'Daniel' when this.name is called.
//
// var person = {
//     name: 'Daniel',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         })
//     }
// }
//
// person.greet();


function add (a, b) {
    return a + b;
};

var addStatement = (a, b) => {
    return a + b;
};

var addExpression = (a, b) => a + b;


console.log(add(1, 3));
console.log(addStatement(9, 10));
console.log(addExpression(7, 8));
