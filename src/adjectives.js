import getRandomInt from './getRandomInt';

let facts = [
    "Cute",
    "Fun",
    "Unpredictable",
    "Nice",
    "Charming",
    "Dynamic",
    "Fearless",
]

const getFactsNotYetSelected = (selected) => {
    return facts.filter(function (fact) {
        if (selected.indexOf(fact) === -1)
            return true
        else
            return false
    })
}

const getRandomSelectedFact = (factsNotYetSelected) => {
 return factsNotYetSelected[getRandomInt(0, factsNotYetSelected.length)]
}

const initialisedFacts = (initialFacts) => {
    console.log(initialFacts)
    facts = initialFacts
}

export { getFactsNotYetSelected, getRandomSelectedFact, initialisedFacts }
