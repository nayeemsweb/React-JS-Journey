class Animal{
    constructor(){
        this.name = 'Tiger';
    }

    printAnimalName(){
        console.log(this.name);
    }
}

class Tiger extends Animal{
    constructor(){
        super();
        this.legs = 4;
    }

    printNumOfLegs(){
        console.log(this.legs);
    }
}

var animal1 = new Tiger();
animal1.printNumOfLegs();
animal1.printAnimalName();

var animal2 = new Tiger();