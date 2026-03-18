document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let message = document.getElementById("message");

  document.querySelectorAll(".error-text").forEach(el => el.remove());

  let valid = true;

  function showError(input, msg) {
    let error = document.createElement("div");
    error.className = "error-text text-danger mt-1";
    error.innerText = msg;
    input.parentNode.appendChild(error);
    valid = false;
  }

  if (firstName.value.trim() === "") {
    showError(firstName, "First Name is required.");
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "Last Name is required.");
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.trim().match(emailPattern)) {
    showError(email, "Please enter a valid email address.");
  }

  let phonePattern = /^[0-9]{7,15}$/;
  if (!phone.value.trim().match(phonePattern)) {
    showError(phone, "Phone number must be 7-15 digits.");
  }

  if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters.");
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("backToTop");
  if (btn) {
    window.addEventListener("scroll", function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

    btn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
