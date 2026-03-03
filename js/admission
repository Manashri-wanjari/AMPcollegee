
// Initialize EmailJS
(function() {
    emailjs.init("EPN61X_fW6SXltKlJ");  // <-- Yaha apni Public Key daalo
})();

// Form Submit Event
document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_ardzunl", "template_12xfnmk", {
        full_name: document.getElementById("fullName").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        percentage: document.getElementById("percentage").value,
        course: document.getElementById("course").value,
        address: document.getElementById("address").value
    })
    .then(function(response) {
        alert("Form Submitted Successfully ✅");
        document.getElementById("admissionForm").reset();
    })
    .catch(function(error) {
        alert("Failed to Send ❌");
        console.error("EmailJS Error:", error);
    });
});
