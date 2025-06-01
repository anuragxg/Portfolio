document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var alert = document.getElementById('successAlert');
  if (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        form.classList.remove('was-validated');
        form.reset();
        if (alert) {
          alert.classList.remove('d-none');
          setTimeout(function () {
            alert.classList.add('d-none');
          }, 3000);
        }
      }
      form.classList.add('was-validated');
    }, false);
  }
}); 