//Use JavaScript Strict Mode
'use strict';

//This is an ECMAScript 5 Implementation

/*
* Set -> A Data Strucutre that represents an unordered
* collection of values, with no duplicates
*
* Fundamental Operations:-
* 1. Addition Of Values
* 2. Searching
* 3. Deleting
*
* Note -> In JavaScript, we don't have to worry about 
* how each of the function works and just need to
* impelement the logic with working abstracted away
*/

/*
* Constructor Function to initialize instances
* of Set Class
* Implementations Details:
* -> Each Set will have an object which will hold the values
* -> Each Set will have a length property that will store the
* Number Of Elements
*/
function mySet(/* A List of values to be inserted */) {
    mySet.prototype.add.apply(this, arguments);
}

mySet.prototype.value = {}; //An Object which will store the values
mySet.prototype.length = 0; //A property which will store number of elements

/*
* This function will iterate over all the elements 
* passed in the argument object
*/
mySet.prototype.add = function(/* A List of values to be inserted */) {
    var str;
    for(var i = 0; i< arguments.length ; i++) {
        if(!this.value.hasOwnProperty(arguments[i])) {
            str = this._valToString(arguments[i]);
            this.value[str] = arguments[i];
            (this.length)++;
        }
        else {
            continue;
        }
    }
    //To allow method chaining
    return this;
}

/*
* This function will print all the values in the order they are inserted
* If the choice is undefined (case when no value is passed) or 0
* then, function will print the object in the following way
* { a: value, b: value, ..., }
* 
* If the choice is 1, then function will print the number of elements 
* in the set
*/
mySet.prototype.print = function(choice) {
    if(choice === undefined || choice === 0) {
        var str = "{ ";
        for(var i in this.value) {
            str += i + ":" + this.value[i] + ", ";
        }
        str+= " }";
        console.log(str);
    }
    else {
        console.log(this.length);
    }
}

//This is an internal function and should not be publicly used
/*
* # -> Indicates Number
* * -> Indicates String
* @ -> Indicates Objects
*/
mySet.prototype._valToString = function(value) {
    switch(value) {
        case null: return "null";
        case undefined: return "undefined";
        case true: return "true";
        case false: return "false";
        default: switch(typeof value) {
            case "number": return ("#" + value);
            case "string": return ("*" + value);
            case "object": return ("@" + value);
        }
    }
}

//This function will delete the mentioned values if present
mySet.prototype.deleteValue = function(/* A List of values to be inserted */) {
    var str;
    for(var i = 0; i<arguments.length ; i++) {
        str = this._valToString(arguments[i]);
        if(this.value[str]) {
            delete this.value[str];
            (this.length)--;
        }
        else {
            continue;
        }
    }
    //To allow method chaining
    return this;
}

//This function will remove all the elements and reset the 
//value of length to 0
mySet.prototype.clear = function() {
    this.value = {};
    this.length = 0;
    //To allow method chaining
    return this;
}

/*
* Copy Function
* This function will accept a mySet Object and 
* will copy all the elements of that object to
* the object on which the method is invoked
*/
mySet.prototype.copy = function(obj) {
    for(var i in obj.value) {
        if(!this.value[i]) {
            this.value[i] = obj.value[i].slice(1, -1);
        }
        else {
            continue;
        }
    }
    //To allow method chaining
    return this;
}

/*
* Entries Function
* THis function returns an array containing the elements of the
* set object
*/
mySet.prototype.entries = function() {
    var array = [];
    for(var i in this.value) {
        array.push(this.value[i]);
    }
    return array;
}

/* Has Function
* This function checks if the given element is in 
* the set object
*/
mySet.prototype.has = function() {
    return this.value.hasOwnProperty(this._valToString(arguments[0]));
}

/*
* forEach Function
* It accepts the function object and executes that function
* for every object
*/
mySet.prototype.forEach = function(f) {
    for(var i in this.value) {
        f(this.value[i]);
    }
    //To allow method chaining
    return this;
}

/*
* All other functions can be implemented using the
* above functions
*/