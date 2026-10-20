import readline from 'readline';
import fs from 'fs';
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const filecreation=()=>{
  r1.question('Enter the file name: ',(filename)=>{
    r1.question('Enter the content of the file: ',(content)=>{
      fs.writeFile(`${filename}.txt`, `${content}`, (err)=>{
        if(err){
          console.log('Error creating file:',err);  
        }
        else{
          console.log('File created successfully!');  
        }
        r1.close();
      });
    });
  });
};

filecreation();