class Err{
    constructor(message=null,name=null){
        this.message=message;
        this.name=name;
    };
    show(){
        let error=`${new Date().toLocaleString()}\rSORRY, Error: ${this.message} to "${this.name}" function.`;
        if(alert) alert(error);
        else if(console.log) console.log(error);
        else if(console.error) console.error(error);
        else if(console.warn) console.warn(error);
        else return;
    };
};