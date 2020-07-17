var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// let user = new Person('Nav', 14, 'Student');
// user.greet();
var Elon_Musk = /** @class */ (function (_super) {
    __extends(Elon_Musk, _super);
    function Elon_Musk(name, age, occupation, money) {
        var _this = _super.call(this, name, age, occupation) || this;
        _this.money = money;
        return _this;
    }
    Elon_Musk.prototype.greet = function () {
        _super.prototype.greet.call(this);
        console.log(this.money);
    };
    Elon_Musk.prototype.show_money = function () {
        console.log(this.money);
    };
    return Elon_Musk;
}(Person));
var musk = new Elon_Musk('Elon Musk', 45, 'Entrepreneur', 45000000000);
musk.greet();
musk.show_money();
