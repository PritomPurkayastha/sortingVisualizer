async function insertion(){
    let bar=document.querySelectorAll(".bar");
    for(let i = 0; i < bar.length-1; i++){
       for(let j=i+1; j>0; j--){
            if(parseInt(bar[j].style.height) < parseInt(bar[j-1].style.height)){
                bar[j].style.background="red";
                bar[j-1].style.background="red";
                await wait(delay);
                swap(bar[j], bar[j-1])
                bar[j].style.background="cyan";
                bar[j-1].style.background="cyan";
            }
            else{
                await wait(delay);
                bar[j].style.background="green";
                bar[j-1].style.background="green";
                break;
            }
            await wait(delay);
            bar[j].style.background="green";
            bar[j-1].style.background="green";        
       }
    }
}

const inSortbtn = document.getElementById("insertion");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    disableTimeSlider();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    enableTimeSlider();
});