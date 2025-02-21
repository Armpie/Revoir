const attributes = {
    physical: { name: "Physical", value: 1, max: 5 },
    mental: { name: "Mental", value: 1, max: 5 },
    supernatural: { name: "Supernatural", value: 1, max: 5 }
};

const skills = {
    physical: {
        grit: 0, fisticuffs: 0, marksmanship: 0, shadowstep: 0, dexterity: 0, hustle: 0
    },
    mental: {
        deduction: 0, sharpeye: 0, gutinstinct: 0, silvertongue: 0, ironwill: 0, presence: 0
    },
    supernatural: {
        sixthsense: 0, forbiddenlore: 0, seance: 0, mindsgrasp: 0, veilsight: 0, manifestation: 0
    }
};

function displaySkills(){
    for(let skillCategory in skills){
        for(let skill in skills[skillCategory]){
            document.getElementById(skill + "Value").textContent = skills[skillCategory][skill];
        }
    }
}

function generateAttributes() {
    for (let attribute in attributes) {
        attributes[attribute].value = getRandomInt(1, attributes[attribute].max); // Randomize
    }
    //Add specialization logic here.
    displayAttributes();
}

function displayAttributes(){
    for (let attribute in attributes){
        document.getElementById(attribute + "Value").textContent = attributes[attribute].value;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("generateButton").addEventListener("click", function(){
    generateAttributes();
});
