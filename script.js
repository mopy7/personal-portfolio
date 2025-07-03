import * as emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      title: "New Contact Message"
    };

    emailjs.send(
      "service_h9c26rm",       
      "template_2jdzmc3",      
      params,
      "nOBiW80Wg-5Xt-Mik"       
    )
    .then(() => {
      alert("✅ Your message has been sent successfully!");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("Email send error:", error);
      alert("❌ Failed to send message. Please try again later.");
    });
  });
});
