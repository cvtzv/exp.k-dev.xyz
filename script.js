// script.js
const altIpDropdown = document.querySelector('.alt-ip-dropdown');
const altIpBtn = document.querySelector('.alt-ip-btn');

altIpBtn.addEventListener('click', () => {
    altIpDropdown.classList.toggle('active');
});
