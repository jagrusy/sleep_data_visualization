var input = './data-single_line.tsv';
var output = './data.csv';

var fs = require('fs');

  fs.readFile(input, function(err, data) {
    if (err) throw err;

    data = data.toString();
    console.log(data.length);
    console.log(data[4] == '\t');
    // for (var i = 0; i < data.length; i++) {
    //   if (data[i] == '\t') {
    //     data
    //   } else {
    //     newData[i] = data[i];
    //   }
    //   console.log(newData);
    // }
    data.replace('\t', ',');

    console.log('new:::' + data);
    fs.writeFile(output, data, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
  });
