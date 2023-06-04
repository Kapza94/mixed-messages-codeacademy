const randomNum = () => {
    let x = Math.floor(Math.random() * 100)
    return x;
}

console.log('Monthly Lucky number: ' + randomNum());

let advice = [
    {
        advice: 'Get drunk'
    },

    {
        advice: 'Get Married'
    },

    {
        advice: 'Get a Job'
    },

    {
        advice: 'Probably call your mom'
    },

    {
        advice: 'Question all your life decisions'
    },

    {
        advice: 'DEFINATELY play the lotto'
    },

    {
        advice: 'leave me alone please im tired.'
    },

    {
        advice: 'go to the doctor for a checkup'
    },

    {
        advice: 'go get some sunlight you pale af'
    },

    {
        advice: 'go somewhere exotic'
    },
]

const getRandomIndex = (arr) => {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex].advice

    return item
}

const result = getRandomIndex(advice)
console.log('You definately should: ' + result)


let wordsArray = [
    {
        word: 'ciggarettes'
    },
    {
        word: 'coffee'
    },
    {
        word: 'negative people'
    },
    {
        word: 'heights'
    }
];

const getRandomIndex1 = (arr) => {

    const randomIndex1 = Math.floor(Math.random() * arr.length);

    const item1 = arr[randomIndex1].word

    return item1
}

const result1 = getRandomIndex1(wordsArray)
console.log('You should stay away from: ' + result1)

