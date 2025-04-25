document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const msg = document.getElementById("formMsg");
  
    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
      msg.style.color = "red";
      msg.textContent = "Please fill all fields.";
      return;
    }
  
    if (!validateEmail(email.value)) {
      msg.style.color = "red";
      msg.textContent = "Please enter a valid email address.";
      return;
    }
  
    msg.style.color = "green";
    msg.textContent = "Form submitted successfully!";
    name.value = "";
    email.value = "";
    message.value = "";
  });
  
  function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email.toLowerCase());
  }
  