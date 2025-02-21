const attributes = {
    physical: { name: "Physical", value: 1, max: 5 },
    mental: { name: "Mental", value: 1, max: 5 },
    supernatural: { name: "Supernatural", value: 1, max: 5 }
};

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
