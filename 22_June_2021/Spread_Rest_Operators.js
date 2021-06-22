//Spread_Rest_Operators => ...
//Spread => Used to split up array elements  OR object properties
const numbers  = [1, 2, 3];
const newSpreadNums = [...numbers, 4, 5];
const newNums = [numbers, 4, 5];

console.log(newNums); //[[1,2,3],4,5]
console.log(newSpreadNums); //[1,2,3,4,5]

const person = {
    name: 'Nayeem'
};

const newPerson = {
    ...person,
    age: 24
}

console.log(newPerson);

//Rest => Used to merge a list of function arguments into an array
const filter = (...args) => { 
    return args.filter(el => el === 1); //=== checks for type & value equality
}

console.log(filter(1, 2, 3));

