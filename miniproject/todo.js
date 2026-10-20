import readline from "readline";
const r1=readline.createInterface({input:process.stdin, output:process.stdout
});
const todo=[];
const showMenu=()=>{
  console.log("1. Add a task");
  console.log("2. View tasks");
  console.log("3. Exit");
r1.question("Choose an option:",handleInput);}

const handleInput=(input)=>{
  if(input==="1"){
    r1.question("Enter a task:",(task)=>{
      todo.push(task);
      console.log("Task added!");
      showMenu();
    })
  }
  else if(input==="2"){
    console.log("Your todo list:");
    todo.map((task,index)=>{
      console.log(`${index+1}. ${task}`);
    });
    showMenu(); 
  }
  else if(input==="3"){
    console.log("Exiting...");  
    r1.close();
  }
  else{
    console.log("Invalid option. Please try again.");
    showMenu();
  } }
  showMenu();