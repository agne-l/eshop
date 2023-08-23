const customizeCarButton = document.getElementById('customize-btn');


customizeCarButton.addEventListener('click', async()=>{
    const carName = document.getElementById('car-name').value;
    const carBrand = document.getElementById('car-brand').value;
    const carModel = document.getElementById('car-model').value;
    const carYear = document.getElementById('car-year').value;
    const carPrice = document.getElementById('car-price').value;
    const carColor = document.getElementById('car-color').value;
    const carEngine = document.getElementById('car-engine').value;
    const carTransmission = document.getElementById('car-transmission').value;
    const carMileage = document.getElementById('car-mileage').value;
    const carFeatures = document.getElementById('car-features').value;
    const carImage = document.getElementById('car-image').value;


    const customizedCar = {
        name: carName,
        brand: carBrand,
        model: carModel,
        year: carYear,
        price: carPrice,
        color: carColor,
        engine: carEngine,
        transmission: carTransmission,
        mileage: carMileage,
        features: carFeatures,
        image: carImage
    };

    // console.log(customizedCar);

    try{


        const response = await fetch('https://64e32e20bac46e480e7855dd.mockapi.io/car', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customizedCar)
        })

        const formattedData = await response.json();

        // console.log(formattedData);


        if(formattedData){

            const messageWrapper = document.getElementById('message-wrapper');
            messageWrapper.innerHTML = 'Congratulations, the car has been customized!'



            setTimeout(()=>{
                window.location.replace("./index.html");

            }, 3000)
        }

    }catch(err){
        console.log(err);
        const messageWrapper = document.getElementById('message-wrapper');
        messageWrapper.innerHTML = "Sorry, the car cannot be customized."
    }




});