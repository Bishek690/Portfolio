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
  const submitButton = form.querySelector('button[type="submit"]'); // Fixed typo: 'from' to 'form'
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  const templateParams = {
    from_name: form.querySelector('input[placeholder="Your Name"]').value,
    from_email: form.querySelector('input[placeholder="Your Email"]').value,
    phone: form.querySelector('input[placeholder="Your Phone Number"]').value,
    message: form.querySelector('textarea[placeholder="Your Message"]').value,
  };

  // Parameters for auto-reply email
  const autoReplyParams = {
    to_name: templateParams.from_name,
    to_email: templateParams.from_email,
  };

  // Send notification email to you
  const notificationEmail = emailjs.send("service_awpac52", "template_2c1e3ap", templateParams);
  
  // Send auto-reply email to user (replace 'your_auto_reply_template_id' with your actual template ID)
  const autoReplyEmail = emailjs.send("service_awpac52", "template_xbq472y", autoReplyParams);

  // Handle both emails
  Promise.all([notificationEmail, autoReplyEmail])
    .then(function (responses) {
      alert("Email sent successfully! You should receive a confirmation email shortly.");
      form.reset();
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    })
    .catch(function (error) {
      console.error("Email error:", error);
      alert("Failed to send email. Please try again later.");
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    });
}

  // Attach the event listener to the form
  document.querySelector("form").addEventListener("submit", sendEmail);
