// function 

function displayType(character) {
    var charactertype = character.getAttribute("data-character-type");
    alert(charactertype + " is the protagonist of " + character.innerHTML + " universe!");
}