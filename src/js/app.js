//script sidebar-price
const rangeInput = document.querySelectorAll('.sidebar-price__range input'),
    priceInput = document.querySelectorAll('.sidebar-price__input input'),
    range = document.querySelector('.sidebar-price__slider .sidebar-price__progress')
let priceGap = 10000

priceInput.forEach(input => {
    input.addEventListener('input', e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value)

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === 'input-min') {
                rangeInput[0].value = minPrice
                range.style.left = (minPrice / rangeInput[0].max) * 100 + '%'
            } else {
                rangeInput[1].value = maxPrice
                range.style.right =
                    100 - (maxPrice / rangeInput[1].max) * 100 + '%'
            }
        }
    })
})

rangeInput.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value)

        if (maxVal - minVal < priceGap) {
            if (e.target.className === 'sidebar-price__range-min') {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap
            }
        } else {
            priceInput[0].value = minVal
            priceInput[1].value = maxVal
            range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
        }
    })
})



//mobile nav catalog

const navBtn = document.getElementById('catalog');
const navBtnMob = document.getElementById('catalog-mobile')
const menuMobile = document.querySelector('.menu-mobile');
const mobileHead = document.querySelector('.header__mobile--menu')

navBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-mobile--active')
    navBtn.classList.toggle('catalog__btn--close')
})

navBtnMob.addEventListener('click', () => {
    mobileHead.classList.toggle('header__mobile--menu--active')
    navBtnMob.classList.toggle('catalog__btn--close')
})

// sidebar
const sidebars= document.querySelectorAll('.sidebar__wrap');

sidebars.forEach((sidebar) => {
    sidebar.addEventListener('click', (e)=> {
        if (e.target.classList.contains('sidebar__title')) {
            e.target.classList.toggle('sidebar__title--active');
            e.target.nextElementSibling.classList.toggle('sidebar__wrap--hidden')
        }
    })

})

// sidebar filter

const sidebarFilter = document.querySelector('.filter__mobile--btn');
const sidebarMobile = document.querySelector('.sidebar__mobile');
const sidebarBack = document.querySelector('.sidebar__back')

sidebarFilter.addEventListener('click', () => {
       sidebarMobile.classList.toggle('sidebar__mobile--active')
})
sidebarBack.addEventListener('click', () => {
    sidebarMobile.classList.remove('sidebar__mobile--active')
})


// filter more

const filterMore = document.querySelector('.filter__btn');

const filterHidden = document.querySelectorAll('.categories__hidden');
const filterHiddenMob = document.querySelectorAll('.categories__hidden--mobile')


filterMore.addEventListener('click', () => {
    filterHidden.forEach(el => {
        el.classList.toggle('categories__hidden--active')
    })
    filterHiddenMob.forEach(el => {
        el.classList.toggle('categories__hidden--mobile--active')
    })
    filterMore.innerHTML =
        filterMore.innerHTML === 'Показать ещё'
            ? (filterMore.innerHTML = 'Свернуть')
            : (filterMore.innerHTML = 'Показать ещё')
})
