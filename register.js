document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    
    // Dummy registration logic
    if (isValidRegistration(username, mobile, password)) {
      document.getElementById("registerMessage").innerText = "Registration successful. Redirecting...";
      setTimeout(function() {
        window.location.href = "login.html"; // Redirect to login page after 2 seconds
      }, 2000);
    } else {
      document.getElementById("registerMessage").innerText = "Invalid registration details. Please try again.";
    }
  });
  
  function isValidRegistration(username, mobile, password) {
    // Dummy logic to validate registration details
    // Here you can implement the actual validation logic
    // For demonstration purposes, let's assume any non-empty username, mobile number, and password combination is valid
    return username.trim() !== "" && mobile.trim() !== "" && password.trim() !== "";
  }
  