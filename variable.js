//variables are case sensitive 
name='srija';
NAME='SRIJA';
console.log(NAME)
console.log(name)
//VAR can be re-declared and updated,it has global scope  
var name='varma';
var name='VARMA';
name='amrav'
console.log(name)
//global scope
{
    var name1="anu";
}
{
    var name1="ananya";
}
console.log(name1)

//LET 
// cannot be re-declared and can be updated ,local scope
let age=20;
age=30;
console.log(age)

//CONST(FIXED) 
// cannot be re-declared or updated
const salary=20000;
//salary=30000; shows error while updating 
console.log(salary)
