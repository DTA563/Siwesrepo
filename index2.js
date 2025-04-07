const name = "David";
const age = 18;
const food = ["rice", "beans", "pasta" ];
console.log(food[2])
// alert(food[2]);

const testing = document.getElementById("testing")

testing.innerText = food[0];

const num = 3 + 4;
console.log(num);

const firstName = "David";
const lastName = "Abe"

console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`); // Template literals

const isHuman = true;

const person1 = {
    name: "David",
    age: 18,
    food: ["rice", "beans", "pasta"],
    isHuman: true
}

const person2 = {
    name: "John",
    age: 19,
    food: ["noodles", "bread", "pizza"],
    isHuman: true
}

const people = [person1, person2];
console.log(person1.age);

// for (let i = 0; i < people.length; i++){
//     const person = people[i]
//     console.log(person.name);
// }
for (const person of people) {
    console.log(person.food)
}

const target = 5;
const target1 = 1 + 1;

if (target1 === target){
    console.log("The numbers are the same.")
}else {
    console.log("The numbers are not equal.")
}

const allowedDrinkAge = 21;

// if(visitorAge >= allowedDrinkAge){
//     console.log("Allowed to drink")
// }else {
//     console.log("Not allowed to drink")
// }

// visitorAge >= allowedDrinkAge  ? console.log('Allowed to drink') : console.log('Not allowed to drink')


function drinkingAge (){
    const visitorAge = prompt('Enter Visitor Age');
    const visitorAgeNumber = Number(visitorAge)

if(visitorAge >= 21){
    console.log("You can drink");
    return
}

switch (visitorAgeNumber) {
    case 12:
        console.log('Still a baby go home');
        break;
    case 16:
        console.log('Come back in 5 years');
        break;
    case 18:
        console.log('Close !');
        break;
    default:
        console.log("We dont know you")

}

}

// drinkingAge();

const submitButton = document.getElementById("Submit")
submitButton.addEventListener('click' ,timeTable);

function timeTable(){
    const digit = document.getElementById("timetableNumber").value;
    digitNumber = Number(digit);

    for(i = 0; i <= 12; i++){
        const result =  digit * i;
        console.log(digit + " * " + i + " = " + result);
    }
}

function increaseText (){
    console.log('code got here')
    const digit = document.getElementById("increase").value;
    digitNumber = Number(digit);

    const increaseText = document.getElementById("increaseText");
    
    increaseText.style.fontSize = digitNumber+'px'
}

const increaseButton = document.getElementById("increaseSubmit");
increaseButton.addEventListener('click', increaseText)

// timeTable();