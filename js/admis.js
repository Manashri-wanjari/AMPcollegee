// Initialize EmailJS
(function(){
    emailjs.init("lA1VCgRw0n33pZU9e");  // Replace with your Public Key
})();

document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_34hlesj", "template_7c84ci6", this)
    .then(() => {
        alert("Application Submitted Successfully ✅");
        this.reset();
    })
    .catch((error) => {
        alert("Failed to send ❌ Please try again.");
        console.log("EmailJS Error:", error);
    });
});
