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
    enBtn.classList.remove("text-body-secondary");
    enBtn.classList.add("fw-bold");
  } else {
    ptBtn.classList.remove("text-body-secondary");
    ptBtn.classList.add("fw-bold");
    enBtn.classList.add("text-body-secondary");
    enBtn.classList.remove("fw-bold");
  }
});
