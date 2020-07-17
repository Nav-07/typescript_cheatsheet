// Class
class Person {
    name: string;
    age: number;
    occupation: string;

    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    greet() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.occupation);
    }
}

// let user = new Person('Nav', 14, 'Student');
// user.greet();

class Elon_Musk extends Person {
    money: number;

    constructor(name: string, age: number, occupation:string, money:number) {
        super(name, age, occupation);
        this.money = money;
    }

    greet() {
        super.greet();
        console.log(this.money);
    }
    show_money() {
        console.log(this.money);
    }
}

let musk = new Elon_Musk('Elon Musk', 45, 'Entrepreneur', 45000000000);
musk.greet();
musk.show_money();