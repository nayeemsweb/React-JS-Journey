//normal function 
function add(a, b){    
    return a+b;
}
console.log(add(5,6));

//Arrow Function
function printMyName(name){
    console.log(name);
}
printMyName('Nayeem');

const showMyAge =  (age) => {
    console.log(age);
}
showMyAge(24);

//Arrow Function - Single Parameter
const myFavColor = () => {
    console.log('Blue');
}
myFavColor();

//Arrow Function - Multiple Parameter
const friendInfo = (frndName, frndAge) => {
    console.log(frndName, frndAge);
}
friendInfo('Sabeek', 24);

//Arrow Function - return type
const multiply = number => {
    return number * 2;
}
console.log(multiply(2));

//Arrow Function - Alternative syntax
const divide = num => num / 3;
console.log(divide(10));