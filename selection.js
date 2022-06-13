async function selection(){
    let bar=document.querySelectorAll(".bar");
    for(let i=0; i<bar.length; i++){
        console.log(parseInt(bar[i].style.height));
        let smallest=i;
        bar[smallest].style.background="blue";
        await wait(delay);
        for(let j=i+1; j<bar.length; j++){
            bar[j].style.background="blueviolet";
            await wait(delay);
            if(parseInt(bar[smallest].style.height)> parseInt(bar[j].style.height)){
                bar[smallest].style.background="cyan";
                smallest=j;
                bar[smallest].style.background="blue";
                continue;
            }
            bar[j].style.background="cyan";
        }
        await wait(delay);
        bar[i].style.background="red";
        await wait(delay);
        swap(bar[smallest],bar[i])
        bar[smallest].style.background="red";
        await wait(delay);
        bar[smallest].style.background="cyan";
        bar[i].style.background="green";
    }
}
const selectionSort=document.getElementById('selection');
selectionSort.addEventListener('click', async ()=>{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableTimeSlider();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableTimeSlider();
})