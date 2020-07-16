//Using JavaScript Strict Mode
'use strict';

//This is an ECMAScrip 6 Implementation
/* 
* Implementation of a Hash Table
*
* Collision Resolution Technique-> Chaining
*
* Methods of hash table:-
* 1. insert() -> Insert value in the Hash Table
* 2. delete() -> Deletes the speciifed value from the Hash Table
* 3. print() -> Prints the Hash Table
* 4. _hashFuction() -> Internal function which returns the 
* hash value based on the length of the Hash Table
* 5. copy() -> A utility(static) method of the hashTable class 
*    which takes length and indefinte number of Hash Table Objects
*    and returns a new Hash Table Object with all the values of the
*    mentioned Hash Table Objects
*
* Assumption -> Key and Value is same
*/

//Hash Table Class
class hashTable {
    /*
    * Constructor Function of Hash Table
    * Arguments -> length (Specifies Length of the hash Table)
    */
    constructor(length) {
        this.table = [];
        this.length = length;
    }

     /*
    * Insert Function
    * Arguments -> List of values to be inserted
    * Inserts all the values passed as arguments
    */
    insert() {
        for(let i in arguments) {
            if(arguments[i] == null) {
                continue;
            }
            else
            {
                let pos = this._hashFunction(arguments[i]);
                if(this.table[pos] == null) {
                    this.table[pos] = new _newNode(arguments[i]);
                }
                else {
                    let temp = this.table[pos];
                    while(temp.next !== null) {
                        temp = temp.next;
                    }
                    temp.next = new _newNode(arguments[i]);
                }
            }
        }
        //To allow method chaining
        return this;
    }

    /*
    * Delete Function
    * Arguments -> List of values to be deleted
    * Deletes all the values passed as arguments
    */
    delete() {
        for(let i in arguments) {
            if(arguments[i] != null) {
                let pos = this._hashFunction(arguments[i]);
                let temp = this.table[pos].next;
                let prev = this.table[pos];
                if(prev != null && prev.key === arguments[i]) {
                    this.table[pos] = null;
                }
                else if(temp != null && temp.key === arguments[i]) {
                    prev.next = null;
                }
                else {
                    while(temp.next !== null && temp.key === arguments[i]) {
                        temp = temp.next;
                        prev = prev.next;
                    }
                    if(temp.key === arguments[i]) {
                        prev.next = temp.next;
                    }
                }
            }
        }
        //To allow method chaining
        return this;
    }

    /*
    * Copy Function
    * Arguments -> length, Rest Parameter-List of Objects
    * Returns a new Hash Table Object containing all the values
    * of the passed Hash Table Objects 
    */
    static copy(length, ...obj) {
        let newTable = new hashTable(length);
        for(let i in obj) {
            let tempTable = obj[i].table;
            for(let j in tempTable) {
                let tempValue = tempTable[j];
                while(tempValue !== null) {
                    newTable.insert(tempValue.key);
                    tempValue = tempValue.next;
                }
            }
        }
        //Returns a New Hash table Object
        return newTable;
    }

    /*
    * Print Function
    * Arguments -> None
    * Prints the Hash Table
    * Format:-
    * let Hash Table contain the values -> 1,2,3,4,5,6,7,8,9,10
    * Let length of the hash table be -> 5
    * Output:-
    * {5, 10,}
    * {1, 6,}
    * {2, 7,}
    * {3, 8,}
    * {4, 9,} 
    */
    print() {
        for(let i in this.table) {
            let str = "{";
            let temp = this.table[i];
            while(temp != null) {
                str += temp.key + ", ";
                temp = temp.next;
            }
            str += "}";
            console.log(str);
        }
    }

    /*
    * Search Function
    * Searches the hash table for the value passed as argument
    */
   search(value) {
       if(value == null) {
           return false;
       }
       else if(this.length === 0) {
           return false;
       }
       else {
           let temp = this.table[this._hashFunction(value)];
           while(temp !== null && temp.key !== value) {
               temp = temp.next;
           }
           if(temp !== null && temp.key === value) {
               return true;
           }
           else {
               return false;
           }
       }
   }

    /*
    * Hash Function
    * Arguments -> Value
    * Returns the hash value using the given value
    */
    _hashFunction(value) {
        return (value)%(this.length);
    }
}

/*
* A Node Class
* Properties:-
* 1. Key -> Stores the data
* 2. next -> Pointer to next object
* Note -> This is an internal function is not meant
* to be used by the user
*/
class _newNode {
    constructor(value) {
        this.key = value;
        this.next = null;
    }
}

//The implementation of all other methods is
//similar to the one written above