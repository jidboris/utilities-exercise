const fs = require('fs')
const writeStream = fs.createWriteStream('./utilityFile.txt')
for (let i = 0; i < 10; i++) {
    writeStream.write('i am a file\n')
}
try{
let dataFromFile = fs.readFileSync('utilityFile.txt')
console.log('data', dataFromFile.toString())
}
catch(e){
console.log('Error', e)
}

