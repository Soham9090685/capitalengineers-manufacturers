document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();
    let response = document.getElementById("formResponse");

    if(name && message){
        let phoneNumber = "919804162506";
        let whatsappURL = "https://wa.me/" + phoneNumber + 
                          "?text=" + encodeURIComponent(
                              "📩 New Contact Form Message\n\n" +
                              "👤 Name: " + name + "\n" +
                              "💬 Message: " + message
                          );

        window.open(whatsappURL, "_blank");

        response.style.display = "block";
        response.style.color = "green";
        response.textContent = "✅ Redirecting you to WhatsApp...";
        this.reset();
    } else {
        response.style.display = "block";
        response.style.color = "red";
        response.textContent = "⚠ Please fill in all fields.";
    }
});