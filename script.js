document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');
  
    // Toggle dropdown on button click
    dropdownBtn.addEventListener('click', function () {
      dropdownContent.classList.toggle('show');
    });
  
    // Close dropdown when clicking outside
    window.addEventListener('click', function (event) {
      if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
        }
      }
    });
  
    // Close dropdown when clicking on a link
    dropdownContent.addEventListener('click', function () {
      dropdownContent.classList.remove('show');
    });
  });