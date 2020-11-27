//woodCalculator code:
function Chair(length,width,height){
    var Cubicfeet=length*width*height;
    return Cubicfeet;

}
var Calculator=Chair(10,5,8);
console.log("For Chair:",Calculator);

function Table(length,width,height){
    var Cubicfeet=3*(length*width*height);
    return Cubicfeet;

}
var Calculator=Table(15,8,5);
console.log("For Table:",Calculator);

function Bed(length,width,height){
    var Cubicfeet=5*(length*width*height);
    return Cubicfeet;

}
var Calculator=Bed(9,6,3);
console.log("For Bed:",Calculator);

//tinyFriend code:
var Names=["Arafat","Abir","Sakibur"];
var minName=Names[0];
for(var i=0; i<Names.length; i++){
    var element = Names[i];
    if(element<Names[i]){
        minName = element;
    }
}
console.log("Tiny Friend is:",minName);

//feetToMile code:
function feetToMile(feet){
    var Mile= feet/5280;
    return Mile;
}
var mile= feetToMile(50);
console.log(mile);

//brickCalculator code:
function Brickcalculator(20){
    var floor=5;
}
