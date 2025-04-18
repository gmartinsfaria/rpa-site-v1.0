let esp1Shown = false;
let esp2Shown = false;
let esp3Shown = false;
let esp4Shown = false;
let esp5Shown = false;
let esp6Shown = false;

let dropOpen = false;

gsap.registerPlugin(ScrollToPlugin); // Registra o plugin!

const navbarHeight = document.querySelector('.navbar').offsetHeight;

function scrollAnim(e) {
    console.log(`Clicou em ${e}`);
    gsap.to(window, { 
        duration: 1.5, 
        scrollTo: {
            y: `#Section${e}`,
            offsetY: navbarHeight
          }, 
        ease: "power2.inOut",
        immediateRender: true
    });
};
  

document.getElementById("ButtonEspecialidades").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Especialidades");
});

document.getElementById("FooterBtnEspecialidades").addEventListener("click", (event) => {
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

document.getElementById("FooterBtnEquipa").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Equipa");
});


document.getElementById("ButtonValores").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Valores");
});

document.getElementById("FooterBtnValores").addEventListener("click", (event) => {
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

document.getElementById("FooterBtnEscritorios").addEventListener("click", (event) => {
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

document.getElementById("FooterBtnBlog").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Blog");
});


document.querySelector(".round-btn").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    console.log("Clicou no contacto dentro do manifesto");
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Contacto");
});

document.getElementById("FooterBtnContacto").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Contacto");
});



document.getElementById("valuesContactBtn").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Contacto");
});

document.getElementById("valuesContactBtnMobile").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Contacto");
});

document.getElementById("equipaContactBtn").addEventListener("click", (event) => {
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
    const navColapse = document.querySelector(".navbar-collapse");

    const bsCollapse = new bootstrap.Collapse(navColapse, {
        toggle: false // Inicialmente não queremos que o menu se abra automaticamente
    });

    // Controlar a alternância do menu ao clicar no ícone de hambúrguer
    navbarToggler.addEventListener("click", function() {
        // Alterna o ícone de hambúrguer
        menuIcon.classList.toggle("active");

        // Se o menu não estiver visível, abri-lo; caso contrário, fechá-lo
        if (navColapse.classList.contains('show')) {
            bsCollapse.hide(); // Fechar o menu
        } else {
            bsCollapse.show(); // Abrir o menu
        }
    });

    // Fechar o menu quando um link for clicado
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log("Clicou num dos links da nav collapsed!");

            bsCollapse.hide(); // Fechar o menu com transição
            menuIcon.classList.remove("active"); // Voltar ao hambúrguer
            dropOpen = false;
        });
    });
});


document.getElementById("ham-btn").addEventListener("click", () => {
    const dropDown = document.getElementById("drop-menu"); 
    if (!dropOpen) {
        dropDown.classList.remove("show");
        dropOpen = true;
    } else {
        dropDown.classList.add("show");
        dropOpen = false;
    }
      
    console.log("CLICOU NO BOTÃO HAMBURGUER");
})



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


//================================================= secção TEAM ============================================================
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
        document.getElementById("descriptionName").classList.remove("invisible-txt");
        
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
            document.getElementById("descriptionName").classList.add("invisible-txt");
            document.getElementById("descriptionName").textContent = "Nome Colaborador";

            // Atualiza o título da descrição
            document.getElementById("descriptionFunction").textContent = "Especialistas dedicados a defender os seus direitos com excelência.";       
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".team-scrolling-wrapper");
    const arrowLeft = document.getElementById("arrow-left");
    const arrowRight = document.getElementById("arrow-right");

    const scrollAmount = 305; // Ajusta conforme a largura dos cards
    const scrollDuration = 0.6; // Duração da animação em segundos

    arrowRight.addEventListener("click", () => {
        gsap.to(scrollContainer, {
            scrollLeft: scrollContainer.scrollLeft + scrollAmount,
            duration: scrollDuration,
            ease: "power2.out"
        });
    });

    arrowLeft.addEventListener("click", () => {
        gsap.to(scrollContainer, {
            scrollLeft: scrollContainer.scrollLeft - scrollAmount,
            duration: scrollDuration,
            ease: "power2.out"
        });
    });
});

const arrowRight = document.querySelector('#arrow-right img');


arrowRight.addEventListener('mouseenter', () => {
  arrowRight.src = './assets/icons/slide-arrow-right-red.svg';
});

arrowRight.addEventListener('mouseleave', () => {
  arrowRight.src = './assets/icons/slide-arrow-right-black.svg';
});

const arrowLeft = document.querySelector('#arrow-left img');

arrowLeft.addEventListener('mouseenter', () => {
    arrowLeft.src = './assets/icons/slide-arrow-left-red.svg';
  });
  
  arrowLeft.addEventListener('mouseleave', () => {
    arrowLeft.src = './assets/icons/slide-arrow-left-black.svg';
  });


//================================================= TEAM FIM ============================================================



// ================================================ VALUES ==============================================================

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".scrolling-wrapper");
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


// =============================================== VALUES FIM ============================================================




//================================================== secção escritórios =================================================


//================================================== secção escritórios FIM =================================================


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





// ************************************************************** FOOTER *******************************************************

document.addEventListener("DOMContentLoaded", function () {
    const d = new Date();
    let year = d.getFullYear();
    console.log("Estamos no ano " + year);
    document.getElementById("currentYear").innerHTML = year;
});



// ************************************************************** FOOTER FIM *******************************************************