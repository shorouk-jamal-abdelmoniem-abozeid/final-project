const offers = document.querySelector('.offers-items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
function slide(to) {
    const total = offers.children.length;
    index = (index + to + total) % total;
    offers.style.transform = `translateX(-${index * 100}%)`;
}
next.onclick = () => slide(1);
prev.onclick = () => slide(-1);
setInterval(() => slide(1), 2000);


let BtnClose = document.getElementById("close");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let BoxContainer = document.getElementById("boxContainer");
let boxItem = document.getElementById("boxItem");
let images = document.querySelectorAll(".img-gallery img");

let imagesArr = [];
for (let i = 0; i < images.length; i++) {
    imagesArr.push(images[i]);
}
let currentIndex = 0;

function showImage(index) {
    boxItem.style.backgroundImage = `url(${imagesArr[index].src})`;
}

for (let j = 0; j < imagesArr.length; j++) {
    (function (j) {
        imagesArr[j].addEventListener("click", function () {
            BoxContainer.style.display = "flex";
            currentIndex = j;
            showImage(currentIndex);
        });
    })(j);
}

BtnClose.addEventListener("click", function () {
    BoxContainer.style.display = "none";
});

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex === imagesArr.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesArr.length - 1;
    }
    showImage(currentIndex);
});

BoxContainer.addEventListener("click", function (event) {
    if (event.target === BoxContainer) {
        BoxContainer.style.display = "none";
    }
});






let menuItems = [
    {
        name: "LASAL CHEESE",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food1.png"
    },
    {
        name: "JUMBO CRAB SHRIMP",
        price: "$24.00",

        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food2.png"
    },
    {
        name: "KOKTAIL JUICE",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food3.png"
    },
    {
        name: "CAPO STEAK",
        price: "$60.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food4.png"
    },
    {
        name: "ORGANIC FRUIT SALAD",
        price: "$8.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food5.png"
    },
    {


        name: "CHEESE PIZZA",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food6.png"
    },
    {
        name: "KOFTA MEAT",
        price: "$40.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food7.jpeg"
    },
    {
        name: "SPANISH PIES",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food8.jpeg"
    },
    {
        name: "CHEESE TOST",
        price: "$6.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food9.jpeg"


    },
    {
        name: "FRUIT SALAD",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food10.jpeg"
    },
    {
        name: "CHICKEN SHAWARMA",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food11.jpeg"
    },
    {
        name: "MEGA CHEESE PIZZA",
        price: "$30.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
        image: "./images/food12.jpeg"
    }
]


let left = document.getElementById("menu-items-left");
for (i = 0; i < 6; i++) {
    left.innerHTML += (`
<div class="menu-item">
<img src="${menuItems[i].image}" alt="">
<div>
<h3>${menuItems[i].name} <span>
${menuItems[i].price}</span> </h3>
<p>${menuItems[i].description}.</p>
</div>
</div>
`)
}

let right = document.getElementById("menu-items-right");
for (i = 6; i < 12; i++) {
    right.innerHTML += (`
<div class="menu-item">
<img src="${menuItems[i].image}" alt="">
<div>
<h3>${menuItems[i].name} <span>
${menuItems[i].price}</span> </h3>
<p>${menuItems[i].description}.</p>
</div>
</div>
`)
}





let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let subjectError = document.getElementById("subject-error");
    let messageError = document.getElementById("message-error");
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    let valid = true;
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        let valid = false;

    } else if (name.length < 3 || name.length > 15) {
        nameError.textContent = "Name must be 3–15 characters.";
        let valid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        let valid = false;

    }

    if (subject !== "" && subject.length < 3) {
        subjectError.textContent = "Subject must be at least 3 characters.";
        let valid = false;

    }

    if (message !== "" && message.length < 5) {
        messageError.textContent = "Message must be at least 5 characters.";
        let valid = false;

    }
})








