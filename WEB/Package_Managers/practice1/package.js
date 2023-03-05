const figlet = require('figlet');

const sentence = 'Hello, world!';

const config = {
  font: 'Graffiti',
  horizontalLayout: 'default',
  verticalLayout: 'default',
};

figlet(sentence, config, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});

const config1 = {
  font: 'slant',
  horizontalLayout: 'default',
  verticalLayout: 'default',
};

figlet(sentence, config1, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
