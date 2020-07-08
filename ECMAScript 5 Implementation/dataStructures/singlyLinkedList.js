//Using JavaScript Strict Mode
'use strict';

//This is an ECMAScript 5 Implementation

/*
* Main Linked-List Class Properties:-
* "head" will store the reference of the first object 
* Arguments -> None
* Properties:-
* 1. head -> Will store the reference of the first
* node object
* 2. length -> Will store the number of elements in the 
* linked list
*/
function myLinkedList() {
    this.head = null;
    this.length = 0;
}

/*
* This is a internal class and shouldn't be used publicly
* Node Class
* Arguments -> Value
* Properties:-
* 1. "key" will store the data
* 2. "ptr" will store the reference to the next object 
*/
function _myNode(value) {
    this.key = value;
    this.next = null;
}

/*
* A function which inserts a node in the beginning
* Arguments -> Key Value
* If no value is passed then it thorws error
* stating "No value is passed"
*/
myLinkedList.prototype.insertAtTheBeginning = function(value) {
    if(value === undefined) {
        throw new Error("No value is passed!");
    }
    else if(this.head === null) {
        this.head = new _myNode(value);
        (this.length)++;
    }
    else {
        var temp = this.head;
        this.head = new _myNode(value);
        this.head.next = temp;
        (this.length)++;
    }
    //To allow method chaining
    return this;
}

myLinkedList.prototype.insertAtTheEnd = function(value) {
    if(this.head === null) {
        this.insertAtTheBeginning(value);
    }
    else {
        var temp = this.head;
        while(temp.next !== null) {
            temp = temp.next;
        }
        temp.next = new _myNode(value);
        (this.length)++;
    }
   //To allow method chaining
   return this; 
}

/*
* This function prints all the Linked List
* elements starting from the last
*/
myLinkedList.prototype.printFromBeginning = function() {
    var entries = [], temp;
    temp = this.head;
    while(temp !== null) {
        entries.push(temp.key);
        temp = temp.next;
    }
    console.log(entries.toString());
}

/*
* This function prints all the Linked List
* elements starting from the first
*/
myLinkedList.prototype.printFromEnd = function() {
    var entries = [], temp;
    temp = this.head;
    while(temp !== null) {
        entries.unshift(temp.key);
        temp = temp.next;
    }
    console.log(entries.toString());
}

/*
* This function inserts element after a given value
* Arguments:-
* 1. After 
* 2. Value
* The value will be inserted after the given "after" key
*
* -> If after is omitted then the function will insert at the 
* End
* 
* -> If value is omitted then the function will throw an error
*
* -> If the Linked list is empty or if there is no value equal to after
* then after will be discarded and the given value will be inserted at 
* the End
*/
myLinkedList.prototype.insertAfter = function(after, value) {
    if(arguments.length === 0) {
        throw new Error("'After' key and value to be inserted is required");
    }
    else if(arguments.length === 1) {
        this.insertAtTheEnd(arguments[0]);
    }
    else {
        var temp = this.head;
        if(temp === null) {
            this.insertAtTheEnd(value);
        }
        else {
            while(temp !== null && temp.key !== after) {
                temp = temp.next;
            }
            if(temp.key === after) {
                var newNode = new _myNode(value);
                newNode.next = temp.next;
                temp.next = newNode;
                (this.length)++;
            }
            else if(temp.next === null || temp.key !== after) {
                this.insertAtTheEnd(value);
            }
        }
    }
    //To allow method chaining
   return this; 
}

/*
* This function inserts element before a given value
* Arguments:-
* 1. Before 
* 2. Value
* The value will be inserted before the given "before" key
*
* -> If before is omitted then the function will insert at the 
* Beginning
* 
* -> If value is omitted then the function will throw an error
*
* -> If the Linked list is empty or if there is no value equal to before
* then before will be discarded and the given value will be inserted at 
* the Beginning
*/
myLinkedList.prototype.insertBefore = function(before, value) {
    if(arguments.length === 0) {
        throw new Error("'After' key and value to be inserted is required");
    }
    else if(arguments.length === 1) {
        this.insertAtTheBeginning(arguments[0]);
    }
    else {
        var temp, prev;
        if(this.head !== null) {
            if(this.head.next !== null) {
                temp = this.head.next;
                prev = this.head;
                if(prev.key === before) {
                    this.insertAtTheBeginning(value);
                }
                else {
                    while(temp.next !== null && temp.key !== before) {
                        temp = temp.next;
                        prev = prev.next;
                    }
                    if(temp.key === before) {
                        var newNode = new _myNode(value);
                        newNode.next = temp;
                        prev.next = newNode;
                        (this.length)++;
                    }
                    else {
                        this.insertAtTheBeginning(value);
                    }
                }
            }
            else {
                this.insertAtTheBeginning(value);
            }
        }
        else {
            this.insertAtTheBeginning(value);
        }
    }
    //To allow method chaining
   return this; 
}

/* 
* This function invokes the function passed as argument
* for each key in the Linked List
*/
myLinkedList.prototype.forEach = function(f) {
    var temp = this.head;
    while(temp !== null) {
        f(temp.key);
        temp = temp.next;
    }
    //To allow method chaining
   return this;
}

myLinkedList.prototype.delete = function(value) {
    if(value !== undefined) {
        if(this.head !== null) {
            if(this.head.next !== null) {
                var temp, prev;
                temp = this.head.next;
                prev = this.head;
                if(prev.key === value) {
                    this.head = temp;
                    (this.length)--;
                }
                else {
                    while(temp.next !== null && temp.key !== value) {
                        temp = temp.next;
                        prev = prev.next;
                    }
                    if(temp.key === value) {
                        prev.next = temp.next;
                    }
                }
            }
            else {
                if(this.head.key === value) {
                    this.head = null;
                    (this.length)--;
                }
            }
        }
    }
    //To allow method chaining
   return this;
}

/*
* Rest of the functions can be implemented in a similar manner
*/