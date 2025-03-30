let esp1Shown = false;
let esp2Shown = false;
let esp3Shown = false;
let esp4Shown = false;
let esp5Shown = false;
let esp6Shown = false;

gsap.registerPlugin(ScrollToPlugin); // Registra o plugin!

function scrollAnim(e) {
    console.log(`Clicou em ${e}`);
    gsap.to(window, { duration: 1.5, scrollTo: `#Section${e}`, ease: "power2.inOut" });
}

document.getElementById("ButtonValores").addEventListener("click", () => scrollAnim("Valores"));

document.getElementById("ButtonEspecialidades").addEventListener("click", () => scrollAnim("Especialidades"));

document.getElementById("ButtonEquipa").addEventListener("click", () => scrollAnim("Equipa"));

document.getElementById("ButtonEscritorios").addEventListener("click", () => scrollAnim("Escritorios"));

document.getElementById("ButtonBlog").addEventListener("click", () => scrollAnim("Blog"));

document.getElementById("ButtonContacto").addEventListener("click", () => scrollAnim("Contacto"));

document.querySelector(".values-contact-btn").addEventListener("click", () => scrollAnim("Contacto"));

document.querySelector(".values-contact-btn-m").addEventListener("click", () => scrollAnim("Contacto"));

document.querySelector(".team-contact-btn").addEventListener("click", () => scrollAnim("Contacto"));



let animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // O contêiner onde a animação será exibida
    renderer: 'svg', // Tipo de renderização (svg, canvas, ou html)
    loop: false, // Defina como true se a animação deve ser repetida
    autoplay: true, // Defina como true para que a animação comece automaticamente
    path: './assets/json-files/Homepage-anim.json' // Caminho para o arquivo JSON gerado com o Bodymovin
});


let animationTxt = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-txt'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './assets/json-files/Homeapage-txt.json'
});

let interact1 = lottie.loadAnimation({
    container: document.querySelector('.lottie-animation-interact-1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/json-files/cta.json'
});




document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function() {
        menuIcon.classList.toggle("active");
    });
});



document.querySelectorAll(".grid-item").forEach(item => {
    item.addEventListener("mouseenter", function() {
        const newTitle = this.getAttribute("data-title");
        const newText = this.getAttribute("data-text");
        const newImage = this.getAttribute("data-img");
        const newBtn = this.getAttribute("data-btn");

        document.querySelectorAll(".specialties-btn-itm").forEach(btn => {
            btn.style.backgroundColor = "#EFEFEF";
        });

        document.getElementById(newBtn).style.backgroundColor = "#A6151F";

        // Atualiza o titulo da descrição
        document.getElementById("descriptionTitle").textContent = newTitle;
        
        // Atualiza o texto da descrição
        document.getElementById("descriptionText").textContent = newText;

        // Atualiza a imagem principal
        document.getElementById("mainImage").src = newImage;
    });
});


document.querySelectorAll(".specialties-btn-itm").forEach(item => {
    item.addEventListener("click", (e) => {
        const id = e.target.getAttribute("id");

        const newTitle = e.target.getAttribute("data-title");
        const newText = e.target.getAttribute("data-text");
        const newImage = e.target.getAttribute("data-img");

        //console.log("Returned ID is: " + id);

        document.querySelectorAll(".specialties-btn-itm").forEach(btn => {
            btn.style.backgroundColor = "#EFEFEF";
        });

        document.getElementById(id).style.backgroundColor = "#A6151F";

        // Atualiza o titulo da descrição
        document.getElementById("descriptionTitle").textContent = newTitle;
        
        // Atualiza o texto da descrição
        document.getElementById("descriptionText").textContent = newText;

        // Atualiza a imagem principal
        document.getElementById("mainImage").src = newImage;
    });
});


document.getElementById("especialidade-1").addEventListener("mouseenter", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-2"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-1-btn").addEventListener("click", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-2"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});
  
document.getElementById("especialidade-2").addEventListener("mouseenter", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-3"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-2-btn").addEventListener("click", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-3"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-3").addEventListener("mouseenter", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-4"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-3-btn").addEventListener("click", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-4"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-4").addEventListener("mouseenter", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-5"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-4-btn").addEventListener("click", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-5"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-5").addEventListener("mouseenter", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-6"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-5-btn").addEventListener("click", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-6"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-6").addEventListener("mouseenter", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-1"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});

document.getElementById("especialidade-6-btn").addEventListener("click", () => {
    const interactAnim = document.getElementById("esp-anim"); // Obtém a animação
    const targetDiv = document.getElementById("especialidade-1"); // Obtém a div destino

    if (interactAnim) {
        targetDiv.appendChild(interactAnim);
    }
});



//secção TEAM
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".team-scrolling-wrapper");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta a velocidade do arrasto
        slider.scrollLeft = scrollLeft - walk;
    });
});


document.querySelectorAll(".team-item").forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        console.log("Clicou num elemento da equipa!!!");

        const teamItem = e.target.closest(".team-item"); // Garante que pegamos a div correta
        

        const newName = teamItem.getAttribute("data-name");
        const newFunction = teamItem.getAttribute("data-function");
        const newImage = teamItem.getAttribute("data-img");

        // Atualiza o título da descrição
        document.getElementById("descriptionName").textContent = newName;
        
        // Atualiza o texto da descrição
        document.getElementById("descriptionFunction").textContent = newFunction;

        // Encontra a imagem dentro da div e altera o src
        const imgElement = teamItem.querySelector("img"); // Busca a <img> dentro do .team-item
        if (imgElement) {
            imgElement.src = `./assets/imgs/team/${newImage}-color.webp`; // Atualiza a imagem com a nova src
        }

        item.addEventListener("mouseout", () => {
            
            imgElement.src = `./assets/imgs/team/${newImage}.webp`;

                // Atualiza o título da descrição
            document.getElementById("descriptionName").textContent = "Especialistas dedicados a defender os seus direitos com excelência.";
            
            // Atualiza o texto da descrição
            document.getElementById("descriptionFunction").textContent = "";
        
        });
    });
});


//secção escritórios
document.querySelectorAll(".office-item").forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        console.log("O utilizador está a ver um escritório específico");

        const newImage = e.target.getAttribute("data-map");
        const targetImage = document.getElementById("azoreanMap");


        targetImage.src = `./assets/imgs/offices/${newImage}-office.webp`;
    });

    item.addEventListener("mouseleave", (e) => {
        console.log("O utilizador SAIU");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/general-map.webp"
    });
});


document.querySelectorAll(".office-1").forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        document.getElementById("sao-miguel-container").classList.add("active");
        document.getElementById("sao-miguel-container").classList.add("active-color");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/sao-miguel-office.webp";
    });

    item.addEventListener("mouseleave", (e) => {
        document.getElementById("sao-miguel-container").classList.remove("active");
        document.getElementById("sao-miguel-container").classList.remove("active-color");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/general-map.webp";
    });
});



document.querySelectorAll(".office-2").forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        document.getElementById("pico-container").classList.add("active");
        document.getElementById("pico-container").classList.add("active-color");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/pico-office.webp";
    });

    item.addEventListener("mouseleave", (e) => {
        document.getElementById("pico-container").classList.remove("active");
        document.getElementById("pico-container").classList.remove("active-color");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/general-map.webp";
    });
});



document.getElementById("graciosa-island").addEventListener("mouseenter", () => {
    document.getElementById("graciosa-container").classList.add("active");
    document.getElementById("graciosa-container").classList.add("active-color");
    document.getElementById("azoreanMap").src = "./assets/imgs/offices/graciosa-office.webp";
});

document.getElementById("graciosa-island").addEventListener("mouseleave", () => {
    document.getElementById("graciosa-container").classList.remove("active");
    document.getElementById("graciosa-container").classList.remove("active-color");
    document.getElementById("azoreanMap").src = "./assets/imgs/offices/general-map.webp";
});