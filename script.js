const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');

eyeIcon.addEventListener('click', () => {
  if(passwordInput.type == "password") {
    passwordInput.type = "text";
    eyeIcon.classList.add("bi-eye-fill");
    eyeIcon.classList.remove("bi-eye-slash-fill");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.add("bi-eye-slash-fill");
    eyeIcon.classList.remove("bi-eye-fill");
  }
})
