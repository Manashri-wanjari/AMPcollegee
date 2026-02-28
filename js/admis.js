(function(){
   emailjs.init("EPN61X_fW6SXltKlJ");
})();

document.getElementById("admissionForm").addEventListener("submit", function(event) {
   event.preventDefault();

   emailjs.send("service_ardzunl","template_12xfnmk",{
      full_name: document.getElementById("fullName").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      percentage: document.getElementById("percentage").value,
      course: document.getElementById("course").value,
      address: document.getElementById("address").value
   })
   .then(function() {
      alert("Form Submitted Successfully ✅");
   }, function(error) {
      alert("Failed ❌");
      console.log(error);
   });
});
