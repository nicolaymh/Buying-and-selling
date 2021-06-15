//Purchase and sale of motorcycles and car
const blink = document.querySelector(`.purchase-sale`);

setInterval( () => {
    if(blink.classList.contains(`btn-danger`)){
        blink.classList.remove(`btn-danger`);
        blink.classList.add(`btn-success`);
    }else{
        blink.classList.remove(`btn-success`);
        blink.classList.add(`btn-danger`);
    }
} , 1000 );