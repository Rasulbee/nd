class Hero
{
    private secret="Top secret";
    constructor(public fname:string,public lname:string)
    {
    
    }
    fullname():string
    {
        return this.fname+this.lname;
 
    }
    saysecret()
    {
        return this.secret;
    }
};