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

let user = new Person('Nav', 14, 'Student');
user.greet();