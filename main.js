
let btnAdd = document.querySelector('button'); // selecting button send
// let input = document.querySelector('input'); //selecting input
let firstScreen = document.getElementById('firstScrn');
let msg = document.getElementById('msg'); // selecting input  
let cross = document.getElementById('cross');
cross.addEventListener('click', deleteTxtFromFirstScrn)

//action for a send
btnAdd.onclick = function () {
    checkValidation();
}

function checkValidation() {
    let formField = document.forms["Form1"]["message"].value;
    if (formField == "") {
        alert("Message must be filled out");
        msg.focus()
        return false;
    } else {
        console.log(msg.value);
        addTextToScreenTwo(msg.value);
        addTextToScreenOne();
        msg.value = ""
    }

};

function addTextToScreenTwo() {
    let text = msg.value;
    console.log(text);
    let ul = document.getElementById('ul');
    let li = document.createElement("li");
    let cls = li.classList.add("secondScreen")
    li.innerHTML = text;

    if (ul.childElementCount == 0) {
        ul.insertBefore(li, ul.firstChild); // will add if count of ul children is 0 otherwise add before first item
    }
    else {
        ul.appendChild(li);  //using if/else statement to add items to top of list
    }

};


function addTextToScreenOne(inputValue) {
    setText(inputValue)
};

function setText(inputValue) {
    // let firstScreen = document.getElementById('firstScrn');
    let arr = createArray();
    // let counter = 0;
    const putInterval = () => {
        // firstScreen.innerHTML = arr[counter];
        firstScreen.innerHTML = arr.at(-1); //to set the newly added text to the first screen, we use -1 to get the last element
        console.log(`the last element is ${firstScreen.innerHTML}`);
        // counter = (counter + 1) % arr.length;
    }
    timeoutID = setInterval(putInterval, 1100);
    setTimeout(() => clearInterval(timeoutID), 2200);    
};


function clearInterval(timeoutID) {
    clearTimeout(timeoutID);
}

// let count = setInterval(putInterval(), 1100);

//create ann array
function createArray() {
    let ul = document.getElementsByClassName('secondScreen');
    let arr = [];
    for (let i = 0; i < ul.length; i++) {
        arr.push(ul[i].innerHTML);
    }
    console.log(arr)
    return arr;
};


//action for delete an element
function deleteTxtFromFirstScrn(){
    console.log("clicked...");
    firstScreen.innerHTML = ""
}