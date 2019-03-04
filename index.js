console.log("Lets get started");

var arr = [];
var main = [];
var config = {
    '0': 'box-container',
    '1': 'box-container1'
}
// arrayInit();

function arrayInit(arr, box) {
    let arrayLength = document.getElementById('arrayLength');
    let isArrayEmpty = document.getElementById('isArrayEmpty');
    arrayLength.innerText = arr.length;
    isArrayEmpty.innerText = isEmpty(arr);
    createBoxes(arr, box)
}

function insertIntoArray(indx) {
    console.log("insertIntoArray");
    main[indx].push(main[indx].length);
    arrayInit(main[indx], config[indx]);
}

function updateArray(indx, updater, replacer) {
    let indexVal = document.getElementById(updater).value;
    let replacerVal = document.getElementById(replacer).value;
    if (parseInt(indexVal) > (main[indx].length - 1)) {
        alert('Out of range!!')
        return;
    }
    main[indx][indexVal] = parseInt(replacerVal);
    arrayInit(main[indx], config[indx]);
}

function deleteFromArray(indx, deletionIndx) {
    console.log("deleteIntoArray");
    let indexVal = document.getElementById(deletionIndx).value;
    if (parseInt(indexVal) > (main[indx].length - 1)) {
        alert('Out of range!!')
        return;
    }
    main[indx].splice(indexVal, 1);
    arrayInit(main[indx], config[indx]);
}

function searchInArray(indx, toSrch) {
    console.log("deleteIntoArray");
    let indexVal = document.getElementById(toSrch).value;
    let indexOfBox = main[indx].indexOf(parseInt(indexVal));
    if (indexOfBox == -1) {
        alert("Can't find the searched key!!");
        return;
    }
    let boxes = document.getElementById(config[indx]).children;
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

function createBoxes(arr, box) {
    let boxContainer = document.getElementById(box);
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

function createArray(indx) {
    let newArray = new Array(10).fill(0).map((d, i) => {
        return i;
    });
    main[indx] = newArray;
    arrayInit(main[indx], config[indx]);
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