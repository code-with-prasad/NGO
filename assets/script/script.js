
// Navbar Script 
// Show Menu 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu 
        nav.classList.toggle('show-menu');

        //Add show-icon to show and hide the menu icon 
        toggle.classList.toggle('show-icon');
    })
}

showMenu('nav-toggle', 'nav-menu')

// Shoe Dropdown Menu 
const dropdownItem = document.querySelectorAll('.dropdown__item')

// 1> Select each dropdown item 
dropdownItem.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    // 2. Select each button click 
    dropdownButton.addEventListener('click', () => {
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')

        // 5. Call the toggleItem function 
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items 
        if (showDropdown && showDropdown != item) {
            toggleItem(showDropdown)
        }
    })
})


// create a function to display the dropdown 
const toggleItem = (item) => {
    //3.1 Select each dropdown content 
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove 
    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown');
    } else {
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class 
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

// ============ DELETE DROPDOWN STYLES =============
const mediaQuery = matchMedia('(min-width:1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown style in mobile mode when browser resizes 
const removeStyle = () => {
    //Validate if the media query reaches 1118px
    if (mediaQuery.matches) {
        //Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style');
        })

        //Remove the show-dropdown class from dropdown item
        dropdownItem.forEach((e) => {
            e.classList.remove('show-dropdown');
        })
    }
}

addEventListener('resize', removeStyle)

// Home Page Script 

// Counter section 
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 20); //Update Every 20 Millisecond 
        } else {
            counter.innerText = target + '+';
        }
    };

    updateCounter();
})

// Our Ongoing Projects Section
var swiper = new Swiper(".ongoingProject", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});


//   Latest Updates & Announcements Section

var swiper = new Swiper(".latestUpdateSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

// Our Testimonials
var swiper = new Swiper(".testimonials", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".transformation-story", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});