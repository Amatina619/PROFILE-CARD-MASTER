// function updateTime() {
//   const utcTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
//   function refreshTime() {
//       const utcTime = new Date().toISOString().split('.')[0] + ' UTC';
//       utcTimeElement.textContent = utcTime;
//   }
//   refreshTime();
//   setInterval(refreshTime, 1000);
// }
// updateTime();


// document.addEventListener('DOMContentLoaded', () => {

//   // ========== CONTACT PAGE FORM VALIDATION ==========
//   const contactForm = document.getElementById('contactForm');
//   if (contactForm) {
//     const fullName = contactForm.querySelector('#fullName');
//     const email = contactForm.querySelector('#email');
//     const subject = contactForm.querySelector('#subject');
//     const message = contactForm.querySelector('#message');

//     const errorName = document.getElementById('error-fullName');
//     const errorEmail = document.getElementById('error-email');
//     const errorSubject = document.getElementById('error-subject');
//     const errorMessage = document.getElementById('error-message');
//     const successMessage = document.getElementById('successMessage');

//     // Utility function to validate email format
//     function isValidEmail(email) {
//       // Simple email regex pattern
//       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     }

//     // Clear error messages
//     function clearErrors() {
//       errorName.textContent = '';
//       errorEmail.textContent = '';
//       errorSubject.textContent = '';
//       errorMessage.textContent = '';
//       successMessage.style.display = 'none';
//     }

//     contactForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       clearErrors();

//       let valid = true;

//       // Validate fullName - required
//       if (!fullName.value.trim()) {
//         errorName.textContent = 'Full name is required.';
//         valid = false;
//       }

//       // Validate email - required & valid format
//       if (!email.value.trim()) {
//         errorEmail.textContent = 'Email is required.';
//         valid = false;
//       } else if (!isValidEmail(email.value.trim())) {
//         errorEmail.textContent = 'Please enter a valid email address.';
//         valid = false;
//       }

//       // Validate subject - required
//       if (!subject.value.trim()) {
//         errorSubject.textContent = 'Subject is required.';
//         valid = false;
//       }

//       // Validate message - required & at least 10 characters
//       if (!message.value.trim()) {
//         errorMessage.textContent = 'Message is required.';
//         valid = false;
//       } else if (message.value.trim().length < 10) {
//         errorMessage.textContent = 'Message must be at least 10 characters.';
//         valid = false;
//       }

//       if (valid) {
//         // Show success message and reset form
//         successMessage.style.display = 'flex';
//         contactForm.reset();

//         // For accessibility
//         successMessage.focus();
//       }
//     });
//   }

//   //  ABOUT PAGE (Placeholder)
//   const aboutPage = document.querySelector('main.about-page');
//   if (aboutPage) {

// });

