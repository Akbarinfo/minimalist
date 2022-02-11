let open = document.getElementById('id-menu');
let navbox = document.getElementById('id-nav');
let icon = document.getElementById('id-icon');

let count = 0;
open.addEventListener('click', function () {
  navbox.classList.toggle('open');
  if (count == 0) {
    icon.style.fontSize = '32px';
    icon.className = "bx bx-x";
    count++;
  } else {
    icon.className = "bx bx-menu";
    count = 0;
  }
})