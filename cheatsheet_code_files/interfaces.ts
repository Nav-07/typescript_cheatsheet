// Interfaces
interface Person {
    // Interface is Like Struct in C/C++
    name: string;
    age: number;
    occupation: string;
}

function print_person(person:Person):void {
    console.log(person.name);
    console.log(person.age);
    console.log(person.occupation);
}

print_person({name: 'Nav', age: 14, occupation: 'Student'});