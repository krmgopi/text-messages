let btnAdd = document.querySelector('button'); // selecting button send
let firstScreen = document.getElementById('firstScrn'); //selecting first screen
let msg = document.getElementById('msg'); // selecting input  
let ul = document.getElementById('ul') // which will hold list of text
let cross = document.getElementById('cross'); //selecting cross
cross.addEventListener('click', deleteTxtFromFirstScrn)

// create an empty array
let listOfText = []

//action for a send
btnAdd.onclick = function () {
    checkValidation();
}

function checkValidation() {
    if (msg.value === "") {
        alert("Message must be filled out");
        msg.focus();
        return false;
    } else {
        // console.log(msg.value);
        addTextToScreenTwo(msg.value); //we pass the value to this function.

        // here firstScreen is a "p" element, so we are setting innerText to the "p". 
        // Note: we cannot use firstScreen.value, because it is not an input.
        firstScreen.innerHTML = msg.value
        // msg is an "input" element so we use msg.value to clear the field
        msg.value = ""
    }
};

function addTextToScreenTwo(newText) { //this function receives a one parameter and we can name as per our wish
    // first push the text to the array
    listOfText.push(newText)
    
    // display in the "ul"
    let li = document.createElement("li"); 
    li.appendChild(document.createTextNode(listOfText.at(-1))); //add the latest text to "ul" 
    ul.appendChild(li);
}

//action for delete an element
function deleteTxtFromFirstScrn(){
    console.log("clicked...");   
    firstScreen.innerHTML = ""
}