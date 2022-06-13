let array = [];

let arraySize = document.querySelector('#arr_sz');
arraySize.addEventListener('input', () => {
    createNewArray(parseInt(arraySize.value));
})

window.onload=function(){
    createNewArray(parseInt(arraySize.value));
}

function createNewArray(noOfBars) {
    deletePreviousArray();
  
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        let random=randomElement(25,400);
        array.push(random);
    }
    // console.log(array);
  
    const bars = document.querySelector("#bars");

    for(let i=0; i<noOfBars; i++){
        const bar = document.createElement("div");
        let height=array[i]+"px";
        bar.style.height = height;
        bar.style.width = "70px";
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        let value=array[i].toString();
        bar.innerText=value;
        bars.appendChild(bar);
    }
  }
function deletePreviousArray() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';

}
function randomElement(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function () {
    console.log(delayElement.value, typeof (delayElement.value));
    delay = 320 - parseInt(delayElement.value);

});

function wait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

function swap(bar1, bar2){
    let temp=bar1.style.height;
    let a=bar1.innerText;
    bar1.innerText=bar2.innerText;
    bar1.style.height=bar2.style.height;
    bar2.innerText=a;
    bar2.style.height=temp;
}

function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    // document.querySelector(".mergeSort").disabled = true;
    // document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    // document.querySelector(".mergeSort").disabled = false;
    // document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}
function disableNewArrayBtn(){
    document.querySelector("#new-array").disabled=true;
}
function enableNewArrayBtn(){
    document.querySelector("#new-array").disabled=false;
}
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled=true;
}
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled=false;
}
function disableTimeSlider(){
    document.querySelector("#speed_input").disabled=true;
}
function enableTimeSlider(){
    document.querySelector("#speed_input").disabled=false;
}