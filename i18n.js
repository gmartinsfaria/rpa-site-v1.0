let enOn = false;

const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) {
      el.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-function]").forEach(el => {
    const key = el.getAttribute("data-i18n-function");
    el.setAttribute("data-function", translations[lang][key]);
  });

  // Atualizar descrição default da equipa se necessário
  const desc = document.getElementById("descriptionFunction");
  if (desc && desc.textContent.trim() === translations[lang === "en" ? "pt" : "en"]["teamDefaultDescription"]) {
    desc.textContent = translations[lang]["teamDefaultDescription"];
  }

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const translation = translations[lang][key];
    if (translation) {
      el.setAttribute("placeholder", translation);
    }
  });

  // Placeholder translation
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key];
  });

  // Custom validity messages
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
}



document.getElementById("langToggle").addEventListener("click", (event) => {
  event.preventDefault(); // evitar reload

  enOn = !enOn;
  const lang = enOn ? "en" : "pt";
  translatePage(lang);

  // Estilização (manter o que já tinhas)
  if (enOn) {
    ptBtn.classList.add("text-body-secondary");
    ptBtn.classList.remove("fw-bold");
    ptBtn.textContent = "pt";

    enBtn.textContent = "EN";
    enBtn.classList.remove("text-body-secondary");
    enBtn.classList.add("fw-bold");
    enBtn.classList.add("red");
  } else {
    ptBtn.classList.remove("text-body-secondary");
    ptBtn.classList.add("fw-bold");
    ptBtn.classList.add("red");
    ptBtn.textContent = "PT";

    enBtn.textContent = "en";
    enBtn.classList.add("text-body-secondary");
    enBtn.classList.remove("fw-bold");
  }
});
