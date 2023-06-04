// Random number generator// First Piece of Data. 

const randomNum = (num) => {
    let x = Math.floor(Math.random(num) * 100)
    console.log(`Your monthly lucky number is: ${x}`)
}

randomNum();

//Next task i should go and make an array of objects. Each of these objects will be one sentence or string. 

let id1 = {
    advice: 'Get drunk'
}

let id2 = {
    advice: 'Get Married'
}

let id3 = {
    advice: 'Get a Job'
}

let id4 = {
    advice: 'Probably call your mom'
}

let id5 = {
    advice: 'Question all your life decisions'
}

let id6 = {
    advice: 'DEFINATELY play the lotto'
}

let id7 = {
    advice: 'leave me alone please im tired.'
}

let id8 = {
    advice: 'go to the doctor for a checkup'
}

let id9 = {
    advice: 'go get some sunlight you pale af'
}

let id10 = {
    advice: 'go somewhere exotic'
}


let array = [];

array.push(id1.advice, id2.advice, id3.advice, id4.advice, id5.advice, id6.advice, id7.advice, id8.advice, id9.advice, id10.advice);


for (let i = 0; i < array.length; i++) {
    let randomAdvice = Math.floor(Math.random() * 10) + 1;
}
