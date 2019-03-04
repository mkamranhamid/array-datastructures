console.log("Lets get started");

var arr = [];
arrayInit();

function arrayInit() {
    let arrayLength = document.getElementById('arrayLength');
    let isArrayEmpty = document.getElementById('isArrayEmpty');
    arrayLength.innerText = arr.length;
    isArrayEmpty.innerText = isEmpty(arr);
    createBoxes(arr)
}

function insertIntoArray() {
    console.log("insertIntoArray");
    arr.push(arr.length);
    arrayInit();
}

function updateArray() {
    let indexVal = document.getElementById('index-upd').value;
    let replacerVal = document.getElementById('replace').value;
    if (parseInt(indexVal) > (arr.length - 1)) {
        alert('Out of range!!')
        return;
    }
    arr[indexVal] = parseInt(replacerVal);
    arrayInit();
}

function deleteFromArray() {
    console.log("deleteIntoArray");
    let indexVal = document.getElementById('index-dlt').value;
    if (parseInt(indexVal) > (arr.length - 1)) {
        alert('Out of range!!')
        return;
    }
    arr.splice(indexVal, 1);
    arrayInit();
}

function searchInArray() {
    console.log("deleteIntoArray");
    let indexVal = document.getElementById('srch').value;
    let indexOfBox = arr.indexOf(parseInt(indexVal));
    if (indexOfBox == -1) {
        alert("Can't find the searched key!!");
        return;
    }
    let boxes = document.getElementById('box-container').children;
    removeClassIfExist(boxes);

    let targetBox = boxes[indexOfBox];
    targetBox.classList.add('search-border');
}

function removeClassIfExist(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('search-border');
    }
}

function isEmpty(arr) {
    return arr.length > 0 ? false : true;
}

function createBoxes(arr) {
    let boxContainer = document.getElementById('box-container');
    let boxes = arr.map((d) => {
        let box = `<div class="box"><div>${d}</div></div>`;
        return box;
    })
    boxes = boxes.join("");
    boxContainer.innerHTML = boxes;
}

function showToggler(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function createArray() {
    
}

function createArray() {

}


/* **Schema** */
/* 
    {
        arrs:[arr1,arr2,arr3,...];   //arr1=[1,2,3,4]
    }
*/

/* **Merge{arr1,arr2}** */
/* 
    {
        arrs:[arr1,arr3,...];
    }
*/