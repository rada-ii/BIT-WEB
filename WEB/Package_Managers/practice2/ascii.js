const figlet = require('figlet');

const createAscii = (text, callback) => {
  figlet(text, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = createAscii;
