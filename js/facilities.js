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




// Function to show content section and highlight sidebar
function showSection(id, el) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => sec.classList.remove('active'));

  // Remove active class from all sidebar items
  const menuItems = document.querySelectorAll('.sidebar ul li');
  menuItems.forEach(item => item.classList.remove('active'));

  // Show clicked section
  const section = document.getElementById(id);
  if(section) section.classList.add('active');

  // Highlight clicked sidebar item
  if(el) el.classList.add('active');
}

// Set first section active on page load
window.addEventListener('DOMContentLoaded', () => {
  const firstSection = document.querySelector('.content-section');
  const firstSidebar = document.querySelector('.sidebar ul li');
  if(firstSection) firstSection.classList.add('active');
  if(firstSidebar) firstSidebar.classList.add('active');
});
