let person = {
    name: "John",
    age:30,
    city: "New York"
};
console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.city);
typeof
console.log(typeof(person));

let numbers =[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(typeof numbers);

let mixedArray=[1,"Hello" , true,[1,2,3], { name:"Alice", age: 25}];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(numbers.length);

function greet () {
    console.log("Hello,World!");
}
greet();

function multiply(a,b) {
    return a*b;
}
console.log(multiply(2,3));

let divide = function(a,b) {
    return a/b;
};
console.log(divide(10,2));
let add = function(a,b){
    return a+b;
};
console.log(add(5,7));

let sayHi = () => console.log("Hi");
sayHi();

let square = x => x*x;
console.log(square(4));

//map on arrray
let newarray = [1,2,3,4,5];
let squaredArray = newarray.map((num) => num * 5);
console.log(squaredArray);

let evenNumbers = [1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.
filter(num => num % 2 === 0);
console.log(filteredEvenNumbers);

let sum = [1,2,3,4,5];
let total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0 );
console.log(total);
let differ = sum.reduce((accumulator, currentValue) => accumulator - currentValue, 0 );
console.log(differ);

let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }

];

let marks = students.map(student => student.marks);
console.log(marks);
let names = students.map(student => student.name);
console.log(names);

let topStudents = students.filter (student => student.marks > 80);
console.log(topStudents);

let totalMarks = students.reduce((total,student) => total + student.marks, 0);
console.log(totalMarks);

//Mixed Object

let mixedObject ={
    name: "Alice",
    age: 25,
    hobbies: ["reading","traveling","coding"],
    address: {
        street: "123 Main St ",
        city:"New York",
        country:"USA"
    },
    greet:function(){
        console.log("Hello!");
        //arrow function in object
        let arrowfunction = () => {
            console.log("Hi!");
            
        }
    }
};
console.log(mixedObject.name);
console.log(mixedObject.age);
console.log(mixedObject.hobbies);
console.log(mixedObject.hobbies[0]);
console.log(mixedObject.hobbies[1]);
console.log(mixedObject.hobbies[2]);

console.log(mixedObject.address)
console.log(mixedObject.name);







