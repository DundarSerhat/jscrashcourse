/*
// String, Numbers, Boolean, Null, Undefined

const name = 'Serhat';
const age = 25;
const float = 7.5;
const isCool = true;
const x = null; // type is object not null
const y = undefined;

console.log(typeof x);


const myname = 'Serhat';
const age = 25;

// concatenation(birlestirmek)
//console.log('My name '+ myname + ' and ı am ' + age);

console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.substring(0,3).toLowerCase());
console.log(myname.split(''))

const t = 'ı, need, to, split, this, sentence' ;
console.log(t.split(','))

// With this method, ı can split searched sentence and we can searching our database

// ---ARRAY---
// Variables that hold multiple values

const array = new Array(5, 2, 5, 6, 4);

const target = ['success', 'achivements', 'accomplishment', 'victory', 100, 10 ]; // Also we can put different data type to array

target[6] = 'we can add new value'

target.push('Sometimes we dont know that arrays lengt so we can use push methods')
target.pop(); // This method that delete last value in our array
target.unshift('First value');

console.log(target);
console.log(target[2]);

console.log(Array.isArray(target));
console.log(typeof target);

console.log(target.indexOf('Can u check'));
console.log(target.indexOf(10));

const person = {
    FirstName:'Serhat',
    LastName: 'Dundar',
    Age: 25,
    personalinterest: ['money', 'career','peace', ]
}

for (let counter = 0; counter < person.personalinterest.length; counter++) { 
    if (person.personalinterest[counter] = 'peace') {    

        console.log('You get job dude');
    }
}

const Serhat = {
    
    firstName: 'Serhat',
    secondName: 'Berker',
    lastName:'Dundar',
    age: 25,
    hobbies: [ 'fitness', 'trekking', 'coding' ],
    address:{},

}

console.log(Serhat.hobbies[1]);

const{firstName, secondName } = Serhat
console.log(firstName,secondName);

Serhat.email = 'serhatb.dundar@gmail.com';

console.log(Serhat)



const todos = [
    {
        id: 1,
        text: ' ı coudnt understand',
        isCompleted: false
    },
        
    {
        id: 1,
        text: ' ı coudnt understand',
        isCompleted: false
    },

    {
        id: 1,
        text: ' ı coudnt understand',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// ---FOR---

for(let i= 0 ; i< 10 ; i++){

    console.log('Number: ' + i + ' greater than '+ (i-1));
}

// ---While---
let i = 0;
while(i<10){

    console.log('Number: ' + i + ' greater than '+ (i-1));
    i++;
}



const todos = [
    {
        id: 1,
        text: ' ı couldnt understand',
        isCompleted: true
    },
        
    {
        id: 2,
        text: ' ı could understand',
        isCompleted: false
    },

    {
        id: 3,
        text: ' Nevermind',
        isCompleted: false
    }
];

for(let i = 0; i<todos.length;i++){
    
    console.log(todos[i].text);

}

for(let whatYouWant of todos){
    
    console.log(whatYouWant.text);

}

//---forEach,Map,Filter---

// ForEach dont return any value
todos.forEach(function(banane) {

    console.log(banane.id);
})

const createdArray = todos.map(function(sanane){

    return sanane.text;
});

console.log(createdArray);

const onlyexsistvalue = todos.filter(function(tryit){

    return tryit.isCompleted == true ;
}).map(function(tryit){
    return tryit.text;
})

console.log(onlyexsistvalue);


// == not sensitive string or number but === sign is sensitive for if statement

const x = 7;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color){

    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
     default:
         console.log('color is black');
         break;       
}



function mulnumber(num1,num2){

    c= num1* num2;
    console.log(c)
}

//const c = mulnumber(3,4);


function mulnumber2(num1,num2){
    
    const b = num1 * num2;
    console.log(b)
    return b
}

const b = mulnumber2(4,5);

console.log(b);


function dividetwonum (num1 = 10, num2 = 2){
    
    console.log(num1/num2);
}
dividetwonum();

const sumnum = (num1,num2) => num1 + num2;

console.log(sumnum(7,4));



function Person(firstName,lastName,dob){

    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

//Instantiate object

const person1 = new Person('Serhat', 'Dundar', '24-01-1997');
const person2 = new Person('Ali Burak', 'Ozden', '24-01-1997');
console.log(person2.firstName);



//---CLASS---

class PDC {
    constructor(factory,line,station,addDate){

        this.factory = factory;
        this.line = line;
        this.station = station;
        this.addDate = new Date(addDate)  
    }

    getFullyInformation(){
        return ;
    }

}

const PDC1 = new PDC('FLCI','AL1','WS125',"2021-12-23");

console.log(PDC1);

*/


