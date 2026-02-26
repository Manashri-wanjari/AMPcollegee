document.addEventListener("DOMContentLoaded", function () {
  includeHTML();
});

function includeHTML() {
  var z, i, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");

    if (file) {
      xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Header not found";
          }
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };

      // IMPORTANT FIX 👇
      xhttp.open("GET", "../" + file, true);
      xhttp.send();
      return;
    }
  }
}


// all slides //

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

let index = 0;
const total = dots.length;

function updateDots(i){
  dots.forEach(d => d.classList.remove("active"));
  dots[i].classList.add("active");
}

function slide(){
  index++;
  slides.style.transition = "transform 0.9s ease-in-out";
  slides.style.transform = `translateX(-${index * 100}%)`;

  if(index === total){
    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = "translateX(0)";
      index = 0;
    }, 900);
  }

  updateDots(index === total ? 0 : index);
}

setInterval(slide, 3000);



// Admission Form Validation // 
function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let course = document.getElementById('course').value;
    if(name==="" || email==="" || mobile==="" || course===""){
        alert("All fields are required!");
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
 // principal //
 console.log("Principal Desk Loaded Successfully");

// toper//
// Auto slider already handled by CSS animation
console.log("Testimonials slider running");


//gallary//


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("morePhotosBtn").addEventListener("click", function () {
        window.location.href = "Photo.html";
    });
});

// all images//
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    let current = 0;

    const PAUSE_TIME = 3000;   // ⏸ image rukne ka time (video jaisa)
    const SLIDE_TIME = 800;    // 🎞 slide hone ka time (CSS se match)

    slides[0].style.left = "0";

    function nextSlide() {
        let currentSlide = slides[current];
        currentSlide.classList.add("exit");

        let next = (current + 1) % slides.length;
        let nextSlide = slides[next];

        nextSlide.style.transition = "none";
        nextSlide.style.left = "100%";
        nextSlide.offsetHeight; // force reflow

        nextSlide.style.transition = "left 0.8s ease-in-out";
        nextSlide.classList.add("active");
        nextSlide.style.left = "0";

        setTimeout(() => {
            currentSlide.classList.remove("active", "exit");
            currentSlide.style.left = "100%";
            current = next;
        }, SLIDE_TIME);
    }

    setInterval(nextSlide, PAUSE_TIME);
});

// about //
function openInstitute() {
  window.location.href = "institute.html";
}

function openFounder() {
  window.location.href = "founderpresident.html";
}

function openVision() {
  window.location.href = "vision_&_mission.html";
}

function openInfrastructure() {
  window.location.href = "infrastructure.html";
}


function openAnnual() {
  window.location.href = "annual-report.html";
}

function openOurmanagement() {
  window.location.href = "our-management.html";
}


// corce //
function openElectrical() {
  window.location.href = "electrical.html";
}

function openCivil() {
  window.location.href = "civil.html";
}

function openMechanical() {
  window.location.href = "mechanical.html";
}

function openComputer() {
  window.location.href = "computer.html";
}
function openScienceandHumanities() {
  window.location.href = "science.html";
}

function openSyllabus() {
  window.location.href = "syllabus.html";
}

// facilities //


function openLibrary(){
  window.location.href = "library.html";
}

function openHostel(){
  window.location.href = "hostel.html";
}

function openGymkhana(){
  window.location.href = "gymkhana.html";
}

function openStore(){
  window.location.href = "store.html";
}





// admission //

function validateForm() {
  const mobile = document.querySelector('input[name="mobile"]').value;
  const error = document.getElementById("mobileError");

  error.innerText = "";

  if (!/^[0-9]{10}$/.test(mobile)) {
    error.innerText = "Please enter a valid 10 digit mobile number";
    return false;
  }
  return true;
}

function openmanagement() {
  window.location.href = "our-management.html";
}


// civil enginering//


function showSection(id, el) {

  // hide all sections
  document.querySelectorAll(".section").forEach(sec =>
    sec.classList.remove("active")
  );

  // show selected section
  document.getElementById(id).classList.add("active");

  // remove active state from all sidebar items
  document.querySelectorAll(".sidebar li").forEach(li =>
    li.classList.remove("active")
  );

  // add active class to clicked item
  el.classList.add("active");
}


//infrastructure//
const sections = document.querySelectorAll(".infra-box");

const observer = new IntersectionObserver(entries =>{
  entries.forEach(e =>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
});

sections.forEach(s => observer.observe(s));

// scholarships //
const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Remove active from others
    buttons.forEach(b => b.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    // Activate clicked button + target tab
    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});
  

// ===================== COUNTERS WITH SCROLL =====================
function initCounters() {
  const counters = document.querySelectorAll(".counter");

  if (!counters.length) {
    // Agar counters DOM me abhi nahi hai, 500ms baad retry
    setTimeout(initCounters, 500);
    return;
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = Number(counter.getAttribute("data-target"));
        let count = 0;
        const speed = 20;
        const increment = Math.ceil(target / 120);

        function updateCounter() {
          if (count < target) {
            count += increment;
            counter.innerText = count > target ? target : count;
            setTimeout(updateCounter, speed);
          } else {
            counter.innerText = target;
          }
        }

        updateCounter();
        counterObserver.unobserve(counter); // run only once
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => {
    counter.innerText = "0";
    counterObserver.observe(counter);
  });
}

// Initialize counters after DOM content is ready
document.addEventListener("DOMContentLoaded", initCounters);

// ===================== EVENT BOXES ANIMATION =====================
const eventBoxes = document.querySelectorAll(".info-box");

const eventObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      eventObserver.unobserve(entry.target); // Animate once
    }
  });
}, { threshold: 0.2 });

eventBoxes.forEach(box => {
  box.style.opacity = "0";
  box.style.transform = "translateY(40px)";
  eventObserver.observe(box);
});


// our department //

document.addEventListener("DOMContentLoaded", function(){
  const cards = document.querySelectorAll(".ui-dept-card");

  function revealCards(){
    const trigger = window.innerHeight - 100;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if(top < trigger){
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }

  revealCards();
  window.addEventListener("scroll", revealCards);
});


// top//
document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");

  if (!track || cards.length === 0) return;

  // clone cards for infinite loop
  cards.forEach(card => {
    track.appendChild(card.cloneNode(true));
  });

  let position = 0;
  const speed = 0.8;   // 🔥 pehle 0.3 tha (increase = faster)

  function moveSlider() {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }

    requestAnimationFrame(moveSlider);
  }

  moveSlider();
});
