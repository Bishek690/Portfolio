

// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Navbar Hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// Certificate Modal
function openModal(imgElement) {
  document.getElementById('modalImage').src = imgElement.src;
  var myModal = new bootstrap.Modal(document.getElementById('certificateModal'));
  myModal.show();
}

// EmailJS

  emailjs.init("TcVCPEa3CupXLV2BY"); 

  function sendEmail(event) {
    event.preventDefault(); 

    const form = event.target; 

    const templateParams = {
      from_name: form.querySelector('input[placeholder="Your Name"]').value,
      from_email: form.querySelector('input[placeholder="Your Email"]').value,
      phone: form.querySelector('input[placeholder="Your Phone Number"]').value,
      message: form.querySelector('textarea[placeholder="Your Message"]').value,
    };

    emailjs
      .send("service_awpac52", "template_2c1e3ap", templateParams)
      .then(
        function (response) {
          alert("Email sent successfully!");
          form.reset(); // Reset the form fields
        },
        function (error) {
          alert("Failed to send email. Please try again later.");
        }
      );
  }

  // Attach the event listener to the form
  document.querySelector("form").addEventListener("submit", sendEmail);
