// passed in functions should call the callback(err, result); result will be returned
import Fiber from 'fibers';
import { Meteor } from 'meteor/meteor';

// this code originally from @scottburch here: https://github.com/meteor/meteor/issues/74

function runSync(func, thisArg) {
    var fiber = Fiber.current;
    var result, error;

    var args = Array.prototype.slice.call(arguments, 2);
    args.push(cb);

    func.apply(thisArg, args);
    Fiber.yield();
    if (error) throw new Meteor.Error(500, error.code, error.toString());
    return result;

    function cb(err, res) {
        error = err;
        result = res;
        if(Fiber.current != fiber){
            fiber.run();
        }
    }
}

_.extend(Meteor, {
  syncMethods: function(methods){
    _.each(methods, function(method, methodName){
      methods[methodName] = function(){
        this.unblock();
        var args = Array.prototype.slice.call(arguments);
        args.unshift(this);
        args.unshift(method);
        return runSync.apply(undefined, args);
      }
    });
    Meteor.methods(methods);
  }
});
