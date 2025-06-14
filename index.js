// Iteration 1: Names and Input ### Iteration 1: Names and Input

let hacker1 = "Pablo"
let hacker2 = "Silvia"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
}
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both hace equally long names, ${hacker2.length} characters`)
}


// Iteration 3: Loops


  //3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

//- `The driver's name goes first.` <br>
//- `Yo, the navigator goes first, definitely.` <br>
//- `What?! You both have the same name?`


let result = ""

for (let i=0; i<hacker1.length; i++) {
    result += `${hacker1[i].toUpperCase()} `;
}
console.log(result)


let reverse = ""

for (let i=hacker2.length-1; i>=0; i--) {
    reverse += `${hacker2[i]}`;
}
console.log(reverse)


for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++)
    if (hacker1[i] < hacker2[i]){
        console.log(`The driver's name goes first.`)
        break;
    } else if (hacker2[i] < hacker1[i]){
        console.log(`Yo, the navigator goes first, definitely.`)
        break;
    }
    else {
        console.log(`What?! You both have the same name?`)
        break;
}
