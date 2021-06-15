//Variables
const inf = document.querySelector(`#information`);
const withoutResults = document.querySelector(`#without-results`);
const brand = document.querySelector(`#brand`);
const year = document.querySelector(`#year`);
const price_min = document.querySelector(`#price-min`);
const price_max = document.querySelector(`#price-max`);
const SearchMotorcycle = {
    brand: "",
    model: "",
    year:  "",
    price_min: "",
    price_max: "",
    image: "",
}




//AddEventListeners
document.addEventListener(`DOMContentLoaded`, () => {
    showMotorcycles(motorcycles);
} );

brand.addEventListener(`input`, e => {
    SearchMotorcycle.brand = e.target.value;
    
    filterFunction();
} );

year.addEventListener(`input`, e => {
    SearchMotorcycle.year = e.target.value;
    
    filterFunction();
} );

price_min.addEventListener(`input`, e => {
    SearchMotorcycle.price_min = e.target.value;

    filterFunction();
} );

price_max.addEventListener(`input`, e => {
    SearchMotorcycle.price_max = e.target.value;

    filterFunction();
} );


//Higher-Order Filtering Function
function filterFunction(){
    cleanInformation();   

    const newArray = motorcycles.filter( filterBrand ).filter( filterYear ).filter( filterPriceMin ).filter( filterPriceMax );

    console.log(newArray);
    
    return newArray.length ? showMotorcycles(newArray) : noMotorcycles();
}


//Functions
function filterBrand(motorcycle){
    return SearchMotorcycle.brand ? motorcycle.brand === SearchMotorcycle.brand : motorcycle;    
}
function filterYear(motorcycle){
    return SearchMotorcycle.year ? parseInt(motorcycle.year) === parseInt(SearchMotorcycle.year) : motorcycle;
}
function filterPriceMin(motorcycle){
    return SearchMotorcycle.price_min ? motorcycle.price >= SearchMotorcycle.price_min : motorcycle;
}
function filterPriceMax(motorcycle){
    return SearchMotorcycle.price_max ? motorcycle.price <= SearchMotorcycle.price_max : motorcycle;
}

/* Building motorcycleds from a Motorcycles array */
function showMotorcycles(arrayMotorcycles){
    arrayMotorcycles.forEach( motorcycle => {
        const div = document.createElement(`div`);
        // const div2 = document.createElement(`div`);
        // const div3 = document.createElement(`div`);
        div.classList.add(`col`);
        // div2.classList.add(`motorcycled`);
        // div3.classList.add(`motorcycled-body`);
        div.innerHTML = `
        <div class="card h-100">
        <img src="${motorcycle.image}" class="card-img-top" alt="${motorcycle.brand}">
        <div class="card-body">
          <h5 class="card-title">${motorcycle.brand}</h5>
          <p class="card-text my-0">Model: ${motorcycle.model}</p>
          <p class="card-text my-0">Year: ${motorcycle.year}</p>
          <p class="card-text">Price: $<span>${motorcycle.price}<span></p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalForm">
          Contact
          </button>
        </div>
        </div>
        `;
        inf.appendChild(div) 
    } )
}

/* Without information */
function noMotorcycles(){    
    const div = document.createElement(`div`);
    div.classList.add(`col-12`, `border-3`, `border-danger`, `bg-warning`);
    div.innerHTML = `
        <h2 class="text-center text-danger">
            Without Results            
        </h2>
    `;
    withoutResults.appendChild(div);    
}

/* Clean Information */
function cleanInformation(){
    while(inf.firstChild){
        inf.removeChild(inf.firstChild)
    }
    while(withoutResults.firstChild){
        withoutResults.removeChild(withoutResults.firstChild);
    }
}