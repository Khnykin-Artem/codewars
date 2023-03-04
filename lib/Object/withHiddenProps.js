const withHiddenProps = function (target, prefix = '_') {
    return new Proxy(target, {
        has: function (obj, prop) {
            return (prop in obj) && (!prop.startsWith(prefix));
        },

        ownKeys: function(obj) {
            return Reflect.ownKeys(obj).filter((prop) => !prop.startsWith(prefix));
        },

        get: function(obj, prop, receiver) {
            return (prop in receiver ? obj[prop] : undefined);
        }
    })
}