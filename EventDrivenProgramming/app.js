// importing "events" moddule and creating an instance of the EventEmitter class

const EventEmitter=require('events');
const myEmitter=new EventEmitter();

// listener function - welcomeUser()
const welcomeUser = () =>{
    console.log("hi there ,welcome to server...!");
}


//listening for the userJoined event using the on() method
myEmitter.on('userJoined',welcomeUser);

//emitting the userJoined event using the emit() method
myEmitter.emit('userJoined');



/*multiple on() functions are listening for a single event to happen (userJoined event) and when this event is emitted
in the last line of the code using the emit() function.*/

//Importing `events` module and creating an instance of EventEmitter class
const EventEmitter1 = require('events');
const myEmitter1 = new EventEmitter1();

// Listener Function 1: sayHello
const sayHello = () => {
    console.log('Hello User');
}

// Listener Function 2: sayHi
const sayHi = () => {
    console.log('Hi User');
}

// Listener Function 3: greetNewYear
const greetNewYear = () => {
    console.log('Happy New Year!');
}

// Subscribing to `userJoined` event
myEmitter1.on('userJoined', sayHello);
myEmitter1.on('userJoined', sayHi);
myEmitter1.on('userJoined', greetNewYear);

// Emiting the `userJoined` Event
myEmitter1.emit('userJoined');



/*he emit() can also contain arguments which will be passed to the listener functions:
In the following code, We are using the on() method to subscribe to an event called birthdayEvent and when this event is emitted,
 we run the greetBirthday() function in response to it.

The extra parameters mentioned in the emit() function, gets passed as parameters to all the listener functions which will run in
 response to the birthdayEvent. Therefore John and 24 gets passed as parameters to the greetBirthday() function. */
const EventEmitter2 = require('events');
const myEmitter2 = new EventEmitter2();

// Listener function
const greetBirthday = (name, newAge) => {
    // name = John
    // newAge = 24
    console.log(`Happy Birthday ${name}. You are now ${newAge}!`);
}

// Listening for the birthdayEvent
myEmitter2.on('birthdayEvent', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEmitter2.emit('birthdayEvent', 'John', '24');



/* The emit() function should always be defined after the on() function(s):
Before emitting any event, you need to make sure that all the listener functions have subscribed/registered to that event.
 Any function which is registered as a listener after the event has been emitted, will not be executed.
*/
const EventEmitter3 = require('events');
const myEmitter3 = new EventEmitter3();

// Listener Function 1 - sayHi
const sayHii = () => {
    console.log('Hi User');
}

// Listener Function 2 - sayHello
const sayHelloo = () => {
    console.log('Hello User');
}

// Registering sayHi function as listener
myEmitter3.on('userJoined', sayHii);

// Emitting the event
myEmitter3.emit('userJoined');

// Registering sayHello function as listener
myEmitter3.on('userJoined', sayHelloo);
