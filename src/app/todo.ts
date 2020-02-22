export class Todo {

    content : string;
    createdAt : Date ;
    isDone : boolean = false;
    isRemoved : boolean = false;

    constructor(){
        this.createdAt = new Date();
    }
}
