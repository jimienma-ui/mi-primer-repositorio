/* ==================================================
   VELOCITY MOTORS
================================================== */


/* ==================================================
   DATOS DE LOS AUTOS
================================================== */

const cars = [

    {
        brand: "PORSCHE",
        name: "911 GT3",
        price: "$182,900",
        acceleration: "3.4s",
        power: "502 HP",
        speed: "318 KM/H",

        image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=90",

        description:
        "Un deportivo diseñado para ofrecer una experiencia de conducción pura. Combina aerodinámica, precisión y un motor de alto rendimiento."
    },


    {
        brand: "BMW",
        name: "M4 COMPETITION",
        price: "$85,100",
        acceleration: "3.4s",
        power: "503 HP",
        speed: "290 KM/H",

        image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=90",

        description:
        "El BMW M4 Competition combina lujo y agresividad con una configuración creada para ofrecer una experiencia deportiva."
    },


    {
        brand: "NISSAN",
        name: "GT-R R35",
        price: "$121,090",
        acceleration: "2.7s",
        power: "565 HP",
        speed: "315 KM/H",

        image:
        "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1400&q=90",

        description:
        "Una leyenda japonesa. El GT-R combina tecnología avanzada, tracción integral y una enorme capacidad de aceleración."
    },


    {
        brand: "TOYOTA",
        name: "SUPRA MK5",
        price: "$55,595",
        acceleration: "3.9s",
        power: "382 HP",
        speed: "250 KM/H",

        image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=90",

        description:
        "El Supra MK5 recupera el espíritu de uno de los deportivos japoneses más reconocidos."
    },


    {
        brand: "FORD",
        name: "MUSTANG GT",
        price: "$44,090",
        acceleration: "4.2s",
        power: "480 HP",
        speed: "250 KM/H",

        image:
        "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1400&q=90",

        description:
        "Potencia americana en estado puro. El Mustang GT combina un potente V8 con un diseño agresivo."
    },


    {
        brand: "CHEVROLET",
        name: "CORVETTE C8",
        price: "$68,300",
        acceleration: "2.9s",
        power: "495 HP",
        speed: "312 KM/H",

        image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=90",

        description:
        "Motor central, diseño espectacular y una aceleración brutal. El Corvette C8 representa una nueva era para Chevrolet."
    }

];


/* ==================================================
   VARIABLES
================================================== */

let currentCar = 0;

let favorites = [];


const carImage =
    document.getElementById("carImage");

const carBrand =
    document.getElementById("carBrand");

const carName =
    document.getElementById("carName");

const carPrice =
    document.getElementById("carPrice");

const carAcceleration =
    document.getElementById("carAcceleration");

const carPower =
    document.getElementById("carPower");

const carSpeed =
    document.getElementById("carSpeed");

const carNumber =
    document.getElementById("carNumber");

const favoriteBtn =
    document.getElementById("favoriteBtn");

const sliderDots =
    document.getElementById("sliderDots");


/* ==================================================
   LOADER
================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1800);

});


/* ==================================================
   MOSTRAR AUTO
================================================== */

function showCar(index) {

    const car = cars[index];

    currentCar = index;


    const card =
        document.querySelector(".car-card");


    card.style.opacity = "0";

    card.style.transform =
        "translateY(15px)";


    setTimeout(() => {

        carImage.src = car.image;

        carBrand.textContent =
            car.brand;

        carName.textContent =
            car.name;

        carPrice.textContent =
            car.price;

        carAcceleration.textContent =
            car.acceleration;

        carPower.textContent =
            car.power;

        carSpeed.textContent =
            car.speed;

        carNumber.textContent =
            String(index + 1).padStart(2, "0");


        updateFavoriteButton();


        card.style.opacity = "1";

        card.style.transform =
            "translateY(0)";

    }, 200);


    updateDots();

}


/* ==================================================
   SIGUIENTE
================================================== */

document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

        currentCar++;

        if (currentCar >= cars.length) {

            currentCar = 0;

        }

        showCar(currentCar);

    });


/* ==================================================
   ANTERIOR
================================================== */

document
    .getElementById("prevBtn")
    .addEventListener("click", () => {

        currentCar--;

        if (currentCar < 0) {

            currentCar = cars.length - 1;

        }

        showCar(currentCar);

    });


/* ==================================================
   DOTS
================================================== */

function createDots() {

    sliderDots.innerHTML = "";

    cars.forEach((car, index) => {

        const dot =
            document.createElement("span");

        dot.classList.add("dot");


        if (index === currentCar) {

            dot.classList.add("active");

        }


        dot.addEventListener("click", () => {

            showCar(index);

        });


        sliderDots.appendChild(dot);

    });

}


function updateDots() {

    const dots =
        document.querySelectorAll(".dot");


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentCar
        );

    });

}


createDots();


/* ==================================================
   AUTO SLIDER
================================================== */

let autoSlide =
    setInterval(() => {

        currentCar++;

        if (currentCar >= cars.length) {

            currentCar = 0;

        }

        showCar(currentCar);

    }, 6000);


/* Pausar al pasar mouse */

document
    .querySelector(".car-slider")
    .addEventListener("mouseenter", () => {

        clearInterval(autoSlide);

    });


document
    .querySelector(".car-slider")
    .addEventListener("mouseleave", () => {

        autoSlide =
            setInterval(() => {

                currentCar++;

                if (currentCar >= cars.length) {

                    currentCar = 0;

                }

                showCar(currentCar);

            }, 6000);

    });


/* ==================================================
   FAVORITOS
================================================== */

favoriteBtn.addEventListener("click", () => {

    const car = cars[currentCar];


    const exists =
        favorites.some(
            item => item.name === car.name
        );


    if (exists) {

        favorites =
            favorites.filter(
                item => item.name !== car.name
            );

    } else {

        favorites.push(car);

    }


    updateFavoriteButton();

    updateFavoriteCount();

    renderFavorites();

});


function updateFavoriteButton() {

    const car = cars[currentCar];


    const exists =
        favorites.some(
            item => item.name === car.name
        );


    favoriteBtn.classList.toggle(
        "active",
        exists
    );


    if (exists) {

        favoriteBtn.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

    } else {

        favoriteBtn.innerHTML =
            '<i class="fa-regular fa-heart"></i>';

    }

}


function updateFavoriteCount() {

    document
        .getElementById("favCount")
        .textContent =
        favorites.length;

}


/* ==================================================
   FAVORITES PANEL
================================================== */

const favoritesPanel =
    document.getElementById("favoritesPanel");


document
    .getElementById("favoritesBtn")
    .addEventListener("click", () => {

        favoritesPanel
            .classList
            .add("active");

        renderFavorites();

    });


document
    .getElementById("closeFavorites")
    .addEventListener("click", () => {

        favoritesPanel
            .classList
            .remove("active");

    });


function renderFavorites() {

    const list =
        document.getElementById("favoritesList");


    if (favorites.length === 0) {

        list.innerHTML = `
        
            <p class="empty-favorites">
                Todavía no tienes autos favoritos.
            </p>

        `;

        return;

    }


    list.innerHTML = "";


    favorites.forEach(car => {

        const item =
            document.createElement("div");


        item.classList.add(
            "favorite-item"
        );


        item.innerHTML = `

            <img
                src="${car.image}"
                alt="${car.name}"
            >

            <div>

                <h4>
                    ${car.brand} ${car.name}
                </h4>

                <p>
                    ${car.price}
                </p>

            </div>

        `;


        list.appendChild(item);

    });

}


/* ==================================================
   MODAL
================================================== */

const modal =
    document.getElementById("carModal");


document
    .getElementById("detailsBtn")
    .addEventListener("click", () => {

        const car = cars[currentCar];


        document.getElementById("modalImage").src =
            car.image;


        document.getElementById("modalImage").alt =
            car.name;


        document.getElementById("modalBrand").textContent =
            car.brand;


        document.getElementById("modalName").textContent =
            car.name;


        document.getElementById("modalDescription").textContent =
            car.description;


        document.getElementById("modalPower").textContent =
            car.power;


        document.getElementById("modalAcceleration").textContent =
            car.acceleration;


        document.getElementById("modalSpeed").textContent =
            car.speed;


        modal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });


/* ==================================================
   CERRAR MODAL
================================================== */

document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);


modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* ==================================================
   ESC
================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

        favoritesPanel.classList.remove(
            "active"
        );

    }

});


/* ==================================================
   MENÚ MÓVIL
================================================== */

document
    .getElementById("menuBtn")
    .addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.toggle("active");

    });


document
    .querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navMenu")
                .classList.remove("active");

        });

    });


/* ==================================================
   CONTADORES
================================================== */

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;


    counters.forEach(counter => {

        const target =
            parseFloat(
                counter.dataset.target
            );


        const duration = 1800;

        const start =
            performance.now();


        function update(time) {

            const progress =
                Math.min(
                    (time - start) / duration,
                    1
                );


            let value =
                target * progress;


            if (target % 1 !== 0) {

                value =
                    value.toFixed(1);

            } else {

                value =
                    Math.floor(value);

            }


            counter.textContent =
                value;


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            }

        }


        requestAnimationFrame(update);

    });

}


/* ==================================================
   OBSERVER
================================================== */

const performanceSection =
    document.querySelector(
        ".performance"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounters();

                }

            });

        },
        {
            threshold: .4
        }
    );


observer.observe(
    performanceSection
);


/* ==================================================
   CTA
================================================== */

document
    .getElementById("exploreBtn")
    .addEventListener("click", () => {

        document
            .getElementById("cars")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* ==================================================
   EXPERIENCIA
================================================== */

document
    .getElementById("playVideo")
    .addEventListener("click", () => {

        alert(
            "🏎️ Bienvenido a la experiencia Velocity Motors."
        );

    });


/* ==================================================
   PARALLAX
================================================== */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");


    const scroll =
        window.scrollY;


    if (scroll <
        window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scroll * .25}px`;

    }

});


/* ==================================================
   SWIPE EN MÓVIL
================================================== */

let touchStartX = 0;

let touchEndX = 0;


const slider =
    document.querySelector(
        ".car-slider"
    );


slider.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0]
                .screenX;

    }
);


slider.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0]
                .screenX;


        if (
            touchEndX <
            touchStartX - 50
        ) {

            currentCar++;

            if (
                currentCar >=
                cars.length
            ) {

                currentCar = 0;

            }

            showCar(currentCar);

        }


        if (
            touchEndX >
            touchStartX + 50
        ) {

            currentCar--;

            if (currentCar < 0) {

                currentCar =
                    cars.length - 1;

            }

            showCar(currentCar);

        }

    }
);


/* ==================================================
   INICIALIZAR
================================================== */

showCar(0);

updateFavoriteCount();