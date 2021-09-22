
let btnAdd = document.querySelector('button'); // selecting button send
let input = document.querySelector('input'); //selecting input

//action for a send
btnAdd.onclick = function () {
    checkValidation();
}

function checkValidation() {
    let formField = document.forms["Form1"]["message"].value;
    if (formField == "") {
        alert("Message must be filled out");
    } else {
        addTextToScreenTwo();
        addTextToScreenOne();
    }

};

function addTextToScreenTwo() {
    let text = input.value;
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
let firstScreen = document.getElementById('firstScrn');

function addTextToScreenOne() {
    // let firstScreen = document.getElementById('firstScrn');
    let text = document.createElement('li');
    let childEl = firstScreen.appendChild(text);

    setText()

};

function setText() {
    // let firstScreen = document.getElementById('firstScrn');
    let arr = createArray();
    let counter = 0;
    const putInterval = () => {
        firstScreen.innerHTML = arr[counter];
        counter = (counter + 1) % arr.length;
    }

    timeoutID = setInterval(putInterval, 1100);
};

function clearInterval() {
    clearTimeout(timeoutID);
}

// let count = setInterval(putInterval(), 1100);
let cross = document.getElementById('cross');

cross.addEventListener('click', () => {
    // clearInterval(count);
    // clearTimeout();
    console.log('it works');
})


//create ann array
function createArray() {
    let ul = document.getElementsByClassName('secondScreen');
    let arr = [];
    for (let i = 0; i < ul.length; i++) {
        arr.push(ul[i].innerHTML);
    }
    return arr;
};


//action for delete an element
