const contactForm = document.getElementById("contact-form");
const clientName = document.getElementById("client-name");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.textContent =
    `Thank you, ${clientName.value}! I will get back to you soon.`;

  contactForm.reset();
});