const translations = {};

async function loadTranslation(lang) {
  const response = await fetch(`translation/${lang}.json`);
  const data = await response.json();
  translations[lang] = data;
}
function setTextContent(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
}

async function setLanguage(lang) {
  if (!translations[lang]) {
    await loadTranslation(lang);
  }

  // Helper function to safely set text content


  // Set header translations
  setTextContent("nav-about", translations[lang].header.about);
  setTextContent("nav-home", translations[lang].header.home);
  setTextContent("nav-tours", translations[lang].header.tours);
  setTextContent("nav-faq", translations[lang].header.faq);
  setTextContent("nav-contact", translations[lang].header.contact);
  setTextContent("nav-book-tour", translations[lang].header.book_tour);

  // Set hero translations
  setTextContent("hero-heading-first", translations[lang].hero.heading_first);
  setTextContent("hero-heading-second", translations[lang].hero.heading_second);
  setTextContent("hero-description-text", translations[lang].hero.description_text);
  setTextContent("hero-button", translations[lang].hero.button);

  // Set about translations
  setTextContent("about-heading", translations[lang].about.about_heading);
  setTextContent("about_paragraph", translations[lang].about.about_paragraph);

  // Set history translation
  setTextContent("history_heading", translations[lang].history.history_heading);
  setTextContent("history_paragraph", translations[lang].history.history_paragraph);

  // Set tour translations
  setTextContent("tour_heading", translations[lang].tour.tour_heading);
  setTextContent("tour_title_1", translations[lang].tour.tour_title_1);
  setTextContent("tour_title_2", translations[lang].tour.tour_title_2);
  setTextContent("tour_title_3", translations[lang].tour.tour_title_3);
  setTextContent("tour_title_4", translations[lang].tour.tour_title_4);
  setTextContent("tour_paragraph_1", translations[lang].tour.tour_paragraph_1);
  setTextContent("tour_paragraph_2", translations[lang].tour.tour_paragraph_2);
  setTextContent("tour_paragraph_3", translations[lang].tour.tour_paragraph_3);
  setTextContent("tour_paragraph_4", translations[lang].tour.tour_paragraph_4);
  setTextContent("tour_button", translations[lang].tour.tour_button);

  // Set spinner translations
  setTextContent("spinner_heading", translations[lang].spinner.spinner_heading);
  setTextContent("spinner_title_1", translations[lang].spinner.spinner_title_1);
  setTextContent("spinner_title_2", translations[lang].spinner.spinner_title_2);
  setTextContent("spinner_title_3", translations[lang].spinner.spinner_title_3);
  setTextContent("spinner_title_4", translations[lang].spinner.spinner_title_4);
  setTextContent("spinner_title_5", translations[lang].spinner.spinner_title_5);

  // Set FAQ translations
  setTextContent("faq_heading", translations[lang].faq.faq_heading);
  setTextContent("faq_question_1", translations[lang].faq.faq_question_1);
  setTextContent("faq_question_2", translations[lang].faq.faq_question_2);
  setTextContent("faq_question_3", translations[lang].faq.faq_question_3);
  setTextContent("faq_question_4", translations[lang].faq.faq_question_4);
  setTextContent("faq_question_5", translations[lang].faq.faq_question_5);
  setTextContent("faq_question_6", translations[lang].faq.faq_question_6);
  setTextContent("faq_question_7", translations[lang].faq.faq_question_7);
  setTextContent("faq_question_8", translations[lang].faq.faq_question_8);
  setTextContent("answer1", translations[lang].faq.faq_answer_1);
  setTextContent("answer2", translations[lang].faq.faq_answer_2);
  setTextContent("answer3", translations[lang].faq.faq_answer_3);
  setTextContent("answer4", translations[lang].faq.faq_answer_4);
  setTextContent("answer5", translations[lang].faq.faq_answer_5);
  setTextContent("answer6", translations[lang].faq.faq_answer_6);
  setTextContent("answer7", translations[lang].faq.faq_answer_7);
  setTextContent("answer8", translations[lang].faq.faq_answer_8);

  // Set gallery translations
  setTextContent("gallery_heading", translations[lang].gallery.heading);
  setTextContent("gallery-button", translations[lang].gallery.button);

  // Set CTA translations
  setTextContent("cta-heading", translations[lang].cta.heading);
  setTextContent("cta-paragraph", translations[lang].cta.paragraph);
  setTextContent("cta-button", translations[lang].cta.button);

  // Set footer translations
  setTextContent("footer-home", translations[lang].footer.home);
  setTextContent("footer-tours", translations[lang].footer.tours);
  setTextContent("footer-about", translations[lang].footer.about);
  setTextContent("footer-contact", translations[lang].footer.contact);

  setTextContent("contact-page-heading", translations[lang].contact_page.header);
  setTextContent("contact-page-paragraph", translations[lang].contact_page.paragraph);
  setTextContent("contact-page-website", translations[lang].contact_page.website);
  setTextContent("contact-page-address", translations[lang].contact_page.address);
  setTextContent("contact-page-question", translations[lang].contact_page.question);
  setTextContent("contact-page-button", translations[lang].contact_page.button);
  setTextContent("contact-page-full-name", translations[lang].contact_page.full_name);
  setTextContent("contact-page-email-address", translations[lang].contact_page.email_adress);
  setTextContent("contact-page-message", translations[lang].contact_page.message);
  setTextContent("contact-page-phone", translations[lang].contact_page.phone);


  setTextContent("booking-page-heading", translations[lang].booking_page.heading);
  setTextContent("booking-page-paragraph", translations[lang].booking_page.paragraph);
  setTextContent("booking-page-cta", translations[lang].booking_page.cta);
  setTextContent("booking-page-type-heading", translations[lang].booking_page.tour_type_heading);
  setTextContent("tour_type_1", translations[lang].booking_page.tour_type_1);
  setTextContent("tour_type_2", translations[lang].booking_page.tour_type_2);
  setTextContent("tour_type_3", translations[lang].booking_page.tour_type_3);
  setTextContent("tour_type_4", translations[lang].booking_page.tour_type_4);
  setTextContent("sub-tour-heading", translations[lang].booking_page.sub_tour_heading);
  setTextContent("booking-page-number-people", translations[lang].booking_page.num_people);
  setTextContent("booking-page-check-in", translations[lang].booking_page.check_in);
  setTextContent("booking-page-comments", translations[lang].booking_page.comments);





  // Set copyright translations
  setTextContent("copyright", translations[lang].copy_right);

  // Save the selected language to localStorage
  localStorage.setItem('selectedLanguage', lang);

  // Update the dropdown to reflect the selected language
  const languageSelect = document.getElementById("language-select");
  languageSelect.value = lang;
}

function getSavedLanguage() {
  const savedLang = localStorage.getItem('selectedLanguage');
  return savedLang || getDefaultLanguage();
}

function getDefaultLanguage() {
  const lang = navigator.language || navigator.userLanguage || "en";
  return lang.split("-")[0].toLowerCase();
}

function adjustContent() {
  const lang = getSavedLanguage();
  const mediaQuery = window.matchMedia("(max-width: 480px)");

  if (mediaQuery.matches) {
    // For screens smaller than 480px, change the content
    setTextContent("hero-description-text", translations[lang].hero.description_text_short);
  } else {
    // For larger screens, revert to the original content
    setTextContent("hero-description-text", translations[lang].hero.description_text);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const lang = getSavedLanguage();
  await setLanguage(lang);

  document.getElementById("language-select").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  });

  // Adjust content on initial load and on window resize
  adjustContent();
  window.addEventListener("resize", adjustContent);
  window.addEventListener("click", adjustContent);
  document.getElementById("language-select").addEventListener("change", adjustContent);
});
