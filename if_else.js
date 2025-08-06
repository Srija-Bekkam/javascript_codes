let user="srija"
if(user){
    console.log("hello my name is "+ user)
    }
else{
    console.log("please enter your name")
}
//rating 
let rating=9;

if(rating <= 8 && rating>=10){
    console.log("the movie is blockbuster")
}
else if (rating <= 7 && rating>=5){
    console.log("the movie is superhit")
}
else if(rating <= 4 && rating>=3){
    console.log("the movie is hit of the day")
}
else if(rating <= 2 && rating>=1){
    console.log("the movie is just average")
}
else{
    console.log("movie is flop")
}
//age 
let age=21
let result=age>=18? "adult":"minor";
console.log(result)

let marks=30
let results=marks>=30?"pass marks":"fail";
console.log(results)