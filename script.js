let products = [
    {
        img: "./images/shaxmat.svg",
        companyImg: "./images/organic.svg",
        companyName: "Органик",
        name: "Молоко 3,2%",
        aftor: "От Вадима Рошки",
        aftor2: "5000 гр",
        price: "95 ₽"
    },
    {
        img: "./images/obed1.png",
        companyImg: "./images/rab.svg",
        companyName: "Создано «Рядом»",
        name: "Хлеб пшеничный",
        aftor: "От Пушкина",
        aftor2: "1000 гр",
        price: "95 ₽"
    },
    {
        img: "./images/obed2.png",
        companyImg: "./images/fermer.svg",
        companyName: "Фермер",
        name: "Яйца куриные",
        aftor: "От Евгения Рошаль",
        aftor2: "500 гр",
        price: "120 ₽"
    },
    {
        img: "./images/obed3.png",
        companyImg: "./images/thund.svg",
        companyName: "Доставим за 15 минут",
        name: "Масло сливочное 82%",
        aftor: "От Евгений Онегина",
        aftor2: "2300 гр",
        price: "290 ₽"
    }
]
let place = document.querySelector('.products')

function product() {
    for(item of products){
        place.innerHTML = `
        <div class="tovar">
            <div class="tovar-img">
                <img src="${item.img}" alt="" class="all">
                <img src="./images/like.svg" alt="" class="like">
            </div>
            <div class="tovar-info">
                <div class="ots">
                    <div class="info">
                        <div class="info2">
                            <div class="logo">
                                <img src="${item.companyImg}" alt="" class="logo">
                                <h2 class="name-logo">${item.companyName}</h2>
                            </div>
                            <div class="text1">
                                <img src="./images/coments.svg" alt="" class="com">
                                <h2 class="comm">124</h2>
                                <img src="./images/star.svg" alt="" class="star">
                                <h2 class="starr">4.77</h2>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <h2 class="main">${item.name}</h2>
                        <h5 class="aftor">${item.aftor}</h5>
                        <h5 class="aftor2">${item.aftor2}</h5>
                        <h3 class="price">${item.price}</h3>
                        <img src="./images/jacket.svg" alt="" class="jacket">
                    </div>
                </div>
            </div>
        </div>    
        `
    }
}
product(products)