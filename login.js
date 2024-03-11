document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Dummy login logic
    if ((username === "admin" && password === "admin123") || isValidMobileOrGmail(username, password)) {
      document.getElementById("loginMessage").innerText = "Login successful. Redirecting...";
      setTimeout(function() {
        window.location.href = "index.html"; // Redirect to index page after 2 seconds
      }, 2000);
    } else {
      document.getElementById("loginMessage").innerText = "Invalid username or password. Please try again.";
    }
  });
  
  function isValidMobileOrGmail(username, password) {
    // Dummy logic to validate mobile number or Gmail
    // Here you can implement the actual validation logic
    // For demonstration purposes, let's assume any non-empty username and password combination is valid
    return username.trim() !== "" && password.trim() !== "";
  }
  
  
  