const path = window.location.pathname;
const enOn = path.includes("/en"); // define se está em inglês

const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) el.textContent = translation;
  });

  document.querySelectorAll("[data-i18n-function]").forEach(el => {
    const key = el.getAttribute("data-i18n-function");
    el.setAttribute("data-function", translations[lang][key]);
  });

  const desc = document.getElementById("descriptionFunction");
  if (desc && desc.textContent.trim() === translations[lang === "en" ? "pt" : "en"]["teamDefaultDescription"]) {
    desc.textContent = translations[lang]["teamDefaultDescription"];
  }

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", translations[lang][key]);
  });

  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  if (emailInput) {
    emailInput.oninvalid = function () {
      this.setCustomValidity(translations[lang]["formErrorEmail"]);
    };
    emailInput.oninput = function () {
      this.setCustomValidity("");
    };
  }

  if (phoneInput) {
    phoneInput.oninvalid = function () {
      this.setCustomValidity(translations[lang]["formErrorPhone"]);
    };
    phoneInput.oninput = function () {
      this.setCustomValidity("");
    };
  }

  updateLanguageButtons(lang);
}

function updateLanguageButtons(lang) {
  const isEnglish = lang === "en";

  ptBtn.classList.toggle("text-body-secondary", isEnglish);
  ptBtn.classList.toggle("fw-bold", !isEnglish);
  ptBtn.classList.toggle("red", !isEnglish);
  ptBtn.textContent = isEnglish ? "pt" : "PT";

  enBtn.classList.toggle("text-body-secondary", !isEnglish);
  enBtn.classList.toggle("fw-bold", isEnglish);
  enBtn.classList.toggle("red", isEnglish);
  enBtn.textContent = isEnglish ? "EN" : "en";
}

// 👇 Detectar linguagem na URL ao carregar
window.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const lang = path.includes("/en") ? "en" : "pt";
  translatePage(lang);
});

// 👇 Alternar idioma e atualizar a URL sem recarregar
document.getElementById("langToggle").addEventListener("click", (event) => {
  event.preventDefault();

  const currentLang = window.location.pathname.includes("/en") ? "en" : "pt";
  const newLang = currentLang === "en" ? "pt" : "en";

  const basePath = window.location.pathname.split('/')[1];
  const fullBase = `/${basePath}`;
  const newPath = newLang === "en" ? `${fullBase}/en/` : `${fullBase}/`;

  window.history.pushState({}, '', newPath);
  translatePage(newLang);
});

