


 var read = require('read-file');

 

const synchrone= ()=> {
 read.sync('message.txt', 'utf8');

 
}

const asynchrone = () => {
// asynchrone 
read('message.txt', 'utf8', function(err, buffer) {  console.log(buffer); });
console.log('after calling readFile');
}



const fs = require('fs');

// read write 
const writefile = () => {

  fs.readFile('message.txt', 'utf8', function(err, content) {

  fs.writeFile("message2.txt", content, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("message2.txt", "utf8"));
  }
});
});


  

}



module.exports = {synchrone, asynchrone,writefile};

