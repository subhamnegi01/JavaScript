// If - Else

let age = 3

if (age>=18){
    console.log("Eligble for vote")
}
else{
    console.log("Not eligble for vote")
}



// if-else if-else
let age1 = 19

if(age1<=18){
    console.log("KID")
}
else if(45<age1){
    console.log("Old")
}
else{
    console.log("Young")
}




// Multiple condition : Switch
let day = 5
switch(day){
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    default:
        console.log("Not a valid day")
}
