# Hash Tables #

Hash Table - a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key.

Source - [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)

Collison Resolution Methods:-
1. Chaining
2. Probing
   a. Linear Probing
   b. Quadratic Probing
   
## Implementations ##
|S.No.|Collision Resolution Method| File Name |
|:---:|:-------------------------:|:---------:|
|  1  | Chaining                  |chaining.js|           
