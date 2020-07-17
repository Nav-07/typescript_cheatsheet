let my_string: string;
let my_number: number; // Number can be int, float, double
let my_boolean: boolean;
let my_var: any;
let my_string_array: string[];
let my_void_data: void;

// Same as declaring a normal array
let new_string_array: Array<String>;
let new_num_array: Array<Number>;
let new_bool_array: Array<Boolean>;


// Variables can also be defined as:
let nav: string = 'Nav';

my_string = 'Hello, From Nav!'.slice(0, 5);
my_number = 14;
my_boolean = true;
my_var = 'Nav'; // can be string or int or boolean
my_void_data = null;

my_string_array = ['Hello', 'From', 'Nav'];

console.log(my_string);
console.log(my_number);
console.log(my_boolean);
console.log(my_var);
console.log(my_string_array);
console.log(nav);
console.log(my_void_data);