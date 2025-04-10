let esp1Shown = false;
let esp2Shown = false;
let esp3Shown = false;
let esp4Shown = false;
let esp5Shown = false;
let esp6Shown = false;

gsap.registerPlugin(ScrollToPlugin); // Registra o plugin!

const navbarHeight = document.querySelector('.navbar').offsetHeight;

function scrollAnim(e) {
  gsap.to(window, {
    duration: 1, // mais curto para mobile
    scrollTo: {
      y: `#Section${e}`,
      offsetY: navbarHeight
    },
    ease: "power1.out",
    immediateRender: false
  });
}

document.getElementById("ButtonEspecialidades").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Especialidades");
});

document.getElementById("ButtonEquipa").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Equipa");
});

// Adicionar o evento de clique à navbar
document.getElementById("ButtonValores").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Valores");
});

document.getElementById("ButtonEscritorios").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Escritorios");
});

document.getElementById("ButtonBlog").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Blog");
});



document.querySelector(".values-contact-btn").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    console.log("Clicou no contacto dentro do manifesto");
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Contacto");
});

document.querySelector(".values-contact-btn-m").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Contacto");
});

document.querySelector(".team-contact-btn").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Contacto");
});




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


// ================================================ NEWS ===============================================================

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".news-scrolling-wrapper");
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

// ================================================ NEWS FIM ===============================================================


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


            // Atualiza o texto da descrição
            document.getElementById("descriptionName").textContent = "";

            // Atualiza o título da descrição
            document.getElementById("descriptionFunction").textContent = "Especialistas dedicados a defender os seus direitos com excelência.";       
        });
    });
});


//secção escritórios
document.querySelectorAll(".office-item").forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        console.log("O utilizador está a ver um escritório específico");

        const newImage = e.target.getAttribute("data-map");
        const targetImage = document.getElementById("azoreanMap");


        targetImage.src = `./assets/imgs/offices/${newImage}-office.svg`;
    });

    item.addEventListener("mouseleave", (e) => {
        console.log("O utilizador SAIU");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/general-map.svg"
    });
});


document.querySelectorAll(".office-1").forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        document.getElementById("sao-miguel-container").classList.add("active");
        document.getElementById("sao-miguel-container").classList.add("active-color");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/sao-miguel-office.svg";
    });

    item.addEventListener("mouseleave", (e) => {
        document.getElementById("sao-miguel-container").classList.remove("active");
        document.getElementById("sao-miguel-container").classList.remove("active-color");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/general-map.svg";
    });
});



document.querySelectorAll(".office-2").forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        document.getElementById("pico-container").classList.add("active");
        document.getElementById("pico-container").classList.add("active-color");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/pico-office.svg";
    });

    item.addEventListener("mouseleave", (e) => {
        document.getElementById("pico-container").classList.remove("active");
        document.getElementById("pico-container").classList.remove("active-color");
        document.getElementById("azoreanMap").src = "./assets/imgs/offices/general-map.svg";
    });
});



document.getElementById("graciosa-island").addEventListener("mouseenter", () => {
    document.getElementById("graciosa-container").classList.add("active");
    document.getElementById("graciosa-container").classList.add("active-color");
    document.getElementById("azoreanMap").src = "./assets/imgs/offices/graciosa-office.svg";
});

document.getElementById("graciosa-island").addEventListener("mouseleave", () => {
    document.getElementById("graciosa-container").classList.remove("active");
    document.getElementById("graciosa-container").classList.remove("active-color");
    document.getElementById("azoreanMap").src = "./assets/imgs/offices/general-map.svg";
});


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Ocorreu um erro. Tente novamente.");
        }
    }).catch(error => {
        alert("Erro ao enviar formulário.");
        console.log(error);
    });
});




function updateNavbarShadow() {
    const navbar = document.querySelector('.navbar');
    const collapse = document.querySelector('.navbar-collapse');

    if (window.scrollY > 10 || collapse.classList.contains('show')) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
}

window.addEventListener('scroll', updateNavbarShadow);

// Atualizar quando o menu é aberto ou fechado
const collapseEl = document.getElementById('navbarsExample05');
collapseEl.addEventListener('shown.bs.collapse', updateNavbarShadow);
collapseEl.addEventListener('hidden.bs.collapse', updateNavbarShadow);