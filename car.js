
const carId = localStorage.getItem('carId');
console.log(carId);


const addCarToScreen = (car)=>{

    const image = document.getElementById('car-image');
    image.src = car.image;

    const name = document.getElementById('car-name');
    name.innerHTML = car.name;

    const brand = document.getElementById('car-brand');
    brand.innerHTML = `brand: ${car.brand}`;

    const model = document.getElementById('car-model');
    model.innerHTML = `model: ${car.model}`;

    const year = document.getElementById('car-year');
    year.innerHTML = `year: ${car.year}`;

    const price = document.getElementById('car-price');
    price.innerHTML = `price: ${car.price}`;

    const color = document.getElementById('car-color');
    color.innerHTML = `color: ${car.color}`;

    const engine = document.getElementById('car-engine');
    engine.innerHTML = `engine: ${car.engine}`;

    const transmission = document.getElementById('car-transmission');
    transmission.innerHTML = `transmission: ${car.transmission}`;

    const mileage = document.getElementById('car-mileage');
    mileage.innerHTML = `mileage: ${car.mileage}`;

    const features = document.getElementById('car-features');
    features.innerHTML = `features: ${car.features}`;




}





const getCar = async()=>{
    const response = await fetch("https://64e32e20bac46e480e7855dd.mockapi.io/car/" + carId);
    const car = await response.json();

    console.log(car);
    addCarToScreen(car);

};

getCar();