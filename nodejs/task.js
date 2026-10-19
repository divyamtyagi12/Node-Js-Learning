const EventEmitter = require('events');
const emitter = new EventEmitter();
const eventscount = {
  userlogin:0,
  userpurchase:0,
  profileupdate:0,
  userlogout:0,
}
emitter.on("summary",()=>{
  console.log({eventscount});
});
emitter.on("userlogin",(username)=>{
  eventscount.userlogin++;
  console.log(`${username} has logged in`);
});
emitter.on("userpurchase",(username,product)=>{
  eventscount.userpurchase++;
  console.log(`${username} has purchased ${product}`);
} );
emitter.on("profileupdate",(username,field)=>{
  eventscount.profileupdate++;
  console.log(`${username} has updated their ${field}`);
});   
emitter.on("userlogout",(username)=>{
  eventscount.userlogout++;
  console.log(`${username} has logged out`);
});
emitter.emit("userlogin","Divyam");
emitter.emit("userpurchase","Divyam","Laptop");
emitter.emit("profileupdate","Divyam","email");
emitter.emit("userlogout","Divyam");
emitter.emit("summary");