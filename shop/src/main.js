async function getAllProducts() {
    return await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.log(err))
}

async function getLimitedProducts(count = 4) {
    return await fetch(`https://fakestoreapi.com/products?limit=${count}`)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.log(err))
}

const mobileMenuContainer = document.getElementById("mobile-menu")
const headerSlider = document.getElementById("header-slider")
let sliderContainer;
const root = document.getElementById("root")

let lastSlideElement;
let count = 0

let sliderInterval;

const slides = [
    {
        id: 1,
        title: "برای سوپرایز آماده شودی",
        img: "gholaam.webp",
        bg: "rgb(255, 255, 97)"

    },
    {
        id: 2,
        title: "مد برای هر زمان",
        img: "javad.webp",
        bg: "rgb(124, 218, 255)"
    },
    {
        id: 3,
        title: "مد برای هر مکان",
        img: "javad.webp",
        bg: "rgb(171, 245, 193)"
    }
]



function renderSlider(items) {
    let template = `
            <div id="slide" class=" w-full h-full  inline-block  absolute top-0 left-0">
                <img class="w-1/3 sm:w-1/5 absolute bottom-0 duration-1000 left-[-15.5rem]" src="./public/images/images/${items[count].img}" width="500" />

                <span class="absolute duration-1000 top-1/2 right-[-15.5rem] max-w-80">
                ${items[count].title}
                </span>

                <div id="dots" class="flex w-max justify-between items-center absolute bottom-6 right-8 ">
                    <div id="dot0"  class="w-1 p-1 cursor-pointer rounded-full bg-black border-4  "></div>
                    <div id="dot1"  class="w-1 p-1 cursor-pointer rounded-full bg-black border-4 "></div>
                    <div id="dot2"  class="w-1 p-1 cursor-pointer rounded-full bg-black border-4 "></div>


                
               </div>


            </div>
        `




    sliderContainer.innerHTML = template

    sliderContainer.style.backgroundColor = items[count].bg

    document.getElementById(`dot${count}`).classList.add("border-red-400")
    document.getElementById("dot0").addEventListener("click", dotClick)
    document.getElementById("dot1").addEventListener("click", dotClick)
    document.getElementById("dot2").addEventListener("click", dotClick)
    document.getElementById("slide").addEventListener("click", NextPrev)


    setTimeout(() => {
        document.querySelector("#slide > img").classList.remove("left-[-15.5rem]")
        document.querySelector("#slide > span").classList.remove("right-[-15.5rem]")


        document.querySelector("#slide > img").classList.add("left-[1.5rem]")
        document.querySelector("#slide > span").classList.add("right-[2.5rem]")
    }, 100)

}
function dotClick(evt) {
    evt.stopPropagation()
    let getId = evt.target.id
    count = Number(getId[3])
    renderSlider(slides)

    clearInterval(sliderInterval);

    sliderInterval = setInterval(() => {
        document.getElementById("slide").remove


        if (count === 2)
            count = 0
        else
            count++

        renderSlider(slides)
    }, 500000)

}

function renderProductCard({ id, price, image, title }) {

    const isLowPrice = price < 100;

    const template = `
    <a onclick="handleAClick(event, 'product/${id}')" href='product/${id}' class="w-full border rounded-xl overflow-hidden relative">
    <img class="object-contain rounded-xl w-full h-96" src="${image}" alt="">
    <div class="p-2">
        <h4>${title}</h4>
        <span>${price}$</span>
    </div>

    ${isLowPrice ? (`
            <div class="text-white absolute top-2 right-2 w-max cursor-default rounded-full bg-red-500 px-2 py-1">
                فروش ویژه
            </div>
        `) : ""}
    <div class="absolute p-2 rounded-full cursor-pointer top-2 left-2 bg-white shadow-xl hover:bg-red-500">
        <img src="./public/images/icons/icons8-basket-24.png">
    </div>
</a>
    `

    return template
}

async function renderMainPage() {
    const products = await getLimitedProducts(4)

    const template = products.map(product => {
        return renderProductCard(product)
    }).join("")

    const container = `
    <div id="slider" class="overflow-hidden duration-1000 relative h-[50vh] md:h-[70vh] w-full whitespace-nowrap">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
        ${template}
    </div>
    <div class="flex justify-center mt-10">
        <a onclick="handleAClick(event, 'all-products')" class="bg-blue-400 rounded-md px-4 py-2 text-white" href='all-products'>نمایش همه محصولات</a>
    </div>
    `

    root.innerHTML = container;

    sliderContainer = document.getElementById("slider")

    renderSlider(slides);

    sliderInterval = setInterval(() => {
        document.getElementById("slide").remove

        if (count === 2)
            count = 0
        else
            count++

        renderSlider(slides)
    }, 5000)


}

renderMainPage()

function handleAClick(evt, link) {
    evt.preventDefault();

    history.pushState({}, "", `${link}`);

    checkState();
}

async function renderAllProducts() {

    const result = await getAllProducts()

    const template = result.map(product => {
        return renderProductCard(product);
    }).join("");

    const container = `
    <div class="grid grid-cols-4 gap-2">
        ${template}
    </div>
    `

    root.innerHTML = container;
}


function NextPrev(evt) {
    console.log(evt.clientX)
    if (evt.clientX < 1349 / 2) {
        if (count === 0)
            count = 2

        else
            count--

    }
    else {
        if (count === 2)
            count = 0

        else
            count++

    }

    renderSlider(slides)
}

function toggleMobileMenu() {
    mobileMenuContainer.classList.toggle("!hidden")
}
headerSlider.scrollLeft = headerSlider.scrollWidth

function animateHeaderSlider() {
    if (headerSlider.scrollLeft >= (headerSlider.scrollWidth / 2) * -1)
        headerSlider.scrollLeft = (headerSlider.scrollWidth * -1);
    else
        headerSlider.scrollLeft += 1
}

setInterval(animateHeaderSlider, 20);
async function renderSingleProduct(){
    const result = await getAllProducts()

    const template = result.map(product => {
        if (location.pathname.match(product.id)){
            console.log(product.id)
            return renderProductCard(product);
        }
    }).join("");

    const container = `
    <div class="flex">
        ${template}
    </div>
    `

    root.innerHTML = container;
}
function checkState() {
    let currentAddress = location.pathname;
    currentAddress = currentAddress.split('/').at(-1)

    switch (true) {
        case currentAddress === 'all-products':
            renderAllProducts()
            break;
        case currentAddress === 'index.html':
            renderMainPage();
            break;
        case (location.pathname.match(/[/]src[/]product[/][0-9]{1,}/) !== null):
            renderSingleProduct();
            break;
        default:
            break;
    }


}
window.addEventListener('popstate',checkState)