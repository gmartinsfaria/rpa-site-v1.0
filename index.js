let esp1Shown = false;
let esp2Shown = false;
let esp3Shown = false;
let esp4Shown = false;
let esp5Shown = false;
let esp6Shown = false;

let dropOpen = false;

gsap.registerPlugin(ScrollToPlugin); // Registra o plugin!

const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height || 0;

/*
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
*/

function scrollAnim(e) {
    console.log(`Clicou em ${e}`);
    const targetSelector = `#Section${e}`;
    const targetElement = document.querySelector(targetSelector);

    if (!targetElement) return;
    
    // Mobile: usa scroll suave nativo do browser (mais rápido e responsivo)
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    
}



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


document.getElementById("ButtonParcerias").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Parcerias");
});

document.getElementById("FooterBtnParcerias").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Parcerias");
});


document.getElementById("ButtonBlog").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Noticias");
});

document.getElementById("FooterBtnBlog").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    event.preventDefault();

    // Chamar a animação de rolagem
    scrollAnim("Noticias");
});


document.querySelector(".round-btn").addEventListener("click", (event) => {
    // Impedir o comportamento padrão do link
    console.log("Clicou no contacto dentro do manifesto");
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


// ******************************************************* LOADER **********************************************

const loader = document.getElementById("mainLoader");
const content = document.getElementById("mainContent");


content.style.visibility = "hidden";

setTimeout(() => {
    content.classList.remove('disp-none');
    loader.classList.add('disp-none');
        setTimeout(() => {
            content.style.visibility = "visible";
        }, 200);
}, 1000);





// ******************************************************* LOADER FIM **********************************************


// ******************************************************* ANIMAÇÃO ************************************************


let animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // O contêiner onde a animação será exibida
    renderer: 'svg', // Tipo de renderização (svg, canvas, ou html)
    loop: false, // Defina como true se a animação deve ser repetida
    autoplay: false, // Defina como true para que a animação comece automaticamente
    path: './assets/json-files/Homepage-anim.json' // Caminho para o arquivo JSON gerado com o Bodymovin
});

const lottieContainer = document.getElementById('lottie-animation');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animation.play(); // Inicia a animação
      observer.unobserve(entry.target); // Para de observar depois de tocar
    }
  });
}, {
  threshold: 0.5 // Só ativa quando 50% do elemento está visível
});

observer.observe(lottieContainer);



// ****************************************************** ANIMAÇÃO FIM **********************************************



// ****************************************************** NAVBAR ******************************************************


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

// *************************************************** NAVBAR FIM ********************************************************

// ================================================ NEWS ===============================================================

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".news-scrolling-wrapper");
    const arrowLeft = document.getElementById("arrow-left-news");
    const arrowRight = document.getElementById("arrow-right-news");

    function getSingleCardWidthWithGap() {
        const card = scrollContainer.querySelector(".news-item");
        if (!card) return 0;

        const cardStyle = window.getComputedStyle(card);
        const containerStyle = window.getComputedStyle(scrollContainer);

        const gap = parseFloat(containerStyle.columnGap || containerStyle.gap || 0);
        return card.offsetWidth + gap;
    }

    const scrollDuration = 0.6;

    function updateArrowVisibility() {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScrollLeft = scrollContainer.scrollLeft;

        // Se o conteúdo não tiver scroll horizontal suficiente
        if (maxScrollLeft <= 0) {
            arrowLeft.style.display = "none";
            arrowRight.style.display = "none";
            return;
        }

        if (Math.round(currentScrollLeft) <= 0) {
            arrowLeft.style.display = "none";
            arrowRight.style.display = "block";
        } else if (Math.round(currentScrollLeft) >= Math.round(maxScrollLeft)) {
            arrowLeft.style.display = "block";
            arrowRight.style.display = "none";
        } else {
            arrowLeft.style.display = "block";
            arrowRight.style.display = "block";
        }
    }

    arrowRight.addEventListener("click", () => {
        const scrollAmount = getSingleCardWidthWithGap();
        gsap.to(scrollContainer, {
            scrollLeft: scrollContainer.scrollLeft + scrollAmount,
            duration: scrollDuration,
            ease: "power2.out",
            onUpdate: updateArrowVisibility,
            onComplete: updateArrowVisibility
        });
    });

    arrowLeft.addEventListener("click", () => {
        const scrollAmount = getSingleCardWidthWithGap();
        gsap.to(scrollContainer, {
            scrollLeft: scrollContainer.scrollLeft - scrollAmount,
            duration: scrollDuration,
            ease: "power2.out",
            onUpdate: updateArrowVisibility,
            onComplete: updateArrowVisibility
        });
    });

    // Drag para scroll manual
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        scrollContainer.classList.add("active");
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isDown = false;
        scrollContainer.classList.remove("active");
    });

    /*
    scrollContainer.addEventListener("mouseup", () => {
        isDown = false;
        scrollContainer.classList.remove("active");
    });
    */
    
    scrollContainer.addEventListener("mouseup", () => {
        isDown = false;
        scrollContainer.classList.remove("active");

        // Snap automático após arrastar
        const cardWidth = getSingleCardWidthWithGap();
        const currentScroll = scrollContainer.scrollLeft;

        const nearestCardIndex = Math.round(currentScroll / cardWidth);
        const snapTo = nearestCardIndex * cardWidth;

        gsap.to(scrollContainer, {
            scrollLeft: snapTo,
            duration: 0.4,
            ease: "power2.out",
            onUpdate: updateArrowVisibility,
            onComplete: updateArrowVisibility
        });
    });


    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
        updateArrowVisibility(); // Atualiza setas enquanto faz drag
    });

    scrollContainer.addEventListener("scroll", updateArrowVisibility);
    window.addEventListener("resize", updateArrowVisibility);

    setTimeout(updateArrowVisibility, 1000); // Chamada inicial
});



document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("SectionNewsLeft");
    const mediaQuery = window.matchMedia("(min-width: 576px)");
  
    function updateClasses(e) {
      if (!targetElement) return;
  
      if (e.matches) {
        // Largura >= 576px
        targetElement.classList.add("container-left");
        targetElement.classList.remove("px-5");
      } else {
        // Largura < 576px
        targetElement.classList.add("px-5");
        targetElement.classList.remove("container-left");
      }
    }
  
    // Executa à carga
    updateClasses(mediaQuery);
  
    // E ao mudar de tamanho
    mediaQuery.addEventListener("change", updateClasses);
});


// ================================================ NEWS FIM ===============================================================


// ***************************************************** MANIFESTO **********************************************************

/*
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".values-container");
  const items = Array.from(section.querySelectorAll(".value-item"));
  let isActive = false;
  let currentIndex = 0;
  let lastScrollY = 0;

  const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  console.log('intersectionRatio:', entry.intersectionRatio, 'isIntersecting:', entry.isIntersecting);
  if (entry.isIntersecting && entry.intersectionRatio >= 0.8 && !isActive) {
    activateScrollLock();
  }
}, { threshold: 0.9 });

  observer.observe(section);

  function activateScrollLock() {
    isActive = true;
    currentIndex = 0;
    lastScrollY = window.scrollY;
    highlightItem(currentIndex);

    // Bloqueia scroll sem afetar posição atual
    document.body.classList.add("scroll-locked");
    window.addEventListener("wheel", onScroll, { passive: false });
    window.addEventListener("touchmove", onTouchScroll, { passive: false });
    document.addEventListener("touchstart", e => {
      touchStartY = e.touches[0].clientY;
    });
  }

  function deactivateScrollLock() {
    isActive = false;
    document.body.classList.remove("scroll-locked");
    window.removeEventListener("wheel", onScroll);
    window.removeEventListener("touchmove", onTouchScroll);
  }

  function highlightItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("value-highlight", i === index);
    });
  }

  function onScroll(e) {
    e.preventDefault();
    window.scrollTo(0, lastScrollY); // trava posição da página

    const direction = Math.sign(e.deltaY);
    if (direction > 0 && currentIndex < items.length - 1) {
      currentIndex++;
      highlightItem(currentIndex);
    } else if (direction < 0 && currentIndex > 0) {
      currentIndex--;
      highlightItem(currentIndex);
    }

    if (currentIndex === items.length - 1 && direction > 0) {
      setTimeout(deactivateScrollLock, 300);
    }
    if (currentIndex === 0 && direction < 0) {
      setTimeout(deactivateScrollLock, 300);
    }
  }

  let touchStartY = 0;
  function onTouchScroll(e) {
    e.preventDefault();
    window.scrollTo(0, lastScrollY);

    const touchY = e.touches[0].clientY;
    const delta = touchStartY - touchY;
    const direction = Math.sign(delta);

    if (Math.abs(delta) > 20) {
      onScroll({ preventDefault: () => {}, deltaY: direction });
      touchStartY = touchY;
    }
  }
});
*/




// ***************************************************** MANIFESTO FIM *******************************************************


//================================================= secção TEAM ============================================================

function getCardWidth() {
    const card = document.querySelector(".team-card-block");
    const cardWidth = card ? card.offsetWidth : 300;
    const gapInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize); // 1rem
    return cardWidth + gapInPixels;
}


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

    /*
    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });
    */

    slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");

    // Snap automático para o card mais próximo
    const cardWidth = getCardWidth(); // já definida na tua lógica das setas
    const currentScroll = slider.scrollLeft;

    const nearestCardIndex = Math.round(currentScroll / cardWidth);
    const snapTo = nearestCardIndex * cardWidth;

    gsap.to(slider, {
        scrollLeft: snapTo,
        duration: 0.4,
        ease: "power2.out"
    });
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
            document.getElementById("descriptionName").textContent = ".";

            // Atualiza o título da descrição
            document.getElementById("descriptionFunction").textContent = "Especialistas dedicados a defender os seus direitos com excelência.";       
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".team-scrolling-wrapper");
    const arrowLeft = document.getElementById("arrow-left");
    const arrowRight = document.getElementById("arrow-right");

    function getCardWidth() {
        const card = scrollContainer.querySelector(".team-card-block");
        const cardWidth = card ? card.offsetWidth : 300;
        const gapInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize); // 1rem
        return cardWidth + gapInPixels;
    }

    function getScrollAmount() {
        const cardWidthWithGap = getCardWidth();
        const isMobile = window.innerWidth <= 600;
        const cardsToScroll = isMobile ? 1 : 2;
        return cardWidthWithGap * cardsToScroll;
    }

    const scrollDuration = 0.6;

    arrowRight.addEventListener("click", () => {
        const scrollAmount = getScrollAmount();
        gsap.to(scrollContainer, {
            scrollLeft: scrollContainer.scrollLeft + scrollAmount,
            duration: scrollDuration,
            ease: "power2.out"
        });
    });

    arrowLeft.addEventListener("click", () => {
        const scrollAmount = getScrollAmount();
        gsap.to(scrollContainer, {
            scrollLeft: scrollContainer.scrollLeft - scrollAmount,
            duration: scrollDuration,
            ease: "power2.out"
        });
    });


    // Atualiza visibilidade ao fazer scroll e ao redimensionar janela
    scrollContainer.addEventListener("scroll", updateTeamArrowVisibility);
    window.addEventListener("resize", updateTeamArrowVisibility);

    // Chamada inicial com atraso para garantir que tudo está carregado
    setTimeout(updateTeamArrowVisibility, 1000); // usar o teu loader delay

});


function updateTeamArrowVisibility() {
    const scrollContainer = document.querySelector(".team-scrolling-wrapper");
    const arrowLeft = document.getElementById("arrow-left");
    const arrowRight = document.getElementById("arrow-right");

    if (!scrollContainer || !arrowLeft || !arrowRight) return;

    const scrollLeft = scrollContainer.scrollLeft;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Mostra ou esconde as setas com base no scroll
    arrowLeft.style.display = scrollLeft > 0 ? "block" : "none";
    arrowRight.style.display = scrollLeft < maxScrollLeft - 1 ? "block" : "none";
}



const arrowRights = document.querySelectorAll('.arrow-right img');

arrowRights.forEach(arrow => {
  arrow.addEventListener('mouseenter', () => {
    arrow.src = './assets/icons/slide-arrow-right-red.svg';
  });

  arrow.addEventListener('mouseleave', () => {
    arrow.src = './assets/icons/slide-arrow-right-black.svg';
  });
});

const arrowLefts = document.querySelectorAll('.arrow-left img');

arrowLefts.forEach(arrow => {
  arrow.addEventListener('mouseenter', () => {
    arrow.src = './assets/icons/slide-arrow-left-red.svg';
  });

  arrow.addEventListener('mouseleave', () => {
    arrow.src = './assets/icons/slide-arrow-left-black.svg';
  });
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




//================================================== ESCRITÓRIOS =================================================



document.addEventListener("DOMContentLoaded", function () {
function handleStickyBlock(wrapper, content, scrollCol) {
    const stickyHeight = content.offsetHeight;
    const offsetTop = wrapper.offsetTop;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const end = offsetTop + scrollCol.offsetHeight - stickyHeight - 100;
    const start = offsetTop - 100;

    if (scrollTop > start && scrollTop < end) {
    content.classList.add("fixed");
    content.classList.remove("bottom");
    } else if (scrollTop >= end) {
    content.classList.remove("fixed");
    content.classList.add("bottom");
    } else {
    content.classList.remove("fixed", "bottom");
    }
}

const wrappers = document.querySelectorAll(".sticky-wrapper");

function onScroll() {
    wrappers.forEach(wrapper => {
    const content = wrapper.querySelector(".sticky-content");
    const scrollCol = wrapper.querySelector(".scrolling-column");
    handleStickyBlock(wrapper, content, scrollCol);
    });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onScroll);
onScroll(); // Executa na carga inicial
});


document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("SectionEscritoriosLeft");
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const saoMiguelOfficeImg = document.getElementById("saoMiguelOfficeImg");
    const picoOfficeImg = document.getElementById("picoOfficeImg");
    const graciosaOfficeImg = document.getElementById("graciosaOfficeImg");
  
    function updateClasses(e) {
      if (!targetElement) return;
  
      if (e.matches) {
        // Largura >= 768px
        targetElement.classList.add("container-left");
        targetElement.classList.remove("container");
        targetElement.classList.remove("px-5");
        saoMiguelOfficeImg.src = "./assets/imgs/offices/sao-miguel-office.webp";
        picoOfficeImg.src = "./assets/imgs/offices/pico-office.webp";
        graciosaOfficeImg.src = "./assets/imgs/offices/graciosa-office.webp";
      } else {
        // Largura < 768px
        targetElement.classList.add("container");
        targetElement.classList.remove("container-left");
        targetElement.classList.add("px-5");
        saoMiguelOfficeImg.src = "./assets/imgs/offices/sao-miguel-office-m.webp";
        picoOfficeImg.src = "./assets/imgs/offices/pico-office-m.webp";
        graciosaOfficeImg.src = "./assets/imgs/offices/graciosa-office-m.webp";
      }
    }
  
    // Executa à carga
    updateClasses(mediaQuery);
  
    // E ao mudar de tamanho
    mediaQuery.addEventListener("change", updateClasses);
});


document.addEventListener("DOMContentLoaded", function () {
    const officeImages = document.querySelectorAll(".office-picture");

    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: [0.45, 0.5, 0.55] // 50% visível já ativa o efeito
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    }, observerOptions);

    officeImages.forEach(img => observer.observe(img));
});



//================================================== ESCRITÓRIOS FIM =================================================


// ************************************************* PARCERIAS *********************************************************


document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("SectionParceriasLeft");
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const bostonPartnershipImg = document.getElementById("bostonPartnershipImg");
    const providencePartnershipImg = document.getElementById("providencePartnershipImg");
    const torontoPartnershipImg = document.getElementById("torontoPartnershipImg");
  
    function updateClasses(e) {
      if (!targetElement) return;
  
      if (e.matches) {
        // Largura >= 768px
        targetElement.classList.add("container-left");
        targetElement.classList.remove("container");
        targetElement.classList.remove("px-5");
        bostonPartnershipImg.src = "./assets/imgs/partnerships/boston.webp";
        providencePartnershipImg.src = "./assets/imgs/partnerships/providence.webp";
        torontoPartnershipImg.src = "./assets/imgs/partnerships/toronto.webp";
      } else {
        // Largura < 768px
        targetElement.classList.add("container");
        targetElement.classList.remove("container-left");
        targetElement.classList.add("px-5");
        bostonPartnershipImg.src = "./assets/imgs/partnerships/boston-m.webp";
        providencePartnershipImg.src = "./assets/imgs/partnerships/providence-m.webp";
        torontoPartnershipImg.src = "./assets/imgs/partnerships/toronto-m.webp";
      }
    }
  
    // Executa à carga
    updateClasses(mediaQuery);
  
    // E ao mudar de tamanho
    mediaQuery.addEventListener("change", updateClasses);
});

// ************************************************** PARCERIAS FIM *****************************************************


//***************************************************** FORM CONTACTO ***********************************************************
let messageSuccess = document.getElementById('alertSuccess');
let messageFail = document.getElementById('alertFail');
let closeBtnSuccess = document.getElementById('alertSuccessBtn');
let closeBtnFail = document.getElementById('alertFailBtn');

document.querySelector("form").addEventListener("submit", function (e) {
    
    e.preventDefault();
    var form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            //alert("Mensagem enviada com sucesso!");
            messageSuccess.classList.remove('disp-none');
            form.reset();
        } else {
            //alert("Ocorreu um erro. Tente novamente.");
            messageFail.classList.remove('disp-none');
        }
    }).catch(error => {
        //alert("Erro ao enviar formulário.");
        messageFail.classList.remove('disp-none');
        console.log(error);
    });

    setTimeout(() => {
        messageSuccess.classList.add('disp-none');
        messageFail.classList.add('disp-none');
    }, 10000);

});


closeBtnSuccess.addEventListener("click", (e) => {
    console.log("Clicou no botão fechar - verde");
    messageSuccess.classList.add('disp-none');
});


closeBtnFail.addEventListener("click", (e) => {
    console.log("Clicou no botão fechar - vermelho");
    messageFail.classList.add('disp-none');
});

//***************************************************** FORM CONTACTO ***********************************************************




// ************************************************************** FOOTER *******************************************************

document.addEventListener("DOMContentLoaded", function () {
    const d = new Date();
    let year = d.getFullYear();
    console.log("Estamos no ano " + year);
    document.getElementById("currentYear").innerHTML = year;
});

document.getElementById("linkLivroRecl").addEventListener("mouseenter", () => {
    const image = document.getElementById("imageLinkLivroRecl");

    image.src = "./assets/imgs/livro_reclamacoes/reclamacoes-hover.webp";
});

document.getElementById("linkLivroRecl").addEventListener("mouseleave", () => {
    const image = document.getElementById("imageLinkLivroRecl");

    image.src = "./assets/imgs/livro_reclamacoes/reclamacoes.webp";
});




// ************************************************************** FOOTER FIM *******************************************************

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