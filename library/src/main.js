const root = document.getElementById("root")
const filters = document.getElementById("filters")

const selectedAuthors = [];
const selectedLanguages = [];
const selectedGenres = [];

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];


function render(list) {
    const template = list.map(book => {
        return `
        <div class="rounded-md overflow-hidden border shadow-lg relative bg-[#FFAB5B]">
        <img src="./image/${book.imgSrc}" width="300" alt="" class="w-full h-[300px] object-cover">
        <div class="p-4">
            <h2>${book.title}</h2>
            <p>اثر: ${book.author}</p>
            ${favorites.includes(book.id) ? (

                `<button onclick="removeFavMain(${book.id})" class="bg-red-400 px-4 py-1 mt-4 text-white cursor-pointer">حذف از علاقمندی ها</button>`
            ) : (
                `<button onclick="addFav(${book.id})" class="bg-blue-400 px-4 py-1 mt-4 text-white cursor-pointer">اضافه به علاقمندی</button>`
            )}
        </div>
        <span class="genre">${book.genre}</span>
        <span class="p-date">${book.published_date}</span>
    </div>
        `
    }).join("")
    root.innerHTML = template
}

function removeFavMain(id) {
    const foundIndex = favorites.findIndex(item => item == id);
    favorites.splice(foundIndex, 1)
    localStorage.setItem("favorites", JSON.stringify(favorites));
    // const result = BOOKS.filter(book => favorites.includes(book.id))
    // const result = favorites.map(favId => {
    //     const foundIndex = BOOKS.findIndex(book => book.id === favId)
    //     return BOOKS[foundIndex]
    // })
    const result = favorites.map(favId => BOOKS.find(book => book.id === favId))
    calcFilters()
}

function renderFav(list) {
    const template = list.map(book => {
        return `
        <div class="rounded-md overflow-hidden border shadow-lg relative">
        <img src="./image/${book.imgSrc}" width="300" alt="" class="w-full h-[300px] object-cover">
        <div class="p-4">
            <h2>${book.title}</h2>
            <p>اثر: ${book.author}</p>
        </div>
        <span class="genre">${book.genre}</span>
        <span class="p-date">${book.published_date}</span>
        ${favorites.includes(book.id) ? (
            `<button onclick="removeFav(${book.id})" class="bg-red-400 px-4 py-1 mt-4 text-white cursor-pointer">حذف از علاقمندی ها</button>`
        ) : (
            `<button onclick="addFav(${book.id})" class="bg-blue-400 px-4 py-1 mt-4 text-white cursor-pointer">اضافه به علاقمندی</button>`
        )}
    </div>
        `
    }).join("")
    root.innerHTML = template
}
render(BOOKS)

function addFav(id) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    calcFilters()
}
function Exit(){
    calcFilters()
}
function changFav(){
    let result = [...BOOKS]

    if (favorites.length != 0) {
        result = result.filter(book => favorites.includes(book.id))
    }
    renderFav(result)
    
}

function removeFav(id) {
   
    const foundIndex = favorites.findIndex(item => item == id);
    favorites.splice(foundIndex, 1)
    localStorage.setItem("favorites", JSON.stringify(favorites));
    // const result = BOOKS.filter(book => favorites.includes(book.id))
    // const result = favorites.map(favId => {
    //     const foundIndex = BOOKS.findIndex(book => book.id === favId)
    //     return BOOKS[foundIndex]
    // })
    const result = favorites.map(favId => BOOKS.find(book => book.id === favId))
    renderFav(result)
}

function renderFilters() {
    filters.innerHTML = authorsTemplate();
    filters.innerHTML += langsTemplate();
    filters.innerHTML += generTemplate();

}
renderFilters()

function langsTemplate() {
    const langs = []

    for (const book of BOOKS) {
        if (!langs.includes(book.language)) {
            langs.push(book.language)
        }
    }

    const template = langs.map(lang => {
        return `
            <div>
                <label for="${lang}">${lang}</label>
                <input onchange="handleChangeLanguage(event)" id="${lang}" value="${lang}" type="checkbox" />
            </div>
        `
    }).join("")

    const res = `
        <div class="border-b-2 py-4">
            <h2 class="text-lg">زبان ها:</h2>
            ${template}
        </div>

    `;

    return res;
}

function authorsTemplate() {
    const authors = []

    for (const book of BOOKS) {
        if (!authors.includes(book.author)) {
            authors.push(book.author)
        }
    }

    const template = authors.map(author => {
        return `
            <div>
                <label for="${author}">${author}</label>
                <input onchange="handleChangeAuthor(event)" value="${author}" type="checkbox" id="${author}" />
            </div>
        `
    }).join("")

    const temp = `
        <div class="border-b-2 py-4">
            <h2 class="text-lg">نویسنده ها:</h2>
            ${template}
        </div>
    `

    return temp

}

function generTemplate() {
    const genres = [];

    for (const book of BOOKS) {
        if (!genres.includes(book.genre)) {
            genres.push(book.genre)
        }
    }

    const template = genres.map(genre => {
        return `
        <div>
            <label for="${genre}">${genre}</label>
            <input onchange="handleChangeGenre(event)" type="checkbox" value="${genre}" id="${genre}" />
        </div>
        `
    }).join("")

    const temp = `
        <div class="border-b-2 py-4">
            <h2 class="text-lg">ژانر ها:</h2>
            ${template}
        </div>
    `

    return temp
}

function filtersToggler() {
    filters.classList.toggle("scale-y-0")
}

function handleChangeAuthor(evt) {
    if (evt.target.checked) {
        selectedAuthors.push(evt.target.value)
    } else {
        // selectedAuthors = selectedAuthors.filter(item => item !== evt.target.value);
        const foundIndex = selectedAuthors.findIndex(item => item === evt.target.value);
        selectedAuthors.splice(foundIndex, 1);
    }

    calcFilters();
}

function handleChangeGenre(evt) {
    if (evt.target.checked) {
        selectedGenres.push(evt.target.value)
    } else {
        // selectedAuthors = selectedAuthors.filter(item => item !== evt.target.value);
        const foundIndex = selectedGenres.findIndex(item => item === evt.target.value);
        selectedGenres.splice(foundIndex, 1);
    }

    calcFilters();
}

function handleChangeLanguage(evt) {
    if (evt.target.checked) {
        selectedLanguages.push(evt.target.value)
    } else {
        // selectedAuthors = selectedAuthors.filter(item => item !== evt.target.value);
        const foundIndex = selectedLanguages.findIndex(item => item === evt.target.value);
        selectedLanguages.splice(foundIndex, 1);
    }

    calcFilters();
}

function calcFilters() {
    let result = [...BOOKS]

    if (selectedAuthors.length != 0) {
        result = result.filter(book => selectedAuthors.includes(book.author))
    }

    if (selectedGenres.length != 0) {
        result = result.filter(item => selectedGenres.includes(item.genre))
    }

    if (selectedLanguages.length != 0) {
        result = result.filter(item => selectedLanguages.includes(item.language))
    }

    render(result)
}