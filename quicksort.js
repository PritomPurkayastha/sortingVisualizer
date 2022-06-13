async function quick(){
    let bar=document.querySelectorAll(".bar");
    await quickSort(bar,0,bar.length-1);
    for(let i=0; i<bar.length; i++){
        console.log(parseInt(bar[i].style.height));
    }
}
let partitionIndex=0;
async function quickSort(bar,low,high){
    await wait(delay);
    if(low<high){
        bar[partitionIndex].style.background="cyan";
        await wait(delay);
        partitionIndex = await getPartitionIndex (bar,low,high);
        bar[partitionIndex].style.background="yellow";
        await wait(delay);
        await quickSort(bar,low,partitionIndex-1);
        await wait(delay);
        await quickSort(bar,partitionIndex+1,high);
        bar[partitionIndex].style.background="cyan";
        
    }
}
async function getPartitionIndex(bar,low,high){
    let pivot=parseInt(bar[high].style.height);
    bar[high].style.background="violet"
    let i=low-1;
    for(let j=low; j<high; j++){
        bar[j].style.background="red"
        bar[high].style.background="red"
        if(parseInt(bar[j].style.height)<pivot){
            i++;
            bar[i].style.background="red"
            await wait(delay);
            swap(bar[i],bar[j]);
            bar[i].style.background="cyan"
        }
        bar[j].style.background="cyan"
        bar[high].style.background="violet"
    }
    let partitionIndex=i+1;
    await wait(delay);
    swap(bar[partitionIndex],bar[high]);
    return partitionIndex;
}



const quicksort=document.getElementById('quick');
quicksort.addEventListener('click', async ()=>{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableTimeSlider();
    await quick();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableTimeSlider();
})