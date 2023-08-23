const carsWrapper = document.getElementById('cars');

const header = document.getElementById('header');
const cart = document.getElementById('cart');

const allClicks = [];



const getAllCars = async()=>{
    const data = await fetch("https://64e32e20bac46e480e7855dd.mockapi.io/car")
    const cars = await data.json();
    console.log(cars);

    cars.forEach((car)=>{
        console.log(car);

        const wrapper = document.createElement('a');
        wrapper.setAttribute('class', 'car-wrapper');
        // wrapper.setAttribute('href', './car.html');
        wrapper.href = './car.html';
        wrapper.addEventListener('click', ()=>{
            localStorage.setItem('carId', car.id);
        });

        const carData = document.createElement('div');
        carData.setAttribute('class', 'info-and-image-wrapper');


        const carInfo = document.createElement('div');


        const name = document.createElement('h3');
        name.innerHTML = car.name;

        const brand = document.createElement('div');
        brand.innerHTML = `brand: ${car.brand}`;

        const model = document.createElement('div');
        model.innerHTML = `model: ${car.model}`;

        const year = document.createElement('div');
        year.innerHTML = `year: ${car.year}`;

        const price = document.createElement('div');
        price.innerHTML = `price: ${car.price}`;

        const color = document.createElement('div');
        color.innerHTML = `color: ${car.color}`;

        const engine = document.createElement('div');
        engine.innerHTML = `engine: ${car.engine}`;

        const transmission = document.createElement('div');
        transmission.innerHTML = `transmission: ${car.transmission}`;

        const mileage = document.createElement('div');
        mileage.innerHTML = `mileage: ${car.mileage}`;

        const features = document.createElement('div');
        features.innerHTML = `features: ${car.features}`;

        const image = document.createElement('img');
        image.src = car.image;
        image.setAttribute('class', 'img');
        

        carInfo.append(name);
        carInfo.append(brand);
        carInfo.append(model);
        carInfo.append(year);
        carInfo.append(price);
        carInfo.append(color);
        carInfo.append(engine);
        carInfo.append(transmission);
        carInfo.append(mileage);
        carInfo.append(features);


        carData.append(carInfo);
        carData.append(image);

        const addToCartButton = document.createElement('button');
        addToCartButton.setAttribute('class', 'add-to-cart-button');
        addToCartButton.innerHTML = 'ADD TO CART';


        wrapper.append(carData);
        wrapper.append(addToCartButton);


        carsWrapper.append(wrapper);






        addToCartButton.addEventListener('click', ()=>{

            const numberOfClicks = {
            };
            allClicks.push(numberOfClicks);

            console.log(allClicks);



            const notification = document.createElement('div');
            notification.setAttribute('class', 'notification');
            notification.innerHTML = allClicks.length;
            cart.append(notification);
        })



    })
};

getAllCars();






const addCar = ()=>{

    const car = {
        name: "Opel Kapitan",
        brand: "Opel",
        model: "Kapitan P2",
        year: 1959,
        price: 14500,
        color: "Blue",
        engine: "Inline-6",
        transmission: "Manual",
        fuelType: "Gasoline",
        mileage: 45000,
        features: ["Sunroof", "Leather Seats"],
        image: "https://cdn.pixabay.com/photo/2021/12/07/10/59/car-6852996_1280.png"
    }


    fetch('https://64e32e20bac46e480e7855dd.mockapi.io/car', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(car)
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    });

};

// addCar();