// Random number generator// First Piece of Data. 

const randomNum = (num) => {
    let x = Math.floor(Math.random(num) * 100)
    console.log(`Your monthly lucky number is: ${x}`)
}

randomNum();

//Next task i should go and make an array of objects. Each of these objects will be one sentence or string. 

let advice = {
    adv1: 'Get drunk',
    adv2: 'Get Married',
    adv3: 'Get a Job',
    adv4: 'Probably call your mom',
    adv5: 'Question all your life decisions',
    adv6: 'DEFINATELY play the lotto',
    adv7: 'leave me alone please im tired.',
    adv8: 'go to the doctor for a checkup',
    adv9: 'go get some sunlight you pale af',
    adv10: 'go somewhere exotic'
}

let array = [];

array.push(advice);

for (let i = 0; i < array.length; i++) {
    let randomAdvice = Math.floor(Math.random() * 10) + 1;
}
