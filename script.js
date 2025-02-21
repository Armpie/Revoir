const attributes = {
    physical: { name: "Physical", value: 1, max: 5 },
    mental: { name: "Mental", value: 1, max: 5 },
    supernatural: { name: "Supernatural", value: 1, max: 5 }
};

function generateAttributes(){
    for (let attribute in attributes){
        attributes[attribute].value = 1; //sets all to one.
    }
    //add logic here to handle specialization.
    //add logic here to handle manual attribute increases.
    displayAttributes();
}

function displayAttributes(){
    for (let attribute in attributes){
        document.getElementById(attribute + "Value").textContent = attributes[attribute].value;
    }
}

document.getElementById("generateButton").addEventListener("click", function(){
    generateAttributes();
});
