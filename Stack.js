//stack using class
class Stack{
  constructor(){
    this.storage = [] ;
  }
  //stack methods
  push(item){
        this.storage.push(item);
  }
  pop(){
        return this.storage.pop();
  }
  size(){
        return this.storage.length;
  }
}

//Example on creating an instance of stack class:
let mystack = new Stack() ;
