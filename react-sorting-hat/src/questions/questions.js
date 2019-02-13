
export default function questions() {
    return (
        [
            {
                question: 'Dawn or Dusk?',
                answers: [
                    {
                        answer: 'Dawn',
                        result: 'gr',
                    },
                    {
                        answer: 'Dusk',
                        result: 'hs',
                    }
                ]  
            },
            {
                question: 'Four boxes are placed before you. Which would you try and open?',
                answers: [
                    {
                        answer:'The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.',
                        result: 'hh'
                    },
                    {
                        answer:'The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.',
                        result: 'ss'
                    },
                    {
                        answer:'The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.',
                        result:'rr'
                    },
                    {
                        answer:"The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the worthy.’",
                        result:'gg'
                    }
                ]
            },
            {
                question: 'You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:',
                answers: [
                    {
                        answer:'Attempt to confuse the troll into letting all three of you pass without fighting?',
                        result: 'rr'
                    },
                    {
                        answer:'Suggest drawing lots to decide which of you will fight?',
                        result: 'hh'
                    },
                    {
                        answer:'Suggest that all three of you should fight (without telling the troll)?',
                        result:'ss'
                    },
                    {
                        answer:"Volunteer to fight?",
                        result:'gg'
                    }
                ]
            },
        ]
    )
} 