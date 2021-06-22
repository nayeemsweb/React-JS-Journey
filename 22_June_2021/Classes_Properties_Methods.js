class Human{
    //ES7 Property
    gender = 'female';
    
    //ES7 Method
    printGender = () =>{
        console.log(this.gender);
    }
}

class Person extends Human{
    
    name = 'Nayeem';
    gender = 'male';
    
    printMyName = () =>{
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();