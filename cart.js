const carId = localStorage.getItem('carId');
console.log(carId);


const addToCart = (addedItem)=>{
    const image = document.getElementById('added-item-img');
    image.src = addedItem.image;


}


const getAddedItem = async()=>{
    const response = await fetch("https://64e32e20bac46e480e7855dd.mockapi.io/car/" + carId);
    const addedItem = await response.json();

    console.log(addedItem);
    addToCart(addedItem);
}

getAddedItem();