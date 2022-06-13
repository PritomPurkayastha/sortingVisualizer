async function bubble(){
    let bar=document.querySelectorAll(".bar");
    for(let i=0; i<bar.length-1; i++){
        for(let j=0; j<bar.length-1-i; j++){
            bar[j].style.background="red";
            bar[j+1].style.background="red";

            if(parseInt(bar[j].style.height)> parseInt(bar[j+1].style.height)){
                await wait(delay);
                swap(bar[j], bar[j+1]);
            }
            bar[j].style.background="cyan";
            bar[j+1].style.background="cyan";
        }
        bar[bar.length-1-i].style.background="green";
    }
    bar[0].style.background="green";
}

const bubbleSort=document.getElementById('bubble');
bubbleSort.addEventListener('click', async ()=>{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableTimeSlider();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableTimeSlider();
})