//Variables
const inf = document.querySelector(`#information`);
const withoutResults = document.querySelector(`#without-results`);
const brand = document.querySelector(`#brand`);
const year = document.querySelector(`#year`);
const price_min = document.querySelector(`#price-min`);
const price_max = document.querySelector(`#price-max`);
const searchCar = {
    brand: "",
    model: "",
    year:  "",
    price_min: "",
    price_max: "",
    image: "",
}




//AddEventListeners
document.addEventListener(`DOMContentLoaded`, () => {
    showCars(cars);
} );

brand.addEventListener(`input`, e => {
    searchCar.brand = e.target.value;
    
    filterFunction();
} );

year.addEventListener(`input`, e => {
    searchCar.year = e.target.value;
    
    filterFunction();
} );

price_min.addEventListener(`input`, e => {
    searchCar.price_min = e.target.value;

    filterFunction();
} );

price_max.addEventListener(`input`, e => {
    searchCar.price_max = e.target.value;

    filterFunction();
} );


//Higher-Order Filtering Function
function filterFunction(){
    cleanInformation();   

    const newArray = cars.filter( filterBrand ).filter( filterYear ).filter( filterPriceMin ).filter( filterPriceMax );

    console.log(newArray);
    
    return newArray.length ? showCars(newArray) : noCars();
}


//Functions
function filterBrand(car){
    return searchCar.brand ? car.brand === searchCar.brand : car;    
}
function filterYear(car){
    return searchCar.year ? parseInt(car.year) === parseInt(searchCar.year) : car;
}
function filterPriceMin(car){
    return searchCar.price_min ? car.price >= searchCar.price_min : car;
}
function filterPriceMax(car){
    return searchCar.price_max ? car.price <= searchCar.price_max : car;
}

/* Building cards from a cars array */
function showCars(arrayCars){
    arrayCars.forEach( car => {
        const div = document.createElement(`div`);
        // const div2 = document.createElement(`div`);
        // const div3 = document.createElement(`div`);
        div.classList.add(`col`);
        // div2.classList.add(`card`);
        // div3.classList.add(`card-body`);
        div.innerHTML = `
        <div class="card h-100">
        <img src="${car.image}" class="card-img-top" alt="${car.brand}">
        <div class="card-body">
          <h5 class="card-title">${car.brand}</h5>
          <p class="card-text my-0">Model: ${car.model}</p>
          <p class="card-text my-0">Year: ${car.year}</p>
          <p class="card-text">Price: $<span>${car.price}<span></p>
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
function noCars(){    
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