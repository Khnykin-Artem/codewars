const withDefaultValue = function (target, defaultValue) {
  return new Proxy(target, {
    get: function (obj, prop) {
      return prop in obj ? obj[prop] : defaultValue;
    },
  });
};
