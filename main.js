// Class
var Person = /** @class */ (function () {
    function Person(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    Person.prototype.greet = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.occupation);
    };
    return Person;
}());
var user = new Person('Nav', 14, 'Student');
user.greet();
