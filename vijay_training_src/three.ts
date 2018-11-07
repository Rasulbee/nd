/*
number
string
boolean
null
undefinied

*/

let user:string="batman";
let heroes:any[]=["batman","superman","spiderman"];
heroes.push(5);

let prop:(number | string);
prop=5;
prop="hello";
//prpo =true;// this wont accept;

function adder(num1:number,num2:number):number
{
    return num1+num2;
}
function adder1(num1:number,num2:number,num3?:number):number
{
    return num1+num2 ||0;
}