/*
Изменили цвет
document.getElementsByClassName("main-title")[0]
    .style.color = "red";
*/

<!--Обработка исключения по клику-->
document.getElementById("main-action-button")
    .onclick = function () {
    document.getElementById("products")
        .scrollIntoView({behavior: "smooth"});
}

<!-- -->
let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link"))
            .scrollIntoView({behavior: "smooth"});
    }
}

<!-- -->
let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

<!--Обработка события по нажатию на кнопку -->
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
//создаём функцию для клика по кнопке
document.getElementById("order-action").onclick = function () {
    let hasError = false;
    //когда кликаем по кнопке, проверяем каждое поле и сверяем есть ли там значение
    //если поле пусто, подсвечиваем красным
    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });
    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        })
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}

<!--Изменение курсов валют-->
let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 90;
    } else if (currentCurrency === "₽"){
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}



















