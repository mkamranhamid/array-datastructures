console.log("Lets get started");

var arr = [];
var main = {
    '0': [],
    '1': []
};
var config = {
    '0': 'box-container',
    '1': 'box-container1'
}
var statsConfig = {
    '0': {
        'arrayLength': 'arrayLength',
        'isArrayEmpty': 'isArrayEmpty',
        'isSorted': 'isSorted'
    },
    '1': {
        'arrayLength': 'arrayLength1',
        'isArrayEmpty': 'isArrayEmpty1',
        'isSorted': 'isSorted1'
    }
}
// arrayInit();

function arrayInit(arr, box, indx) {
    let arrayLength = document.getElementById(statsConfig[indx].arrayLength);
    let isArrayEmpty = document.getElementById(statsConfig[indx].isArrayEmpty);
    let isSorted = document.getElementById(statsConfig[indx].isSorted);
    arrayLength.innerText = arr.length;
    isArrayEmpty.innerText = isEmpty(arr);
    isSorted.innerText = findOrder(arr);
    createBoxes(arr, box)
}

function insertIntoArray(indx) {
    console.log("insertIntoArray");
    main[indx].push(main[indx].length);
    arrayInit(main[indx], config[indx], indx);
}

function updateArray(indx, updater, replacer) {
    let indexVal = document.getElementById(updater).value;
    let replacerVal = document.getElementById(replacer).value;
    if (parseInt(indexVal) > (main[indx].length - 1)) {
        alert('Out of range!!')
        return;
    }
    main[indx][indexVal] = parseInt(replacerVal);
    arrayInit(main[indx], config[indx], indx);
}

function deleteFromArray(indx, deletionIndx) {
    console.log("deleteIntoArray");
    let indexVal = document.getElementById(deletionIndx).value;
    if (parseInt(indexVal) > (main[indx].length - 1)) {
        alert('Out of range!!')
        return;
    }
    main[indx].splice(indexVal, 1);
    arrayInit(main[indx], config[indx], indx);
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
    arrayInit(main[indx], config[indx], indx);
}

function mergeArray() {
    if (main[0].length == 0 || main[1].length == 0) {
        alert('Both array must have index greater than 1');
        return
    }
    let confirmation = confirm('This action is unrevertable. Are you sure you want to do this ?');
    if (!confirmation) return;
    main[0] = main[0].concat(main[1]);
    arrayInit(main[0], config[0], indx);
    main[1] = [];
    arrayInit(main[1], config[1], indx);
}

function findOrder(array) {
    var asc = true;
    var desc = true;
    if (array.length < 2) {
        return 'array is too small'
    }
    for (var i = 1, len = array.length; i < len; i++) {
        //if current element is bigger than previous array is not descending
        if (array[i] > array[i - 1]) {
            desc = false;
            //if current element is smaller than previous array is not ascending
        } else if (array[i] < array[i - 1]) {
            asc = false;
        }

        if (!asc && !desc) {
            return '0'
        }
    }

    if (asc && desc) {
        return 'array values are equal'
    } else if (asc) {
        return '1'
    } else {
        return '2'
    }
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