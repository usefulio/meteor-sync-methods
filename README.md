Note: 
0.1.x branch supports Meteor < 1.3
0.2.x branch supports Meteor 1.3.x+

Meteor.syncMethods
==================

If you want to call a Meteor method using Meteor.call or Meteor.apply from the client, but the result of that call relies on an asychronous action on the server... you can use Meteor.syncMethods(...) instead of Meteor.methods(...) to return the result to the client only _after_ the asychronous action has returned.

This is non-blocking on the client or the server side for subsequent requests because of Meteor's use of fibers.

How to use
==========

```js
Meteor.syncMethods({
  myMethodOne: function(myArg1, myArg2, callback){
    // do some async stuff
    callback(err, result);
  }
  , myMethodTwo: function(callback){
    callback(err, result);
  }
});

```

All functions registered via `Meteor.syncMethods` will be passed a callback function as their last parameter automatically. When you are done with your asynchronous action, simply call the callback passing in any error and result. 

If the error is not undefined, it will be thrown and transmitted back to the client. 

If the error is undefined the result will be returned to the client calling the method just as if you had done `return result;` in a normal `Meteor.methods({...})`.

License
=======

MIT