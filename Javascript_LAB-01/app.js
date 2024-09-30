const fs = require('fs');  // we are wrting this command to import the file system(module) so that we can use the readfile function

// this command is to read the paragraph in the paragraph.txt file in UTF-8 encoding
fs.readFile('paragraph.txt', 'utf8', (errors, data) => {
    if (errors) {  // this if statement will check for any errors 
        console.error(err);  // so the error is printed if it happens
        return;  // command to exit the function
    }
    console.log(data);  // print the paragraph in the file to the console
});
