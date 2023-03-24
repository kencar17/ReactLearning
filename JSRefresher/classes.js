
class Human {
    constructor() {
        this.gender = 'Male';
    }

    printGender() {
        console.log(this.gender);
    }

}

class Person extends Human {

    constructor() {
        super();
        this.name = 'Ken';
    }


    printName() {
        console.log(this.name);
    }

}

const person = new Person();

person.printName();
person.printGender();

// ES7 Below


class HumanTwo {

    gender = 'Male';

    printGender = () => {
        console.log(this.gender);
    }

}

class PersonTwo extends HumanTwo {

    name = 'Ken';
    gender = 'Female';

    printName = () => {
        console.log(this.name);
    }

}


const personTwo = new PersonTwo();

personTwo.printName();
personTwo.printGender();
