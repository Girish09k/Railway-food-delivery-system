function getCompartmentFromPNR(pnr) {
  // Dummy function to simulate getting compartment from PNR
  // In real scenario, this would be determined by the actual PNR code
  // This is just for demonstration purposes
  if (pnr.startsWith("12")) {
    return "A/c 2-tier";
  } else if (pnr.startsWith("13")) {
    return "A/c 3-tier";
  } else {
    return "Unknown";
  }
}

function addToCart() {
  var pnr = document.getElementById("pnr").value;
  var restaurant = document.getElementById("restaurant").value;
  var foodItem = document.getElementById("foodItem").value;
  var quantity = document.getElementById("quantity").value;
  var cartItems = document.getElementById("cartItems");

  var li = document.createElement("li");
  li.textContent = quantity + "x " + foodItem + " from " + restaurant + " (PNR: " + pnr + ")";
  cartItems.appendChild(li);
}

function checkout() {
  document.getElementById("orderForm").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("payment").style.display = "block";
}

function processPayment() {
  var paymentMethod = document.getElementById("paymentMethod").value;

  if (paymentMethod === "upi") {
    var upiId = document.getElementById("upiId").value;
    if (upiId.trim() !== "") {
      document.getElementById("statusMessage").innerText = "Payment successful. Food will be delivered shortly.";
    } else {
      document.getElementById("statusMessage").innerText = "Please enter UPI ID.";
    }
  } else if (paymentMethod === "card") {
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    // Dummy validation - check if fields are not empty
    if (cardNumber.trim() !== "" && expiryDate.trim() !== "" && cvv.trim() !== "") {
      document.getElementById("statusMessage").innerText = "Payment successful. Food will be delivered shortly.";
    } else {
      document.getElementById("statusMessage").innerText = "Invalid payment details. Please try again.";
    }
  } else if (paymentMethod === "cash") {
    document.getElementById("statusMessage").innerText = "Cash on Delivery. Payment will be collected during delivery.";
  }
}
