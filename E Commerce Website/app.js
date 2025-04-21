//  Main Work
let items = [
    {
        name: 'Down Shoulder T-Shirt',
        brand: "Nike",
        color: 'Black',
        price: 20,
        imgSrc: "https://static-01.daraz.com.bd/p/0f661b9118c053c4bd23a2c803c330b9.jpg",
        isTShirt: true
    },
    {
        name: 'Watch',
        brand: "Rolex",
        color: 'Silver & Golden',
        price: 250,
        imgSrc: "https://watchclubpakistan.pk/cdn/shop/files/rn-image_picker_lib_temp_56edbdd8-5562-486c-a906-c5528adb838a.jpg?v=1735117788&width=533",
        iswatch: true
    },
    {
        name: 'Sneakers',
        brand: "Addidas",
        color: 'White & Black',
        price: 50,
        imgSrc: "https://runnerz.pk/cdn/shop/files/IMG_5794copy_03cbee0e-610e-4104-af49-4420fcb3716e_535x.jpg?v=1725470917",
        isShoes: true
    },
    {
        name: 'Cargo Pant',
        brand: "Ocutpus",
        color: 'black',
        price: 60,
        imgSrc: "https://img.drz.lazcdn.com/static/pk/p/a88108ef240f9bad04df0e4b12b2f362.jpg_960x960q80.jpg_.webp",
        isImported: true
    },
    {
        name: 'Stylish Loafer',
        brand: "Borjan",
        color: 'Black & Brown',
        price: 30,
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTwlJR3wL0A7xK-y7hhS3WgUt4u4bTK-V6w&s",
        isShoes: true
    },
    {
        name: 'Fancy 3 Piece Suit',
        brand: "VX",
        color: 'Navy Blue',
        price: 100,
        imgSrc: "https://m.media-amazon.com/images/I/710tSXdE2bL._AC_UY1100_.jpg",
        isImported: true
    },
    {
        name: 'Gymer T-Shirt',
        brand: "GYMISH",
        color: 'Grey',
        price: 10,
        imgSrc: "https://gymish.com/cdn/shop/files/076._Gymish_Lifestyle_Workout_T-Shirt_-_Gymish_-_-_Gym_Shirts_-_-_Workout_T-Shirts_-2331762.jpg?v=1723399119&width=1946",
        isTShirt: true
    },
    {
        name: 'Cap',
        brand: "Nike",
        color: 'white',
        price: 15,
        imgSrc: "https://m.media-amazon.com/images/I/31LrvfpjRaS._SL500_.jpg",
        isImported: true
    },
    {
        name: 'Shoes',
        brand: "Sports",
        color: 'Red, Blue & White',
        price: 80,
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwVVRLuoCQ-ZhjdtfSDd0BoRgo3HBcA765w&s",
        isShoes: true
    },
    {
        name: 'T-Shirt',
        brand: "Addidas",
        color: 'Black',
        price: 25,
        imgSrc: "https://m.media-amazon.com/images/I/71AapwakLzL._AC_UY1000_.jpg",
        isTShirt: true
    },
    {
        name: 'Watch',
        brand: "Poedoger",
        color: 'Silver & Golden',
        price: 370,
        imgSrc: "https://static-01.daraz.pk/p/39b2f8c5c03f999c95a61c4766889298.jpg",
        iswatch: true
    },
    {
        name: 'Joggers Shoes',
        brand: "NIke",
        color: 'Red',
        price: 50,
        imgSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
        isShoes: true
    }
];


let itemsListing = document.querySelector(".resultEl");


// in HTML 

function listItemss(itmes) {
    for (let i = 0; i < itmes.length; i++) {
        let itemCard = makeCarCard(itmes[i]);
        itemsListing.innerHTML += itemCard;
    }
}

// in HTML 
function makeCarCard(items) { 
    return `<div style="border: 1px solid #ccc; padding: 10px; margin: 10px; width: 300px;" class="carCard">
    <h2>${items.name} </h2> <p><b> Brand:</b> (${items.brand})</p>
    <img src="${items.imgSrc}" alt="${items.name}" style="width: 90%; height: 250px; object-fit: cover;" class="imgset" />
                <p><b>Color:</b> ${items.color}</p>
                <p><b>Price:</b> $${items.price}</p>
            </div>`;
}



// Filter Work / Logic

function filterCars(el) {
    let filterHoiwiItmes = [];
    // Shoes
    for (let i = 0; i < items.length; i++) {
        if (el.value === 'Shoes' && items[i].isShoes) {
            filterHoiwiItmes.push(items[i]);
        } 
    // T-Shirt
    if (el.value === 'T-Shirt' && items[i].isTShirt) {
        filterHoiwiItmes.push(items[i]);
    }
    // Watch
    if (el.value === 'watch' && items[i].iswatch) {
        filterHoiwiItmes.push(items[i]);
    }
}
    // All Items show
    if(el.value === 'All') {
        filterHoiwiItmes = items.slice(0);
    }

    itemsListing.innerHTML = "";
    listItemss(filterHoiwiItmes);
}
// by default show
listItemss(items);

