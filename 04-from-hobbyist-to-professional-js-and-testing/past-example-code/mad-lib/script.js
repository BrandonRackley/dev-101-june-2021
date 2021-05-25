function fillInBlanks() {
    const nounInput = document.getElementById('nounInput');
    const nounOutput = nounInput.value;
    const noun = document.getElementById('noun');
    noun.textContent = nounOutput;

    const adjInput = document.getElementById('adjInput');
    const adjOutput = adjInput.value;
    const adj = document.getElementById('adj');
    adj.textContent = adjOutput;

    const adj2Input = document.getElementById('adj2Input');
    const adj2Output = adj2Input.value;
    const adj2 = document.getElementById('adj2');
    adj2.textContent = adj2Output;

    const pluralNoun = document.getElementById('pluralNoun');
    const pluralNounInput = document.getElementById('pluralNounInput');
    const pluralNounOutput = pluralNounInput.value;
    pluralNoun.textContent = pluralNounOutput;

    const verb = document.getElementById('verb');
    const verbInput = document.getElementById('verbInput');
    const verbOutput = verbInput.value;
    verb.textContent = verbOutput;

    const adj3Input = document.getElementById('adj3Input');
    const adj3Output = adj3Input.value;
    const adj3 = document.getElementById('adj3');
    adj3.textContent = adj3Output;
    
    const adj4Input = document.getElementById('adj4Input');
    const adj4Output = adj4Input.value;
    const adj4 = document.getElementById('adj4');
    adj4.textContent = adj4Output;

    const nameInput = document.getElementById('nameInput');
    const name = document.getElementById('name');
    const nameOutput = nameInput.value;
    name.textContent = nameOutput;

    const noun2Input = document.getElementById('noun2Input');
    const noun2 = document.getElementById('noun2');
    const noun2Output = noun2Input.value;
    noun2.textContent = noun2Output;

    const noun3Input = document.getElementById('noun3Input');
    const noun3 = document.getElementById('noun3');
    const noun3Output = noun3Input.value;
    noun3.textContent = noun3Output;

    const noun4Input = document.getElementById('noun4Input');
    const noun4 = document.getElementById('noun4');
    const noun4Output = noun4Input.value;
    noun4.textContent = noun4Output;

    const noun5Input = document.getElementById('noun5Input');
    const noun5 = document.getElementById('noun5');
    const noun5Output = noun5Input.value;
    noun5.textContent = noun5Output;

    const adj5Input = document.getElementById('adj5Input');
    const adj5Output = adj5Input.value;
    const adj5 = document.getElementById('adj5');
    adj5.textContent = adj5Output;

    const verb2 = document.getElementById('verb2');
    const verb2Input = document.getElementById('verb2Input');
    const verb2Output = verb2Input.value;
    verb2.textContent = verb2Output;

    const adj6Input = document.getElementById('adj6Input');
    const adj6Output = adj6Input.value;
    const adj6 = document.getElementById('adj6');
    adj6.textContent = adj6Output;

    const adj7Input = document.getElementById('adj7Input');
    const adj7Output = adj7Input.value;
    const adj7 = document.getElementById('adj7');
    adj7.textContent = adj7Output;

    const locationInput = document.getElementById('locationInput');
    const locationOutput = locationInput.value;
    const location = document.getElementById('location');
    location.textContent = locationOutput;

    const noun2a = document.getElementById('noun2a');
    noun2a.textContent = noun2Output;

    const noun3a = document.getElementById('noun3a');
    noun3a.textContent = noun3Output;

    const nameA = document.getElementById('nameA');
    nameA.textContent = nameOutput;

    const noun2b = document.getElementById('noun2b');
    noun2b.textContent = noun2Output;

    const noun3b = document.getElementById('noun3b');
    noun3b.textContent = noun3Output;

    const nameB = document.getElementById('nameB');
    nameB.textContent = nameOutput;

    document.getElementById("five").style.visibility = "visible";
    
    document.getElementById("article").style.visibility = "hidden";

    document.getElementById("header").style.visibility = "hidden";
    
    document.getElementById("songResults").style.visibility = "visible";
};

const button = document.getElementById('button');
button.addEventListener('click', fillInBlanks);
