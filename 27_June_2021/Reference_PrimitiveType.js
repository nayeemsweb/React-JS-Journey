const number = 1;
const num2 = 1;

console.log(num2);

//Obj and Arrays are ref. type

const person = {
    name: 'Nayeem'
};

const secondPerson = {
    ...person
}; //copied the pointer & points the exact same memory of the pewrson obj

person.name = 'Manu';

console.log(secondPerson);

